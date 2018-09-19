import React from 'react';
import { iconSize, isMobile, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorder2AndPadding } from '../styles/common'
import Experience from '../Experience'
import Icons from '../icons'

export default class WorkAndSkillsPrint extends React.Component {
  render() {
    return (
      <div>
        <Skills skills={this.props.skills} skillsObj={this.props.skillsObj} cvWidth={this.props.cvWidth} />
      </div>
    );
  }
}

class Skills extends React.Component {
  render() {
    var isMob = isMobile(this.props.cvWidth)
    var initialLeftStyle = isMob ? { borderRight: "3px solid black" } : {}
    var leftStyle = Object.assign(initialLeftStyle, getLeftSideDivStyle(this.props.cvWidth))

    var leftSide = isMob ? <h4>Skills</h4> : <Icons.Tools size={iconSize} />
    return (
      <div>
        <div style={leftStyle}>
          {leftSide}
        </div>
        <div style={mixWithBorder2AndPadding(getRightSideDivStyle(this.props.cvWidth))}>
          <div style={{margin: 10}} >{
            this.props.skills.map(x => <div style={{margin: 5, paddingLeft: 10, borderLeft: "3px solid black"}} ><Skill key={x.name} skill={x} skillsObj={this.props.skillsObj} /></div>)}
          </div>
        </div>
      </div>
    );
  }
}

class Skill extends React.Component {
  render() {
    return (
      <div>
        <p><b>{this.props.skill.name}</b> - {
          this.props.skill.keywords.map((x, i) => <Keyword key={x} keywordId={x}
            skillsObj={this.props.skillsObj}
            isFinal={i === (this.props.skill.keywords.length - 1)} />)}
        </p>
      </div>
    );
  }
}


class Keyword extends React.Component {
  render() {
    //var selectId = "keyword:" + this.props.keywordId
    var keyWordName = this.props.skillsObj.skills[this.props.keywordId].name
    var commaOrBlank = this.props.isFinal ? "" : ","
    return (
      <span >{keyWordName + commaOrBlank} </span>
    );
  }
}
