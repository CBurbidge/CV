var companiesToRemove = [
    "University of Exeter", 
    "Scats Country Store", 
    "Burbidge's Bakery",
    "Technical Understanding"
]

var educationInstitutionsToRemove = [
    "Harroway Community School"
]

var removeWorkPlaces = function (jsonResume, companyNamesToRemove) {
    var workPlacesToKeep = jsonResume.work.filter(x => {
        return companyNamesToRemove.includes(x.company) === false;
    })
    var minusCommentedHighlights = workPlacesToKeep.map(x => {
        if(x.highlights){
            var filteredHighlights = x.highlights.filter(y => y.startsWith("//") === false)
            x.highlights = filteredHighlights;
        }
        
        return x;
    })
    return Object.assign({}, jsonResume, { work: minusCommentedHighlights })
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