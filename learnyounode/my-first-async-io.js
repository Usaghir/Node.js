var fs = require('fs');
var contents = fs.readFile(process.argv[2], (err, contents) => {
  console.log(contents.toString().split('\n').length - 1);
});
