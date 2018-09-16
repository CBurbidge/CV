import React, { Component } from 'react';
import IndexNwb from './index.nwb';
import queryString from 'query-string'

class CVWrapper extends Component {
  render() {
    const values = queryString.parse(this.props.location.search);
    
    var print = values.print === "true" || values.print === "True" ;
    
    var cvType = values.type ? values.type : "default" ;
    
    var logoPrefix = values.logoPrefix ? "/" + values.type : "" ;
    
    return (<IndexNwb divId={"cvDiv"} print={print} cvType={cvType} logoPrefix={logoPrefix} />)
  }
}
export default CVWrapper;
