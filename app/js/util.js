var _ = require("lodash");
var $ = require("jquery");
var ReactDOM = require("react-dom");
var util = {};

util.getJqueryDom = function(ReactComponent){
    return $(ReactDOM.findDOMNode(ReactComponent));
};

util.listToComponents = function(list, renderMethod){
    if(list instanceof Array && typeof renderMethod == "function"){
        var componentKey=1;
        return list.map(function(item){
            var component = renderMethod(item, componentKey);
            componentKey++;
            return component;
        });
    }
};


module.exports = util;

