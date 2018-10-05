import React from 'react';
import { isMobile } from '../../styles/common'
import { selectedTypes } from './selected'
import "./transitions.css"

export default class SkillLogos extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
  }

  render() {
    var len = 40;
    var that = this;
    var toLogo = function (skillId, clickSelect) {
      // var addDefaultSrc = function(src){
      //   return ev => {
      //     ev.target.onerror = null;
      //     ev.target.src = src;
      //     return true;
      //   }
      // }
      var png = that.props.logoPrefix + "/logos/skills/" + skillId + ".png";
      return (<div key={skillId} style={{
        padding: 2
      }}>
        <img
          height={len}
          width={len}
          src={png}
          //onError={addDefaultSrc("/CV" + png)}
          alt={skillId}
          onClick={() => clickSelect(selectedTypes.Skill, skillId)}
        />
      </div>
      )
    }
    var dontShowComponent = isMobile(this.props.cvWidth)

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

    return dontShowComponent ? (<div />) :
      (
        <div style={tooltipStyle}>
          {this.props.skillIds.map(s => toLogo(s, this.clickSelect))}
        </div>
      );
  }
}

