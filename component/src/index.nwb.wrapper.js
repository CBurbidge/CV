import React, { Component } from 'react';
import IndexNwb from './index.nwb';
import queryString from 'query-string'

class CVWrapper extends Component {
  render() {
    const values = queryString.parse(this.props.location.search);
    
    var print = values.print === "true" || values.print === "True" ;
    
    return (<IndexNwb divId={"cvDiv"} print={print}  />)
  }
}
export default CVWrapper;
