var selected = {
  HighlightedAndSelected: "HighlightedAndSelected",
  Highlighted: "Highlighted",
  Visible: "Visible",
  Hidden: "Hidden"
}

module.exports.selected = selected;

var types = {
  Skill: "Skill",
  SkillType: "SkillType",
  Work: "Work"
}

module.exports.selectedTypes = types;

module.exports.isSelectedFunc = function (stateType, stateValue, currentType, currentValue, skillsObj) {

  var selectedIsBlank = function () {
    return selected.Visible
  }
  var selectedIsSkill = function () {
    if (currentType === types.Skill) {
      return currentValue === stateValue
        ? selected.HighlightedAndSelected
        : selected.Hidden
    }
    var skill = skillsObj.skills[stateValue];
    if (currentType === types.SkillType) {
      return skill.skillTypesIds.includes(currentValue)
        ? selected.Highlighted
        : selected.Hidden
    }
    if (currentType === types.Setting) {
      return skill.settingsIds.includes(currentValue)
        ? selected.Highlighted
        : selected.Visible
    }
    return selected.Hidden;
  }
  var selectedIsWork = function () {
    var workObj = skillsObj.settings[stateValue];
    if (!workObj) return false;
    if (currentType === types.Skill) return workObj.skills.includes(currentValue);
    return false;
  }
  var selectedIsSkillType = function () {
    var skillTypeObj = skillsObj.skillTypes[stateValue];
    if (!skillTypeObj) return false;
    if (currentType === types.Skill) return skillTypeObj.keywords.includes(currentValue);
    return false;
  }
  if (stateType === "" && stateValue === "") return selectedIsBlank();
  if (stateType === types.Skill) return selectedIsSkill();
  if (stateType === types.SkillType) return selectedIsSkillType();
  if (stateType === types.Work) return selectedIsWork();

  return selected.Hidden
}
