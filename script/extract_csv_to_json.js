const fs = require('fs-extra')
const path = require('path');

const {convert_txt_to_json} = require('./japanmemo/convert_txt_to_json')();

console.log("start");

function readdirAsync(path) {
    return new Promise(function (resolve, reject) {
        fs.readdir(path, function (error, result) {
        if (error) {
            reject(error);
        } else {
            resolve(result);
        }
        });
    });
}

const start = async () => {
    console.log("inside start")
    const file_list = await readdirAsync("japanmemo");

    await Promise.all(file_list.map(async (file) => {

        if (file.endsWith(".txt")) {
            let from_file = path.join(__dirname,"..","japanmemo", file);
            new_file = file.substr(0, file.lastIndexOf(".")) + ".json";

            let to_file = path.join(__dirname,"..","target/japanmemo", new_file);

            await convert_txt_to_json(from_file, to_file);
        }
    }));
}

(async () => {
    try {
        await start();
    } catch (err) {
        console.log(err);
    } finally {
        
    }
})();

