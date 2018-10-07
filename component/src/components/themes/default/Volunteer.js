import React from 'react';
import { iconSize, isMobile, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorderAndPadding } from './styles/common'
import Icons from './icons'
import LeftRight from './LeftRight'
import df from '../shared/dateFormat'

export default function (props) {
  var toVolunteer = function (vol, i, childStyle) {
    let key = vol.organization + i
    
    return (<div key={key}>
      <div style={Object.assign({}, childStyle, {
        padding: 10,
        margin: 10
      })}
      >
        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <div>
            <span><b>{vol.organization}</b></span>
          </div>
          <div>
            <span>{df.formatDate(vol.startDate)}</span> - <span>{df.formatDate(vol.endDate)}</span>
          </div>
        </div>
        <p>{vol.summary}</p>

      </div>
    </div>);
  };

  var leftSide = isMob => isMob ? <h4>Volunteering</h4> : <Icons.TeamWork size={iconSize} />

  var childFactory = childStyle => {
    return (
      <div>
        {props.volunteer.map((x, i) => toVolunteer(x, i, childStyle))}
      </div>
    );
  }

  return (<LeftRight isLeft={true} leftSide={leftSide} childFactory={childFactory} cvWidth={props.cvWidth} />)
}

