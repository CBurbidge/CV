import React from 'react';
import { rightSideDivStyle, leftSideDivStyle, mixWithBorder, mixWithBorderAndPadding } from './commonStyle'

export default function (props) {
  return (
    <section className="about">
      {props.print && <Name basics={props.basics} />}
      <Summary basics={props.basics} />
      <hr />
    </section>
  );
}

var Summary = function (props) {

  return (
    <div>
      <div style={leftSideDivStyle}>
        <h4>Profile</h4>
      </div>
      <div style={rightSideDivStyle}>
        <p style={mixWithBorderAndPadding({
          textAlign: "justify",
        })} >{props.basics.summary}</p>
      </div>
    </div>
  )
}

var Name = function (props) {

  return (
    <header style={{ borderBottom: "1px solid black" }}>
      <div style={{
        width: "45%",
        minWidth: 150,
        margin: 5,
        height: "100%",
        display: "inline-block",
        verticalAlign: "bottom"
      }}>
        <h1 style={{ textAlign: "left" }} >{props.basics.name}</h1>
      </div>

      <div style={{
        width: "49%",
        display: "inline-block",
        margin: 5,
        verticalAlign: "bottom"
      }}>
        <Profiles profiles={props.basics.profiles} />
      </div>
    </header>
  )
}


var Profiles = function (props) {
  var sTable = {
    textAlign: "right",
    width: "100%"
  }

  var profile = function (prof) {
    var sTd = mixWithBorder({
      padding: 5
    })
    return (
      <tr key={prof.network} >
        <td style={sTd}>{prof.network}</td><td style={sTd}>{prof.username}</td>
      </tr>
    )
  }

  var profilesForPrintedCv = props.profiles.filter(x => x.network !== "Twitter");

  return (
    <table style={sTable}>
      <tbody>
        {profilesForPrintedCv.map(x => profile(x))}
      </tbody>
    </table>

  )
}

