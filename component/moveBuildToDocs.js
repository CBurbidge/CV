console.log("Moving build to docs");
var mv = require('mv');
var rimraf = require('rimraf');

rimraf (__dirname + '/../docs', function () { 
  console.log('done'); 
  mv(__dirname + '/build', __dirname + '/../docs', function(err) {
    console.log(err);
  });
});


