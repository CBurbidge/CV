var args = process.argv.slice(2);

console.log("writing homepage to package.json");

console.log("args.length - " + args.length);

console.log("args - " + args);

var homepage = args.length === 0 ? "" : args[0];

console.log("homepage - " + homepage);

var fse = require('fs-extra');

var pJson = __dirname + "/package.json";

console.log("try read json from - " + pJson);

var contents = fse.readJsonSync(pJson);

contents.homepage = homepage;

console.log("try write json");

fse.writeJson(pJson, contents, {spaces: 2});

console.log("done")
