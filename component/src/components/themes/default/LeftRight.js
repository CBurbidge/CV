import React from 'react';
import { getRightSideDivStyle, getLeftSideDivStyle, mixWithBorderAndPadding, mixWithBorder2AndPadding, isMobile } from './styles/common'

export default function (props) {
  var isMob = isMobile(props.cvWidth)
  var initialLeftStyle = isMob ? {borderLeft: "3px solid black"} : {}
  var initialRightStyle = isMob ? {borderRight: "3px solid black"} : {}
  var initialStyle = props.isLeft ? initialLeftStyle : initialRightStyle;

  var childFuncLeftStyle = {borderRight: "3px solid black"}
  var childFuncRightStyle = {borderLeft: "3px solid black"}
  var childFuncStyle = props.isLeft ? childFuncLeftStyle : childFuncRightStyle;

  var borderStyleDecorator = props.isLeft ? mixWithBorderAndPadding : mixWithBorder2AndPadding;

  return (
    <div>
      <div style={
        Object.assign(getLeftSideDivStyle(props.cvWidth), initialStyle)}>
        {props.leftSide(isMob)}
      </div>
      <div style={borderStyleDecorator(getRightSideDivStyle(props.cvWidth))}>
        {props.childFactory(childFuncStyle)}
      </div>
    </div>
  );
}

