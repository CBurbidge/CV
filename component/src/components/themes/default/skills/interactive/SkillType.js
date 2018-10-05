import React from 'react';
import { selectedTypes, getSkillClass } from './selected'
import "./transitions.css"
import SkillLogos from "./SkillLogos"

export default class SkillType extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
    this.isSelected = this.props.isSelected.bind(this);
    this.state = { hover: false }
  }
  handleMouseIn() {
    this.setState({ hover: true })
  }

  handleMouseOut() {
    this.setState({ hover: false })
  }
  render() {
    var selected = this.isSelected(selectedTypes.SkillType, this.props.skill.name);
    var skillClass = getSkillClass(selected)
    var basicStyle = {
      display: "inline-block",
      padding: 3
    }
    // if(this.state.hover){
    //   skillClass = getSkillClass(selectedValues.Visible)
    // }

    return (
      <div className={skillClass} style={basicStyle}
        onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >
        <span onClick={() => this.clickSelect(selectedTypes.SkillType, this.props.skill.name)}>
          {this.props.skill.name}
        </span>
        <SkillLogos
          skillIds={this.props.skill.keywords} show={this.state.hover}
          clickSelect={this.clickSelect} cvWidth={this.props.cvWidth}
          logoPrefix={this.props.logoPrefix}
        />
      </div>
    );
  }
}


