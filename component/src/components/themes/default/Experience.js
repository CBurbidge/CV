import React from 'react';
import { isMobile, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorderAndPadding, iconSize } from './styles/common'
import Icons from './icons'
import df from '../shared/dateFormat'

export default class Experience extends React.Component {

  render() {
    var rightStyle = getRightSideDivStyle(this.props.cvWidth)
    var isMob = isMobile(this.props.cvWidth)
    var initialLeftStyle = isMob ? { borderLeft: "3px solid black" } : {}
    var leftSide = isMob ? <h4>Experience</h4> : <Icons.BriefCase size={iconSize} />

    return (
      <div>
        <div style={
          Object.assign(initialLeftStyle, getLeftSideDivStyle(this.props.cvWidth))
        }>
          {leftSide}
        </div>

        <div style={mixWithBorderAndPadding(rightStyle)} >{
          this.props.work.map(x => <WorkPlace key={x.company} work={x} />)}

        </div>
      </div>
    );
  }
}

class WorkPlace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <div 
          style={{
            padding: 10,
            borderRight: "3px solid black",
            margin: 10
          }}
        >
          <WorkPlaceTitle work={this.props.work} />
          {this.props.work.summary !== "" && <WorkPlaceDescription work={this.props.work} />}
          {this.props.work.highlights && this.props.work.highlights.length > 0 && <WorkPlaceHighlights work={this.props.work} />}

        </div>
      </div>
    );
  }
}

class WorkPlaceTitle extends React.Component {
  render() {
    var startDateFormatted = df.formatDate(this.props.work.startDate);
    var endDateFormatted = this.props.work.endDate
      ? df.formatDate(this.props.work.endDate)
      : "Present";
    var diff = df.formatDiff(this.props.work.startDate, this.props.work.endDate);
    return (
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <div >
          <span><b>{this.props.work.company}</b></span> - <span><i>{this.props.work.position}</i></span>
        </div>
        <div >
          <span>{startDateFormatted}</span> - <span>{endDateFormatted}</span>
          <span><i>  ({diff})</i></span>
        </div>
      </div>
    )
  }
}

class WorkPlaceDescription extends React.Component {
  
  render() {
    return (
      <div>
        {<div style={{
          padding: 10,
          textAlign: "justify"
          // width: "45%",
          // display: "inline-block"
        }}>
          {this.props.work.summary}
        </div>}

      </div>
    )
  }
}

class WorkPlaceHighlights extends React.Component {
  
  render() {
    var toHighlight = function (h, i) {
      return <li key={i} ><div style={{
        padding: 3
      }} >{h}</div></li>
    }
    return (
      <div>
        {<div style={{
          padding: 10,
          textAlign: "justify"
          // width: "45%",
          // display: "inline-block"
        }}>
          {/* <p>Highlights:</p> */}
          <ul type="square" style={{
            marginTop: 0,
            marginBottom: 0
          }} >
            {this.props.work.highlights.map((x, i) => toHighlight(x, i))}
          </ul>
        </div>}

      </div>
    )
  }
}