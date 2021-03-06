const fs = require('fs');
var csvjson = require('csvjson');
const { promisify } = require('util');
const stat = promisify(fs.stat);

const convert_txt_to_json = async (fromFile, toFile) => {
    
    try {
        let state = await stat(fromFile); 
        
        if (state && state.isFile()) {
            console.log("fromPath = " + fromFile);
            console.log("toFile = " + toFile);

            var options = {
                delimiter   : "=",
                wrap        : false,
                headers     : "none"
            };

            var read = fs.createReadStream(fromFile);
            var write = fs.createWriteStream(toFile);
            var toObject = csvjson.stream.toArray(options);
            var stringify = csvjson.stream.stringify();
            await read.pipe(toObject).pipe(stringify).pipe(write);
        }

    } catch (error) {
        console.error("Error stating file.", error);
        return;
    }
};

module.exports = () => ({
    convert_txt_to_json,
});