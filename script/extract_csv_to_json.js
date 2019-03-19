const fs = require('fs');
const path = require('path');
var csvjson = require('csvjson');
var convert_jp_txt_to_json = require('./japanmemo/convert_txt_to_json');

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
        // if (err) {
        //     console.error("Could not list the directory.", err);
        //     process.exit(1);
        // }
    
        // const toFolder = "target/japanmemo/"
        
        // await convert_jp_txt_to_json("","");
        // files.forEach(function (file, index) {
        //     const fromPath = path.join("japanmemo", file);
        //     if (file.endsWith(".txt")) {
        //         to_file = file.substr(0, file.lastIndexOf(".")) + ".json";
        //         let toPath = path.join(toFolder, to_file);

        //         await convert_jp_txt_to_json(fromPath, toPath)
        //         // fs.stat(fromPath, function (error, stat) {
        //         //     if (error) {
        //         //       console.error("Error stating file.", error);
        //         //       return;
        //         //     }
                
        //         //     if (stat.isFile()) {
        //         //         console.log("fromPath = " + fromPath);

        //         //         

        //         //         var options = {
        //         //             delimiter   : "=",
        //         //             wrap        : false,
        //         //             headers     : "none"
        //         //         };

        //         //         var read = fs.createReadStream(fromPath);
        //         //         var write = fs.createWriteStream(toPath);
        //         //         var toObject = csvjson.stream.toArray(options);
        //         //         var stringify = csvjson.stream.stringify();
        //         //         read.pipe(toObject).pipe(stringify).pipe(write);
        //         //     }
        //         // });
        //     }
        // });
    // });
}

start()