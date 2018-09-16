import React, {Component} from 'react'
import CV from "./components/CV"
import resume from "./resume.json"
import skills from "./skills.json"

export default class extends Component {
  render() {
    var theme = "default";
    var print = this.props.print === "true" || this.props.print === true;

    return (
      <CV 
          jsonResume={resume} 
          skills={skills} 
          theme={theme} 
          print={print} 
          divId={this.props.divId}
          cvType={this.props.cvType}
        />
    );
  }
}
