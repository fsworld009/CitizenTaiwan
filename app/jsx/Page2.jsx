var React = require("react");
import { connect } from 'react-redux';
var _ = require("lodash");

function mapStateToProps(state){
  return {
  };
}

function mapDispatchToProps(dispatch){
  return {};
}
var Page2 = React.createClass({
  render: function(){
    return (
    <div>Page2</div>
        );
  }
});

var Page2Container = connect(mapStateToProps, mapDispatchToProps)(Page2);
module.exports = Page2Container;
