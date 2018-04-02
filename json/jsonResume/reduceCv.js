var companiesToRemove = [
    "University of Exeter", 
    "Scats Country Store", 
    "Burbidge's Bakery"
]

var educationInstitutionsToRemove = [
    "Harroway Community School"
]

var removeWorkPlaces = function (jsonResume, companyNamesToRemove) {
    var workPlacesToKeep = jsonResume.work.filter(x => {
        return companyNamesToRemove.includes(x.company) === false;
    })
    return Object.assign({}, jsonResume, { work: workPlacesToKeep })
};

var removeEducation = function (jsonResume, institutionNamesToRemove) {
    var institutionsToKeep = jsonResume.education.filter(x => {
        return institutionNamesToRemove.includes(x.institution) === false;
    })
    return Object.assign({}, jsonResume, { education: institutionsToKeep })
};

var reduceCv = x => {
    var removeArrayValues = removeWorkPlaces(
        removeEducation(
            x,
            educationInstitutionsToRemove),
        companiesToRemove);

    return removeArrayValues
}

module.exports = reduceCv