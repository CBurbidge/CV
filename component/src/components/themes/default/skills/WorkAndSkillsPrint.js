import React from 'react';
import { iconSize } from '../styles/common'
import LeftRight from '../LeftRight'
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
    var that = this;
    var leftSide = function(isMob) {
      return isMob ? <h4>Skills</h4> : <Icons.Tools size={iconSize} />
    }
    
    var childFactory = function(childStyle){
      return (
        <div style={{margin: 10}} >{
          that.props.skills.map(x => <div style={Object.assign({}, childStyle, {margin: 5, paddingLeft: 10})} ><Skill key={x.name} skill={x} skillsObj={that.props.skillsObj} /></div>)}
        </div>
      );
    }

    return (<LeftRight isLeft={false} leftSide={leftSide} childFactory={childFactory} cvWidth={this.props.cvWidth} />)
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
