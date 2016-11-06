var React = require('react');
var Menu = React.createClass({
  render: function(){
    return (
    <div className="ui fixed inverted menu">
      <div className="ui container">
        <a href="#" className="header item">
          Citizen Taiwan
        </a>
        <a href="#" className="item">Home</a>
        <div className="ui simple dropdown item">
          Dropdown <i className="fa fa-caret-down"></i>
          <div className="menu">
            <a className="item" href="#">Link Item</a>
            <a className="item" href="#">Link tem</a>
            <div className="divider"></div>
            <div className="header">Header Item</div>
            <div className="item">
              <i className="dropdown icon"></i>
              Sub Menu
              <div className="menu">
                <a className="item" href="#">Link Item</a>
                <a className="item" href="#">Link Item</a>
              </div>
            </div>
            <a className="item" href="#">Link Item</a>
          </div>
        </div>
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
