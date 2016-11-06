var React = require('react');
import { connect } from 'react-redux';
import {Link} from "react-router";
var rootPath = "/app/";
        //<Link className="header item" to={rootPath + "page1/"}>Page1</Link>
var Menu = React.createClass({
  render: function(){
    return (
    <div className="ui fixed inverted menu">
      <div className="ui container">
        <div className="center">
          <img src="/images/logo.jpg" style={{width:"160px",height:"80px"}}></img>
        </div>
        <Link className="header item" to={rootPath}>Why Matters</Link>
        <Link className="header item" to={rootPath}>Take Actions!</Link>
        <Link className="header item" to={rootPath}>Impact</Link>
        <Link className="header item" to={rootPath}>People</Link>
        <div className="menu right">
          <div className="ui simple dropdown item">
          Login
          </div>
        </div>
      </div>
    </div>
    );
  }
});
module.exports = Menu;
