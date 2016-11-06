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
var Page1 = React.createClass({
  render: function(){
    return (
    <div>Page1</div>
        );
  }
});

var Page1Container = connect(mapStateToProps, mapDispatchToProps)(Page1);
module.exports = Page1;
