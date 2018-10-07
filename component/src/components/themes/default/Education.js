import React from 'react';
import { iconSize } from './styles/common'
import Icons from './icons'
import df from '../shared/dateFormat'
import LeftRight from './LeftRight'

export default function (props) {
  var toEducation = function (edu, i, childStyle) {
    let key = edu.institution + i
    var fStart = df.formatDate(edu.startDate);
    var fEnd = df.formatDate(edu.endDate);

    var eduBottomStyle = {
      maxWidth: "50%",
      padding: 10,
    }
    var containerStyle = Object.assign({}, childStyle, {
      padding: 10,
      margin: 10
    })
    return (<div key={key}>
      <div style={containerStyle} >
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

  var getEducation = function (childStyle) {
    return (<div>
      {props.education.map((x, i) => toEducation(x, i, childStyle))}
    </div>)
  }
  var leftFunc = function (isMob) {
    return isMob ? <h4>Education</h4> : <Icons.Education size={iconSize} />
  }
  return (<LeftRight isLeft={false} leftSide={leftFunc} childFactory={getEducation} cvWidth={props.cvWidth} />)

}

