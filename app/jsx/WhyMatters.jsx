//<div class="ui four column grid">

var React = require('react');
import { connect } from 'react-redux';
import {Link} from "react-router";
        //<Link className="header item" to={rootPath + "page1/"}>Page1</Link>
var Page = React.createClass({
  render: function(){
    return (
    <div className="ui two column grid">
      <div className="column">
        <h1>Awareness, Action, and Change!</h1> 
        <h5>Our goal is to raise awareness of Taiwan nationalism, Independence, and global citizen participation.  Taiwan has its important position among world economy and contributes 10% of GDP and trade partner all around the world. Taiwan has 99% healthcare coverage and best medical care.  Also, Taiwan dedicates to humanity and liberty.  Taiwan ranked #35 most welfare country worldwide, and #5 in Asia. 
        With all the facts that Taiwan has done to the world, we want the world recognize and support Taiwan as a country regardless of China’s opposition.
        </h5>
        <h3>Be proud, and show your support to Taiwan.</h3>
      
      </div>
      <div className="column"><img src="/images/superhero.png" style={{width:"480px",height:"520px"}}/></div> 
    </div>
    );
  }
});
module.exports = Page;
