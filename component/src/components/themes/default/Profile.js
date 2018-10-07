import React from 'react';
import { iconSize, isMobile, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorderAndPadding } from './styles/common'
import Icons from './icons'
import LeftRight from './LeftRight'

export default function (props) {
  return (
    <Summary basics={props.basics} cvWidth={props.cvWidth} cvType={props.cvType} />
  );
}

var Summary = function (props) {
  var leftSide = isMob => isMob ? <h4>Profile</h4> : <Icons.ExperienceIcon size={iconSize} />
  var summary = props.basics.summary;
  var summaryOverride = props.basics["summary-" + props.cvType];
  if (summaryOverride) {
    summary = summaryOverride;
  }

  var childFactory = childStyle => {
    return (
      <div>
        <p style={{
          margin: 10,
          textAlign: "justify",
        }} >{summary}</p>
      </div>
    )
  }

  return (<LeftRight isLeft={true} leftSide={leftSide} childFactory={childFactory} cvWidth={props.cvWidth} />)
}
