import { selected, selectedTypes as types, isSelectedFunc } from './selected';
var setting1 = {
  id: "setting1"
}
var skillType1 = {
  id: "skillType1"
}
var skill1 = {
  id: "skill1",
  name: "Skill 1",
  description: "sdkghbjsdgh",
  skillTypesIds: [skillType1.id],
  settingsIds: []
}
var skill2 = {
  id: "skill2",
  name: "Skill 2",
  description: "sdsdvgvwsdgkghbjsdgh",
  skillTypesIds: [],
  settingsIds: [setting1.id]
}
var skillsObj = {
  settings: {
    setting1
  },
  skills: {
    skill1,
    skill2
  },
  skillTypes: {
    skillType1
  }
}

it('handles skill1 selected correctly', () => {
  
  var forSkill1 = isSelectedFunc(types.Skill, skill1.id, types.Skill, skill1.id, skillsObj)
  expect(forSkill1).toBe(selected.HighlightedAndSelected)
  
  var forSkill2 = isSelectedFunc(types.Skill, skill1.id, types.Skill, skill2.id, skillsObj)
  expect(forSkill2).toBe(selected.Hidden);

  var forSkillType1 = isSelectedFunc(types.Skill, skill1.id, types.SkillType, skillType1.id, skillsObj)
  expect(forSkillType1).toBe(selected.Highlighted);

  var forSetting1 = isSelectedFunc(types.Skill, skill1.id, types.Setting, setting1.id, skillsObj)
  expect(forSetting1).toBe(selected.Visible);

});
