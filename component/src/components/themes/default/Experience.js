import React from 'react';
import { isMobile, getRightSideDivStyle, getLeftSideDivStyle, mixWithBorderAndPadding, iconSize } from './styles/common'
import Icons from './icons'
import df from '../shared/dateFormat'
import LeftRight from './LeftRight'

export default class Experience extends React.Component {

  render() {
    var that = this;

    var leftSide = function (isMob){ 
      return isMob ? <h4>Experience</h4> : <Icons.BriefCase size={iconSize} />
    }
    
    var childFactory = function(childStyle){
      return (<div>{
        that.props.work.map(x => <WorkPlace key={x.company} work={x} childStyle={childStyle} />)}
      </div>)
    }

    return (<LeftRight isLeft={true} leftSide={leftSide} childFactory={childFactory} cvWidth={this.props.cvWidth} />)

  }
}

class WorkPlace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var containerStyle = Object.assign({}, this.props.childStyle, {
      padding: 10,
      margin: 10
    })
    return (
      <div >
        <div 
          style={containerStyle}
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