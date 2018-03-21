import React from 'react';

export default function (props) {
  var toEducation = function (edu, i) {
    let key = edu.institution + i
    return (<p key={key}>{edu.institution}</p>);
  };

  return (
    <div>
      {props.education.map((x, i) => toEducation(x, i))}
    </div>
  );
}

