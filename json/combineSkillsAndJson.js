module.exports = function (skills, jsonResume) {
    jsonResume.work.forEach(w => {
        var companySkills = skills.jsonResumeSettings.filter(x => x.company === w.company)
        if (companySkills.length === 1) {
            w.skills = companySkills[0].keywords;
        }
    });
    
    jsonResume.skills = skills.jsonResumeSkills

    return jsonResume;
}