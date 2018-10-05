import React from 'react';
import { selected as selectedValues, selectedTypes, getSettingClass } from './selected'
import "./transitions.css"
import SkillLogos from "./SkillLogos"

export default class Setting extends React.Component {
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
    var png = this.props.logoPrefix + "/logos/settings/" + slug + ".png"
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
          clickSelect={this.clickSelect} cvWidth={this.props.cvWidth}
          logoPrefix={this.props.logoPrefix}
        />
      </div>
    );
  }
}


