var fs = require('fs');
var path = require('path');

console.log("start");

// Loop through all the files in the temp directory
fs.readdir("japanmemo", function (err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }
  
    files.forEach(function (file, index) {
        // Make one pass and make the file complete
        var fromPath = path.join("japanmemo", file);
        console.log("fromPath = " + fromPath);
    });
});