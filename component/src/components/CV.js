import React, { Component } from 'react';
import PropTypes from "prop-types"
import { resumeType } from "./resumeType"
import CVStateless from './CVStateless'

class CV extends Component {
  constructor(props) {
    super(props);
    var print = props.print;
    
    this.state = {
      cvWidth: 100,
      print
    };
    this.handleResize = this.handleResize.bind(this);
    this.getCVWidth = this.getCVWidth.bind(this);
  }

  getCVWidth() {
    var maxWidth = 1200;
    var width = document.getElementById(this.props.divId).offsetWidth;
    return width > maxWidth ? maxWidth : width;
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  componentWillMount() {
    // http://odinodin.no/2015-11-06-react-print/
    // Run a media query through the matchMedia API

    // won't have window during gatsby build
    if (typeof window !== `undefined`) {
      const query = window.matchMedia('print')
      const queryListener = function (m) {
        this.setState(
          Object.assign({}, this.state, {
          print: m.matches,
          cvWidth: 600 // force to be smaller layout
        }));
      }.bind(this)

      query.addListener(queryListener);
    }
  }

  handleResize() {
    this.setState(Object.assign({}, this.state, {
      cvWidth: this.getCVWidth()
    }));
  }

  render() {
    return (
      <CVStateless 
          jsonResume={this.props.jsonResume} 
          skills={this.props.skills} 
          print={this.state.print} 
          cvWidth={this.state.cvWidth}
          cvType={this.props.cvType} 
        />
    );
  }
}

CV.propTypes = {
  jsonResume: resumeType.isRequired,
  divId: PropTypes.string,
  theme: PropTypes.string,
  skills: PropTypes.object,
  print: PropTypes.bool
}

export default CV;
