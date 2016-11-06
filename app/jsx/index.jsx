require("font-awesome/css/font-awesome.css");
require("../css/semantic.css");

var _ = require("lodash");
require("../js/semantic.js");

var React = require("react");
var ReactDOM = require("react-dom");

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = require("../js/store.js");

 var Menu = require("./Menu.jsx");
function mapStateToProps(state){

  return {};
}

function mapDispatchToProps(dispatch){
  return {

  };
}




var rootPath = "/app/";

var App = React.createClass({
  render: function(){
    return (
    <div>
      <Menu />
    </div>);
  }
});
var AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="*" component={AppContainer}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
