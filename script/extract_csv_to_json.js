const fs = require('fs-extra')
const klaw = require('klaw')
const path = require('path');
const csvjson = require('csvjson');
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
    // const file_list = await readdirAsync("japanmemo")

    const toFolder = "target/japanmemo/"

    const filterFunc = item => {
        const basename = path.basename(item)
        // console.log("to check = ",basename.substr(basename.lastIndexOf(".")))
        return !(basename === '.' || basename[0] === '.' || basename.substr(basename.lastIndexOf(".")) !== ".txt")
    }

    // console.log(file_list)
    klaw("japanmemo", { filter: filterFunc })
        .on('data', file => {
        
        const fromPath = path.basename(file.path);

        if (fromPath == 'japanmemo') {
            return
        }

        console.log("fromPath = " + fromPath);
        
        const toPath = fromPath.substr(0,fromPath.lastIndexOf(".")) + ".json";
        // to_file = path.basename(file.path).substr(0, path.basename(file.path).lastIndexOf(".")) + ".json";
        // let toPath = path.join(toFolder, to_file);

        console.log("before = " +fromPath);
        await convert_txt_to_json("japanmemo/" + fromPath,toFolder+toPath)
        console.log("after = " +toPath)
    
        }
    );
}

(async () => {
    try {
        await start();
    } catch (err) {
        console.log(err);
    } finally {
        
    }
})();

