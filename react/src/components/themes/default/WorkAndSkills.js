import React from 'react';
import { rightSideDivStyle, leftSideDivStyle, mixWithBorderAndPadding, mixWithBorder2AndPadding } from './commonStyle'
import Experience from "./Experience"

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
    console.log("selected - " + type + value)
    //console.log(JSON.stringify(Object.keys(this)))
    this.setState({
      selectedType: type,
      selectedValue: value
    });
    
  }

  isSelected(type, value) {
    console.log("type - " + type + ", value - " + value);
    var selectedIsSkill = function () {
      if (type === "Skill") return value === this.state.selectedValue;
      return false
    }
    var selectedIsWork = function () {
      var workObj = this.props.skillsObj.settings[this.state.selectedValue];
      if (!workObj) return false;
      if (type === "Skill") return workObj.skills.includes(value);
      return false;
    }
    var selectedIsSkillType = function () {
      var skillTypeObj = this.props.skillsObj.skillTypes[this.state.selectedValue];
      if (!skillTypeObj) return false;
      if (type === "Skill") return skillTypeObj.keywords.includes(value);
      return false;
    }
    if (this.state.selectedType === "Skill") return selectedIsSkill();
    if (this.state.selectedType === "SkillType") return selectedIsSkillType();
    if (this.state.selectedType === "Work") return selectedIsWork();
    if (type === "Work") return true
    else return false;
  }

  render() {
    return (
      <div>
        <Experience work={this.props.work} clickSelect={this.clickSelect} isSelected={this.isSelected} />
        <SkillTypes skills={this.props.skills} skillsObj={this.props.skillsObj} clickSelect={this.clickSelect} isSelected={this.isSelected} />
        <hr />
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
    return (
      <div>
        <div style={leftSideDivStyle}>
          <h4>Skills</h4>
        </div>
        <div style={rightSideDivStyle}>
          <div style={mixWithBorderAndPadding({})} >
            <div>
              {this.props.skills.map(x => <SkillType key={x.name} skill={x} skillsObj={this.props.skillsObj}
                clickSelect={this.props.clickSelect}
                isSelected={this.props.isSelected} />)}
            </div>
            <div>
              {allSkills.map(x => <Skill key={x.name} skillId={x} skillsObj={this.props.skillsObj}
                clickSelect={this.props.clickSelect}
                isSelected={this.props.isSelected} />)}
            </div>

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
    this.selected = this.isSelected("SkillType", this.props.skill.name)
  }

  render() {
    return (
      <div style={{
        padding: 5,
        margin: 5,
        display: "inline-block",
        border: "1px solid black"
      }}>
        <span onClick={() => this.clickSelect("SkillType", this.props.skill.name)}
          style={{
            //padding: 20
          }}
        >
          <b>{this.props.skill.name}</b>
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
    this.selected = this.isSelected("Skill", this.props.skillId)
  }

  render() {
    var skillName = this.props.skillsObj.skills[this.props.skillId].name
    return (
      <div onClick={() => this.clickSelect("Skill", this.props.skillId)}
        style={{
          padding: this.selected ? 10 : 5,
          margin: 5,
          display: "inline-block",
          border: (this.selected ? "3" : "1") + "px solid black"
        }}>
        <span>{skillName}</span>
      </div>
    );
  }
}


