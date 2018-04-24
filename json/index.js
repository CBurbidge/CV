console.log("starting json generation")

var combineSkillsAndJson = require('./combineSkillsAndJson')
var fs = require('fs')
var reduceCv = require('./jsonResume/reduceCv')
var fullJsonResume = require('./jsonResume/full')

var writeToFile = function (fileName, data) {
    var toWrite = JSON.stringify(data, null, 2);
    fs.writeFile(fileName, toWrite, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved! - " + fileName);
    });
}

var skillz = require('./skills')

var reducedJson = reduceCv(fullJsonResume);
writeToFile("./jsonResume/reduced.json", reducedJson);

var combined = combineSkillsAndJson(skillz, reducedJson);
writeToFile("./jsonResume/combined.json", combined);

writeToFile("../react/src/components/CV/resume.json", combined);
writeToFile("../react/src/components/CV/skills.json", skillz);
