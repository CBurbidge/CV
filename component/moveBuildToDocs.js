console.log("Moving build to docs");
var fse = require('fs-extra');
var rimraf = require('rimraf');

var build = __dirname + '/build';
var docs = __dirname + '/../docs';
var logosSource = docs + "/logos";
var logosDestination = docs + "/CV/logos";

if(fse.pathExistsSync(docs)){
  fse.removeSync (docs);
}

fse.moveSync(build, docs);

fse.copySync(logosSource, logosDestination);


