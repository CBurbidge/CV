import React from 'react';
import { iconSize, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorder2AndPadding, isMobile } from './styles/common'
import Icons from './icons'

export default function (props) {
  var toEducation = function (edu, i) {
    let key = edu.institution + i
    var formatDate = function (date) {
      var year = date.match(/20\d\d/)
      return year;
    }
    var fStart = formatDate(edu.startDate);
    var fEnd = formatDate(edu.endDate);

    var eduBottomStyle = { 
      maxWidth: "50%",
      padding: 10, 
    }

    return (<div key={key}>
      <div style={{
        padding: 10,
        borderLeft: "3px solid black",
        margin: 10
      }}
      >
        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <div>
            <span><b>{edu.institution}</b></span>
          </div>
          <div>
            <span>{fStart}</span> - <span>{fEnd}</span>
          </div>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}>
          <span style={eduBottomStyle}>{edu.studyType}</span>
          <span style={eduBottomStyle}><b>{edu.gpa}</b></span>
        </div>
      </div>
    </div>);
  };
  var isMob = isMobile(props.cvWidth)
  var initialLeftStyle = isMob ? {borderRight: "3px solid black"} : {}
  var leftSide = isMob ? <h4>Education</h4> : <Icons.Education size={iconSize} />

  return (
    <div>
      <div style={
        Object.assign(getLeftSideDivStyle(props.cvWidth), initialLeftStyle)}>
        {leftSide}
      </div>
      <div style={Object.assign(mixWithBorder2AndPadding(getRightSideDivStyle(props.cvWidth)))}>
        {props.education.map((x, i) => toEducation(x, i))}
      </div>
    </div>
  );
}

