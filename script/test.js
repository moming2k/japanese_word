const path = require('path');

const {convert_txt_to_json} = require('./japanmemo/convert_txt_to_json')();

const start = async () => {
    let from_file = path.join(__dirname,"..","japanmemo", "cn_midword2.txt");
    let to_file = path.join(__dirname,"..","target/japanmemo", "cn_midword2.json");
    await convert_txt_to_json(from_file, to_file);
}

(async () => {
    try {
        await start();
    } catch (err) {
        console.log(err);
    } finally {
        console.log("process completed");
    }
})();