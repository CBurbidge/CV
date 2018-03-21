import React, { Component } from 'react';
import PropTypes from "prop-types"
import {resumeType } from "../../resumeType"
import Basics from "./partials/Basics"
import Work from "./partials/Work"
import Volunteer from "./partials/Volunteer"
import Education from "./partials/Education"
import Awards from "./partials/Awards"

class CV extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to React</h1>
        </header>
        {this.props.jsonResume.basics && <Basics basics={this.props.jsonResume.basics} />}
        {this.props.jsonResume.work.length > 0 && <Work work={this.props.jsonResume.work} />}
        {this.props.jsonResume.volunteer.length > 0 && <Volunteer volunteer={this.props.jsonResume.volunteer} />}
        {this.props.jsonResume.education.length > 0 && <Education education={this.props.jsonResume.education} />}
        {this.props.jsonResume.awards.length > 0 && <Awards awards={this.props.jsonResume.awards} />}
        
      </div>
    );
  }
}

CV.propTypes = {
  jsonResume: resumeType.isRequired
}

export default CV;
