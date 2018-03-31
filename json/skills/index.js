var settings = require('./settings');
var skillTypes = require('./skillTypes');
var skills = require('./skills')

var skillTypesList = Object.values(skillTypes).filter(x => { return "id" in x })
var skillsList = Object.values(skills).filter(x => { return "id" in x })
var settingsList = Object.values(settings).filter(x => { return "id" in x })

var jsonResumeSkills = skillTypesList.map(x => {
	var releventSkillIds = skillsList
		.filter(s => s.skillTypesIds.includes(x.id))
		.map(s => s.id);
	return {
		name: x.name,
		level: x.level,
		keywords: releventSkillIds
	}
});

var jsonResumeSettings = settingsList.map(x => {
	var releventSettingsIds = skillsList
		.filter(s => s.settingsIds.includes(x.id))
		.map(s => s.id);
	return {
		institution: x.name,
		keywords: releventSettingsIds
	}
});

module.exports = {
	jsonResumeSkills,
	jsonResumeSettings,
	skills,
	skillTypes,
	settings
}