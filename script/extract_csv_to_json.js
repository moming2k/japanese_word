const fs = require('fs');
const path = require('path');
const csvjson = require('csvjson');
const convert_jp_txt_to_json = require('./japanmemo/convert_txt_to_json');

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
    const file_list = await readdirAsync("japanmemo")

    const toFolder = "target/japanmemo/"

    // console.log(file_list)
    for (const file of file_list) {
        
        const fromPath = path.join("japanmemo", file);
        to_file = file.substr(0, file.lastIndexOf(".")) + ".json";
        let toPath = path.join(toFolder, to_file);

        console.log("before = " +fromPath)
        await convert_jp_txt_to_json(fromPath,toPath)
        console.log("after = " +toPath)
    
    }
}

start()