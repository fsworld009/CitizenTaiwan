var _ = require("lodash");
var $ = require("jquery");
// var actions = require('./actions.js');
import {LOCATION_CHANGE}  from "react-router-redux";
var Immutable = require('immutable');
import {INIT}  from "redux";
// import {getId} from "./ajax.js";
// import {setLang} from "./database.js";


var reducer = function(state, action){
    console.log("reducer", state.toJS(), action);
    if(action.type === "@@redux/INIT"){
        //return state.merge(initialState);
        return state;
    }
    if (action.type === LOCATION_CHANGE) {
        return state.setIn(["routing", "locationBeforeTransitions"], action.payload);
    }
    if(action.type == "LOADING"){
        

        if(action.loading == false){
            console.log("GET DATA", action);
            return state.set(action.content.page, action.content.data);
        }
    }
    console.log("return state",state.toJS());
    return state;
};




module.exports = reducer;
