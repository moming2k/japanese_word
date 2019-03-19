const fs = require('fs');
const path = require('path');
var csvjson = require('csvjson');

console.log("start");

fs.readdir("japanmemo", function (err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }
  
    const toFolder = "target/japanmemo/"
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

                    to_file = file.substr(0, file.lastIndexOf(".")) + ".json";
                    let toPath = path.join(toFolder, to_file);

                    var options = {
                        delimiter   : "=",
                        wrap        : false,
                        headers     : "none"
                    };

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