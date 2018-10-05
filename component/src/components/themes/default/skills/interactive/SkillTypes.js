import React from 'react';
import { iconSize, isMobile, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorder2AndPadding } from '../../styles/common'
import Icons from '../../icons'
import "./transitions.css"
import SkillType from "./SkillType"
import Setting from "./Setting"
import Skill from "./Skill"

export default class SkillTypes extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
    this.isSelected = this.props.isSelected.bind(this);
    this.getSelectedText = this.props.getSelectedText.bind(this);
  }

  render() {
    var allSkills = Object.keys(this.props.skillsObj.skills)
    var isMob = isMobile(this.props.cvWidth)
    var initialStyle = isMob ? { borderRight: "3px solid black" } : {}
    var leftSide = isMob ? <h4>Skills</h4> : <Icons.Tools size={iconSize} />

    var skillsPadding = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      margin: 10,
      border: "2px solid black",
      padding: 10,
      borderRadius: 10
    }
    
    var logoPrefix = this.props.logoPrefix || "";

    return (
      <div style={initialStyle}>
        <div style={
          Object.assign({}, getLeftSideDivStyle(this.props.cvWidth))
        }>
          {leftSide}
        </div>
        <div style={
          Object.assign({}, mixWithBorder2AndPadding(getRightSideDivStyle(this.props.cvWidth)))
        }>

          <div>
            {this.getSelectedText()}
          </div>

          <div style={skillsPadding}>
            {this.props.work.map(x => <Setting key={x.company} work={x} skillsObj={this.props.skillsObj} cvWidth={this.props.cvWidth}
              clickSelect={this.props.clickSelect}
              isSelected={this.props.isSelected} 
              logoPrefix={logoPrefix} />)}
          </div>

          <div style={skillsPadding}>
            {this.props.skills.map(x => <SkillType key={x.name} skill={x} skillsObj={this.props.skillsObj} cvWidth={this.props.cvWidth}
              clickSelect={this.props.clickSelect}
              isSelected={this.props.isSelected}
              logoPrefix={logoPrefix} />)}
          </div>

          <div style={skillsPadding}>
            {allSkills.map(x => <Skill key={x} skillId={x} skillsObj={this.props.skillsObj} cvWidth={this.props.cvWidth}
              clickSelect={this.props.clickSelect}
              isSelected={this.props.isSelected} />)}
          </div>
        </div>
      </div>
    );
  }
}

