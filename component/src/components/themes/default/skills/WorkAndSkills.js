import React from 'react';
import { iconSize, isMobile, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorderAndPadding } from '../styles/common'
import { isSelectedFunc, selectedTypes, getSkillClass, getSettingClass, getSkillStyle } from './selected'
import Experience from "./Experience"
import Icons from '../icons'
import "./transitions.css"

export default class WorkAndSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: "",
      selectedValue: ""
    };

    this.clickSelect = this.clickSelect.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  clickSelect(type, value) {
    this.setState({
      selectedType: type,
      selectedValue: value
    });

  }

  isSelected(type, value) {
    return isSelectedFunc(this.state.selectedType, this.state.selectedValue, type, value, this.props.skillsObj);
  }

  render() {
    return (
      <div>
        <Experience work={this.props.work} clickSelect={this.clickSelect} isSelected={this.isSelected} cvWidth={this.props.cvWidth} />
        <SkillTypes skills={this.props.skills} skillsObj={this.props.skillsObj} clickSelect={this.clickSelect} isSelected={this.isSelected} cvWidth={this.props.cvWidth} />
      </div>
    );
  }
}

class SkillTypes extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
    this.isSelected = this.props.isSelected.bind(this);
  }

  render() {
    var allSkills = Object.keys(this.props.skillsObj.skills)
    var isMob = isMobile(this.props.cvWidth)
    var initialLeftStyle = isMob ? { borderLeft: "3px solid black" } : {}
    var leftSide = isMob ? <h4>Skills</h4> : <Icons.Tools size={iconSize} />

    var skillsPadding = { margin: 10 }

    return (
      <div>
        <div style={
          Object.assign(initialLeftStyle, getLeftSideDivStyle(this.props.cvWidth))
        }>
          {leftSide}
        </div>
        <div style={
          Object.assign({}, mixWithBorderAndPadding(getRightSideDivStyle(this.props.cvWidth)))
        }>
          <div style={skillsPadding}>
            {this.props.skills.map(x => <SkillType key={x.name} skill={x} skillsObj={this.props.skillsObj}
              clickSelect={this.props.clickSelect}
              isSelected={this.props.isSelected} />)}
          </div>
          <div style={skillsPadding}>
            {allSkills.map(x => <Skill key={x} skillId={x} skillsObj={this.props.skillsObj}
              clickSelect={this.props.clickSelect}
              isSelected={this.props.isSelected} />)}
          </div>
        </div>
      </div>
    );
  }
}

class SkillType extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
    this.isSelected = this.props.isSelected.bind(this);
  }

  render() {
    var selected = this.isSelected(selectedTypes.SkillType, this.props.skill.name);
    var skillClass = getSkillClass(selected)
    var basicStyle = {
      display: "inline-block",
      padding: 3
    }
    return (
      <div className={skillClass} style={basicStyle} >
        <span onClick={() => this.clickSelect(selectedTypes.SkillType, this.props.skill.name)}>
          <b >{this.props.skill.name}</b>
        </span>
      </div>
    );
  }
}


class Skill extends React.Component {
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

