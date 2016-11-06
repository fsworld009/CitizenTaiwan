var React = require("react");
import { connect } from 'react-redux';
var _ = require("lodash");
var util = require("../js/util.js");

function loadHeadings(){
    return function(dispatch){
      dispatch({
            type: "LOADING",
            loading: true
      });
      $.getJSON("/services/headings/", function(data){
        dispatch({
          type: "LOADING",
          loading: false,
          content: {
            page: "headings",
            data: data
          }
        });
      });
    };
};


function mapStateToProps(state){
  return {
    headings: state.get("headings")
  };
}

function mapDispatchToProps(dispatch){
  return {
    loadHeadings: function(){
      dispatch(loadHeadings());
    }
  };

}
var Headings = React.createClass({
  render: function(){
  console.log("headings", this.props.headings);
  if(typeof this.props.headings == "undefined"){
    this.props.loadHeadings();
    return (<span>Loading</span>);
  }else{
    return (
           <div className="ui three stackable cards">
            {
              util.listToComponents(this.props.headings, function(heading, key){
                return (
                  <div className="card">
                    <div className="image">
                      {heading.title}
                    </div>
                  </div>
                  );
              })
            }
           </div>   
        );
    }
  }
});

var HeadingsContainer = connect(mapStateToProps, mapDispatchToProps)(Headings);
module.exports = HeadingsContainer;
