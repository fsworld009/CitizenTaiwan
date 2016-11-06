var express = require("express");
var router = express.Router();
var Promise = require('bluebird');
var path = require('path');
var fs = require("fs");
Promise.promisifyAll(fs);

var basePath = path.resolve(__dirname, "data/");
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get("/headings/", function(req, res, next){
    fs.readFileAsync(basePath + "/headings.json","utf-8").then(function(data){
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
        //return Promise.resolve();
    });
    /*},function(err){
        return fs.readFileAsync(basePath + "/profiles/default.json","utf-8");
    }).then(function(data){
        if(data){
            responseJson = data;
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(responseJson);
    });*/
});


module.exports = router;
