import React from 'react';
import { isSelectedFunc, selectedTypes } from './interactive/selected'
import Experience from "../Experience"
import "./interactive/transitions.css"
import SkillTypes from "./interactive/SkillTypes"

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
        <SkillTypes getSelectedText={getSelectedText} work={this.props.work} skills={this.props.skills} skillsObj={this.props.skillsObj} clickSelect={this.clickSelect} isSelected={this.isSelected} cvWidth={this.props.cvWidth} logoPrefix={this.props.logoPrefix} />
        <Experience work={this.props.work} cvWidth={this.props.cvWidth} />
      </div>
    );
  }
}

