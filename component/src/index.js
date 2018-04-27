import React, {Component} from 'react'
import CV from "./components/CV"
import resume from "./resume.json"
import skills from "./skills.json"

export default class extends Component {
  render() {
    var theme = "default";
    var divId = "cvElement"
    var print = false;

    return (
      <div id={divId} >
        <CV jsonResume={resume} skills={skills} theme={theme} print={print} divId={divId} />
      </div>
    );
  }
}
