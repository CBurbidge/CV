import React from 'react';
import { iconSize, rightSideDivStyle, leftSideDivStyle, mixWithBorderAndPadding } from './commonStyle'
import Icons from './icons'

export default function (props) {
  return (
    <Summary basics={props.basics} />
  );
}

var Summary = function (props) {

  return (
    <div >
      <div style={Object.assign(leftSideDivStyle, {
        maxHeight: 20
      })}>
        <Icons.ExperienceIcon size={iconSize} />
        {/* <h4>Profile</h4> */}
      </div>
      <div style={Object.assign(rightSideDivStyle, {
        
      })}>
        <p style={mixWithBorderAndPadding({
          marginBottom: 0,
          textAlign: "justify",
        })} >{props.basics.summary}</p>
      </div>
    </div>
  )
}
