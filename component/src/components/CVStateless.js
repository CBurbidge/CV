import React, { Component } from 'react';
import Default from './themes/default'

export default function (props) {
  return (
    <div style={{ margin: 15 }}>
        <Default 
          jsonResume={props.jsonResume} 
          skills={props.skills} 
          print={props.print} 
          cvWidth={props.cvWidth}
          cvType={props.cvType} 
        />
      </div>
  );
}
