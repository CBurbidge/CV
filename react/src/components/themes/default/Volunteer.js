import React from 'react';

export default function (props) {
  var toVolunteer = function (vol, i) {
    let key = vol.organization + i
    return (<p key={key}>{vol.organization}</p>);
  };

  return (
    <div>
      {props.volunteer.map((x, i) => toVolunteer(x, i))}
    </div>
  );
}

