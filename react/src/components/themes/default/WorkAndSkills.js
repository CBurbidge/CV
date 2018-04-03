import React from 'react';
import { iconSize, rightSideDivStyle, leftSideDivStyle, mixWithBorderAndPadding, mixWithBorder2AndPadding } from './commonStyle'
import { isSelectedFunc } from './selected'
import Experience from "./Experience"
import Icons from './icons'

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
          <Icons.Tools size={iconSize} />
          {/* <h4>Skills</h4> */}
        </div>
        <div style={rightSideDivStyle}>
          <div style={mixWithBorderAndPadding({})} >
            <div>
              {this.props.skills.map(x => <SkillType key={x.name} skill={x} skillsObj={this.props.skillsObj}
                clickSelect={this.props.clickSelect}
                isSelected={this.props.isSelected} />)}
            </div>
            <div>
              {allSkills.map(x => <Skill key={x} skillId={x} skillsObj={this.props.skillsObj}
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
  }

  render() {
    var selected = this.isSelected("SkillType", this.props.skill.name);

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
  }

  render() {
    var selected = this.isSelected("Skill", this.props.skillId)
    var skillName = this.props.skillsObj.skills[this.props.skillId].name
    return (
      <div onClick={() => this.clickSelect("Skill", this.props.skillId)}
        style={{
          padding: selected ? 10 : 5,
          margin: 5,
          display: "inline-block",
          border: (selected ? "3" : "1") + "px solid black"
        }}>
        <span>{skillName}</span>
      </div>
    );
  }
}


