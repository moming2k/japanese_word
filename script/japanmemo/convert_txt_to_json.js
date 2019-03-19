const fs = require('fs');
const path = require('path');
var csvjson = require('csvjson');

const convert_txt_to_json = async (fromFile, toFile) => {
    console.log("fromPath = " + fromPath)
    try {
        let state = await fs.stat(fromPath) 

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
            // read.pipe(toObject).pipe(stringify).pipe(write);
        }

    } catch (error) {
        console.error("Error stating file.", error);
        return;
    }
};

module.exports = () => ({
    convert_txt_to_json,
});