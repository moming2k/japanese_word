const fs = require('fs');
var csvjson = require('csvjson');
const { promisify } = require('util');
const stat = promisify(fs.stat);
const stream = require('stream');

const convert_index_to_json = async (fromFile, toFile) => {
    
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

            const transformJsonToCSV = new stream.Transform({
                transform: function transformer(chunk, encoding, callback) {
                    // line++;
                    chunk.forEach(function(part, index) {
                        this[index][0] = this[index][0].replace(/%%%[A-Z] /i, "").replace(/.txt/,'.json');
                    }, chunk); // use arr as this
                    callback(false, chunk);
                },
                readableObjectMode: true,
                writableObjectMode: true,
            });

            var read = fs.createReadStream(fromFile);
            var write = fs.createWriteStream(toFile);
            var toArray = csvjson.stream.toArray(options);
            var transform = csvjson.stream.transform();
            var stringify = csvjson.stream.stringify();
            await read.pipe(toArray).pipe(transformJsonToCSV).pipe(stringify).pipe(write);
        }

    } catch (error) {
        console.error("Error stating file.", error);
        return;
    }
};

module.exports = () => ({
    convert_index_to_json,
});