import React from 'react';
import { rightSideDivStyle, leftSideDivStyle, mixWithBorderAndPadding } from './commonStyle'

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
        <h4>Profile</h4>
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
