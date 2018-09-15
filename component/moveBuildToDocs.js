console.log("Moving build to docs");

var mv = require('mv');
 
mv(__dirname + '/build', __dirname + '/../docs', function(err) {
  console.log(err);
});
