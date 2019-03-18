var fs = require('fs');
var path = require('path');

console.log("start");

fs.readdir("japanmemo", function (err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }
  
    files.forEach(function (file, index) {
        const fromPath = path.join("japanmemo", file);
        if (file.endsWith(".txt")) {
            fs.stat(fromPath, function (error, stat) {
                if (error) {
                  console.error("Error stating file.", error);
                  return;
                }
            
                if (stat.isFile()) {
                    console.log("fromPath = " + fromPath);

                    // TODO: extract csv to json
                }
            });
        }
    });
});