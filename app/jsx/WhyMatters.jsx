//<div class="ui four column grid">

var React = require('react');
import { connect } from 'react-redux';
import {Link} from "react-router";
        //<Link className="header item" to={rootPath + "page1/"}>Page1</Link>
var Page = React.createClass({
  render: function(){
    return (
    <div className="ui two column grid">
      <div className="column">1</div>
      <div className="column"><img src="/images/superhero.png" style={{width:"480px",height:"320px"}}/></div> 
    </div>
    );
  }
});
module.exports = Page;
