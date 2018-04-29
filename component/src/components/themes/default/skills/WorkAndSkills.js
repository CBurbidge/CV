import React from 'react';
import { iconSize, isMobile, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorderAndPadding } from '../styles/common'
import { isSelectedFunc, selected as selectedValues, selectedTypes, getSkillClass, getSettingClass, getSkillStyle } from './selected'
import Experience from "../Experience"
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
    var that = this;
    var getSelectedInfo = function () {
      var headingType = "";
      var type = that.state.selectedType
      var name = "todo"
      var description = "todo"
      switch (type) {
        case selectedTypes.Skill:
          headingType = "Skill";
          var skill = that.props.skillsObj.skills[that.state.selectedValue]
          name = skill.name;
          description = skill.description
          break;
        case selectedTypes.Setting:
          var setting = Object.values(that.props.skillsObj.settings)
            .filter(s => s.name === that.state.selectedValue)[0]
          description = setting.description
          headingType = "Work place";
          name = that.state.selectedValue
          break;
        case selectedTypes.SkillType:
          var skillType = Object.values(that.props.skillsObj.skillTypes)
            .filter(s => s.name === that.state.selectedValue)[0]
          description = skillType.description
          headingType = "Skill type";
          name = that.state.selectedValue
          break;
      }
      var pStyle = {
        marginTop: 5,
        marginBottom: 5
      }
      return <div>
        <p style={pStyle} ><span><b>{headingType}</b></span>{": " + name}</p>
        <p style={pStyle} >{description}</p>
      </div>
    }
    var getSelectedText = function () {
      var isInstructions = (that.state.selectedValue === "");
      var text = isInstructions ? (<div>
        <i>
          <b>
            <p>Click on a workplace, skill type or skill to start.</p>
          </b>
        </i>
      </div>) : (<div>
        {getSelectedInfo()}
      </div>)

      return (
        <div style={{
          padding: 10,
          marginLeft: 20
        }}>
          {text}
        </div>
      )
    }

    return (
      <div>
        <Experience work={this.props.work} cvWidth={this.props.cvWidth} />
        <SkillTypes getSelectedText={getSelectedText} work={this.props.work} skills={this.props.skills} skillsObj={this.props.skillsObj} clickSelect={this.clickSelect} isSelected={this.isSelected} cvWidth={this.props.cvWidth} />
      </div>
    );
  }
}

class SkillTypes extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
    this.isSelected = this.props.isSelected.bind(this);
    this.getSelectedText = this.props.getSelectedText.bind(this);
  }

  render() {
    var allSkills = Object.keys(this.props.skillsObj.skills)
    var isMob = isMobile(this.props.cvWidth)
    var initialLeftStyle = isMob ? { borderLeft: "3px solid black" } : {}
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

    var titlePadding = {
      margin: 10
    }

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

          <div>
            {this.getSelectedText()}
          </div>
          {/* <h4 style={titlePadding} >Work place:</h4> */}
          <div style={skillsPadding}>
            {this.props.work.map(x => <Setting key={x.name} work={x} skillsObj={this.props.skillsObj}
              clickSelect={this.props.clickSelect}
              isSelected={this.props.isSelected} />)}
          </div>

          {/* <h4 style={titlePadding} >Skill types:</h4> */}
          <div style={skillsPadding}>
            {this.props.skills.map(x => <SkillType key={x.name} skill={x} skillsObj={this.props.skillsObj}
              clickSelect={this.props.clickSelect}
              isSelected={this.props.isSelected} />)}
          </div>

          {/* <h4 style={titlePadding} >Skills:</h4> */}
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
          clickSelect={this.clickSelect}
        />
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

class Setting extends React.Component {
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
    var company = this.props.work.company;
    var selected = this.isSelected(selectedTypes.Setting, company)
    var basicStyle = {
      display: "inline-block",
      padding: 3
    }
    var settingClass = getSettingClass(selected)
    if (this.state.hover) {
      settingClass = getSettingClass(selectedValues.HighlightedAndSelected)
    }
    var slug = company.replace(" ", "")
    var png = "/logos/settings/" + slug + ".png"
    var imgStyle = {
      width: 160
    }

    return (
      <div className={settingClass}
        onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}
        style={basicStyle} >
        <img src={png}
          style={imgStyle}
          onClick={() => this.clickSelect(selectedTypes.Setting, company)} />
        <SkillLogos
          skillIds={this.props.work.skills} show={this.state.hover}
          clickSelect={this.clickSelect} />
      </div>
    );
  }
}


class SkillLogos extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
  }

  render() {
    var len = 40
    var toLogo = function (skillId, clickSelect) {
      return (<div style={{
        padding: 2
      }}>
        <img
          //height={len} 
          width={len}
          src={"/logos/skills/" + skillId + ".png"} alt={skillId}
          onClick={() => clickSelect(selectedTypes.Skill, skillId)}
        />
      </div>
      )
    }

    const tooltipStyle = {
      display: this.props.show ? 'flex' : 'none',
      flexWrap: "wrap",
      position: "absolute",
      padding: 10,
      backgroundColor: "white",
      border: "1px solid black",
      borderRadius: 10,
      maxWidth: 500,
      opacity: 1.0
    }
    return (
      <div style={tooltipStyle}>
        {this.props.skillIds.map(s => toLogo(s, this.clickSelect))}
      </div>
    );
  }
}

