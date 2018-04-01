import React, { Component } from 'react';
import PropTypes from "prop-types"
import { resumeType } from "../resumeType"
import Default from './themes/default'

class CV extends Component {
  render() {
    
    return (
      <div>
        <Default jsonResume={this.props.jsonResume} skills={this.props.skills} print={this.props.print} />
      </div>
    );
  }
}

CV.propTypes = {
  jsonResume: resumeType.isRequired,
  theme: PropTypes.string,
  skills: PropTypes.object,
  print: PropTypes.bool
}

export default CV;
