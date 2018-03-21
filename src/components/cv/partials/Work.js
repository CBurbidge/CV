import React from 'react';

export default function (props) {
  var toWork = function (work) {
    return (<p key={work.company}>{work.company}</p>);
  };

  return (
    <div>
      {props.work.map(x => toWork(x))}
    </div>
  );
}

