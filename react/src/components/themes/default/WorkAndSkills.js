import React from 'react';
import { rightSideDivStyle, leftSideDivStyle, mixWithBorderAndPadding, mixWithBorder2AndPadding } from './commonStyle'

export default class WorkAndSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: "" };

    this.clickSelect = this.clickSelect.bind(this);
  }

  clickSelect(selectId) {
    alert(selectId);
    this.setState(prevState => ({
      selected: selectId
    }));
  }

  render() {
    return (
      <div>
        <Experience work={this.props.work} clickSelect={this.clickSelect} selected={this.state.selected} />

        {this.props.print && <Skills skills={this.props.skills} skillsObj={this.props.skillsObj} clickSelect={this.clickSelect} selected={this.state.selected} />}


      </div>
    );
  }
}

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
  }

  render() {
    return (
      <div>
        <div style={leftSideDivStyle}>
          <h4>Experience</h4>
        </div>
        <div style={rightSideDivStyle}>
          <div style={mixWithBorder2AndPadding({})} >{
            this.props.work.map(x => <WorkPlace key={x.company} work={x}
              clickSelect={this.props.clickSelect}
              selected={this.props.selected} />)}
          </div>
        </div>
      </div>
    );
  }
}

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
  }

  render() {
    return (
      <div>
        <div style={leftSideDivStyle}>
          <h4>Skills</h4>
        </div>
        <div style={rightSideDivStyle}>
          <div style={mixWithBorderAndPadding({})} >{
            this.props.skills.map(x => <Skill key={x.name} skill={x} skillsObj={this.props.skillsObj}
              clickSelect={this.props.clickSelect}
              selected={this.props.selected} />)}
          </div>
        </div>
      </div>
    );
  }
}

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
  }

  render() {
    return (
      <div>
        <p><b>{this.props.skill.name}</b> - {
          this.props.skill.keywords.map((x, i) => <Keyword key={x} keywordId={x}
            skillsObj={this.props.skillsObj}
            clickSelect={this.props.clickSelect}
            selected={this.props.selected}
            isFinal={i === (this.props.skill.keywords.length - 1)} />)}
        </p>
      </div>
    );
  }
}


class Keyword extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
  }

  render() {
    var selectId = "keyword:" + this.props.keywordId
    var keyWordName = this.props.skillsObj.skills[this.props.keywordId].name
    var commaOrBlank = this.props.isFinal ? "" : ","
    return (
      <span onClick={() => this.props.clickSelect(selectId)}>{keyWordName + commaOrBlank} </span>
    );
  }
}


class WorkPlace extends React.Component {
  constructor(props) {
    super(props);
    //    this.clickSelect = this.clickSelect.bind(this);
  }

  // clickSelect(selectId) {
  //   alert(selectId);
  //   this.setState(prevState => ({
  //     selected: selectId
  //   }));
  // }

  render() {
    var selectId = "work:" + this.props.work.company
    return (
      <div>
        <div onClick={() => this.props.clickSelect(selectId)}>
          <p key={this.props.work.company}>{this.props.work.company}</p>
        </div>
      </div>
    );
  }
}
