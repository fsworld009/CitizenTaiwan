require("font-awesome/css/font-awesome.css");
require("../css/semantic.css");
require("../css/style.css");

var _ = require("lodash");
require("../js/semantic.js");

var React = require("react");
var ReactDOM = require("react-dom");

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = require("../js/store.js");

 var Menu = require("./Menu.jsx");
 var Page1 = require("./Page1.jsx");
 var Page2 = require("./Page2.jsx");
 var WhyMatters = require("./WhyMatters.jsx");
 var Topics = require("./Topics.jsx");
 //var Headings = require("./Headings.jsx");
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
      <div className="ui main container" style={{marginTop: "7em"}}>
        {this.props.children}
      </div>
    </div>);
  }
});
var AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path={rootPath} component={AppContainer}>
          <Route path="topics" component={Topics}/>
          <IndexRoute component={WhyMatters} />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
