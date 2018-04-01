module.exports.leftSideDivStyle = {
  width: "10%",
  minWidth: 75,
  display: "inline-block",
  textAlign: "center",
}

module.exports.rightSideDivStyle = {
  width: "85%",
  display: "inline-block"
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
