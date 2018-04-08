module.exports.iconSize = 40;

module.exports.leftSideDivStyle = {
  width: "10%",
  minWidth: 120,
  display: "inline-block",
  textAlign: "center",
}

module.exports.rightSideDivStyle = {
  width: "83%",
  display: "inline-block",
  marginRight: 5
}

var mixWithBorder = style => {
  return Object.assign({
    borderLeft: "3px solid black",
    borderBottom: "1px solid black",
  }, style)
}
module.exports.mixWithBorder = mixWithBorder;

module.exports.mixWithBorderAndPadding = style => {
  var borderAndPadding = mixWithBorder({ padding: "2px 8px 8px 8px" })
  return Object.assign(borderAndPadding, style);
}

var mixWithBorder2 = style => {
  return Object.assign({
    borderRight: "3px solid black",
    borderBottom: "1px solid black",
  }, style)
}
module.exports.mixWithBorder2 = mixWithBorder2;

module.exports.mixWithBorder2AndPadding = style => {
  var borderAndPadding = mixWithBorder2({ padding: "2px 8px 8px 8px" })
  return Object.assign(borderAndPadding, style);
}


var mixWithBorder3 = style => {
  return Object.assign({
    borderRight: "3px solid black",
    borderTop: "1px solid black",
  }, style)
}
module.exports.mixWithBorder3 = mixWithBorder3;

module.exports.mixWithBorder3AndPadding = style => {
  var borderAndPadding = mixWithBorder3({ padding: "2px 8px 8px 8px" })
  return Object.assign(borderAndPadding, style);
}

