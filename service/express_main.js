var express = require('express');
var app = express();
var path = require('path');

var basePath = path.resolve(__dirname);

//var Promise = require('bluebird');
var fs = require('fs');
var bodyParser = require("body-parser");
//Promise.promisifyAll(fs);


var environment = process.env.NODE_ENV;

app.use(bodyParser.json());
app.set('views', './views')
app.set('view engine', 'ejs');

app.get("/app/*", function(req, res, next){
    req.url = "/app/";
    next();
});
app.get("/app/", function(req, res, next){
    res.render("app",{env: environment});
});

app.use('/js/', express.static(path.resolve(__dirname + '/js/')));
app.use('/css/', express.static(path.resolve(__dirname + '/css/')));
app.use('/fonts/', express.static(path.resolve(__dirname + '/fonts/')));

if(environment === "production"){
    //production
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
}else{
    //use express.static in production
    var webpack = require('webpack');
    //var WebpackDevServer = require('webpack-dev-server');
    var config = require('../webpack.dev-server.config.js');
    var compiler = webpack(config);

    var webpackDevMiddleware = require("webpack-dev-middleware");
    app.use("/bundle/",webpackDevMiddleware(compiler, {
        // options
    }));
    app.use(require("webpack-hot-middleware")(compiler));

    // new WebpackDevServer(webpack(config), {
    //    hot: true,
    //    historyApiFallback: true,
    //    proxy: {
    //      "*": "http://localhost:3000"
    //    }
    // }).listen(3001, 'localhost', function (err, result) {
    //    if (err) {
    //      console.log(err);
    //    }
    //
    //    console.log('webpack-dev-server Listening on port 3001');
    // });


    var reload = require('reload');
    var http = require('http');

    var server = http.createServer(app);
    reload(server, app);
    server.listen(3000, function(){
        console.log('(Dev) listening on port 3000');
    });
}

