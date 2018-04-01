import React, { Component } from 'react';
import PropTypes from "prop-types"
import {resumeType } from "../../../resumeType"
import Basics from "./Basics"
import Work from "./Work"
import Volunteer from "./Volunteer"
import Education from "./Education"
import Awards from "./Awards"

class Default extends Component {
  render() {
    return (
      <div>
        {this.props.jsonResume.basics && <Basics basics={this.props.jsonResume.basics} print={this.props.print} />}
        {this.props.jsonResume.work.length > 0 && <Work work={this.props.jsonResume.work} />}
        {this.props.jsonResume.volunteer.length > 0 && <Volunteer volunteer={this.props.jsonResume.volunteer} />}
        {this.props.jsonResume.education.length > 0 && <Education education={this.props.jsonResume.education} />}
        {this.props.jsonResume.awards.length > 0 && <Awards awards={this.props.jsonResume.awards} />}
        
      </div>
    );
  }
}

Default.propTypes = {
  jsonResume: resumeType.isRequired,
  skills: PropTypes.object,
  print: PropTypes.bool
}

export default Default;
