const fs = require('fs');
const path = require('path');
var csvjson = require('csvjson');

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
                    let toPath = fromPath + ".json";

                    var options = {
                        delimiter   : "=",
                        wrap        : false,
                        headers     : "none"
                    };

                    // TODO: extract csv to json
                    var read = fs.createReadStream(fromPath);
                    var write = fs.createWriteStream(toPath);
                    var toObject = csvjson.stream.toArray(options);
                    var stringify = csvjson.stream.stringify();
                    read.pipe(toObject).pipe(stringify).pipe(write);
                }
            });
        }
    });
});