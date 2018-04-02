import React from 'react';
import { rightSideDivStyle, leftSideDivStyle, mixWithBorderAndPadding, mixWithBorder2AndPadding } from './commonStyle'

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
    this.isSelected = this.props.isSelected.bind(this);
  }

  render() {
    return (
      <div>
        <div style={leftSideDivStyle}>
          <h4>Experience</h4>
        </div>
        <div style={rightSideDivStyle}>
          <div style={mixWithBorder2AndPadding({})} >{
            this.props.work.map(x => <WorkPlace key={x.company} work={x}
              clickSelect={this.props.clickSelect}
              isSelected={this.isSelected} />)}
          </div>
        </div>
      </div>
    );
  }
}

class WorkPlace extends React.Component {
  constructor(props) {
    super(props);
    this.clickSelect = this.props.clickSelect.bind(this);
    this.selected = this.props.isSelected("Work", this.props.work.company)
  }

  render() {


    return (
      <div>
        <div onClick={() => this.props.clickSelect("Work", this.props.work.company)}
          style={{
            padding: 10,
            
          }}
        >
          <WorkPlaceTitle work={this.props.work} />
          {this.props.work.summary != "" && <WorkPlaceDescription work={this.props.work} />}
          {this.props.work.highlights && this.props.work.highlights.length > 0 && <WorkPlaceHighlights work={this.props.work} />}

        </div>
      </div>
    );
  }
}

class WorkPlaceTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    function monthDiff(d1, d2) {
      var months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth();
      months += d2.getMonth();
      return months <= 0 ? 0 : months;
    }

    var formatDate = function (date) {
      var year = date.match(/20\d\d/)
      return year;
    }
    var startDateFormatted = formatDate(this.props.work.startDate);
    var endDateFormatted = this.props.work.endDate
      ? formatDate(this.props.work.endDate)
      : "Present";

    var diffInMonths = monthDiff(
      new Date(this.props.work.startDate),
      (this.props.work.endDate ? new Date(this.props.work.endDate) : new Date())
    )

    var diffInYears = 0;
    if (diffInMonths > 11) {
      diffInYears = Math.floor(diffInMonths / 12.0)
      diffInMonths -= diffInYears * 12
    }

    var formatDiff = function () {
      var years = diffInYears > 0 ? diffInYears + "y" : ""
      var months = diffInMonths > 0 ? diffInMonths + "m" : ""
      if (years !== "" && months !== "") {
        return years + ", " + months
      } else {
        return years + months
      }
    }

    var diff = formatDiff();
    return (
      <div>
        <div style={{
          minWidth: 400,
          width: "45%",
          display: "inline-block"
        }}>
          <span><b>{this.props.work.company}</b></span> - <span><i>{this.props.work.position}</i></span>
        </div>
        <div style={{
          minWidth: 300,
          width: "45%",
          display: "inline-block",
          textAlign: "right"
        }}>
          <span>{startDateFormatted}</span> - <span>{endDateFormatted}</span>
          <span><i>  ({diff})</i></span>
        </div>
      </div>
    )
  }
}

class WorkPlaceDescription extends React.Component {
  constructor(props) {
    super(props);
  }

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
  constructor(props) {
    super(props);
  }

  render() {
    var toHighlight = function (h) {
      return <li style={{}} >{h}</li>
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
          <ul>
            {this.props.work.highlights.map(x => toHighlight(x))}
          </ul>
        </div>}

      </div>
    )
  }
}