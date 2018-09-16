import React from 'react';
import { iconSize, isMobile, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorderAndPadding } from './styles/common'
import Icons from './icons'

export default function (props) {
  return (
    <Summary basics={props.basics} cvWidth={props.cvWidth} cvType={props.cvType} />
  );
}

var Summary = function (props) {
  var isMob = isMobile(props.cvWidth)
  var leftSide = isMob ? <h4>Profile</h4> : <Icons.ExperienceIcon size={iconSize} />
  var initialLeftStyle = isMob ? { borderLeft: "3px solid black" } : {}
  var summary = props.basics.summary;
  var summaryOverride = props.basics["summary-"+props.cvType];
  if(summaryOverride){
    summary = summaryOverride;
  }

  return (
    <div  >
      <div style={
        Object.assign(getLeftSideDivStyle(props.cvWidth), initialLeftStyle)}>
        {leftSide}
      </div>
      <div style={Object.assign(getRightSideDivStyle(props.cvWidth), mixWithBorderAndPadding({}))}>
        <p style={{
          margin: 10,
          textAlign: "justify",
        }} >{summary}</p>
      </div>
    </div>
  )
}
