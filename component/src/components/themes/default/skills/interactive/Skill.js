import React from 'react';
import { selectedTypes, getSkillClass } from './selected'
import "./transitions.css"

export default class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
    this.isSelected = this.props.isSelected.bind(this);
  }

  render() {
    var selected = this.isSelected(selectedTypes.Skill, this.props.skillId)
    var skillName = this.props.skillsObj.skills[this.props.skillId].name
    var basicStyle = {
      display: "inline-block",
      padding: 3
    }
    var skillClass = getSkillClass(selected)
    return (
      <div className={skillClass}
        style={basicStyle}
        onClick={() => this.clickSelect(selectedTypes.Skill, this.props.skillId)} >
        <span>{skillName}</span>
      </div>
    );
  }
}

