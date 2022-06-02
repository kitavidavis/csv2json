/*
 * csv2json <https://github.com/kitavidavis/csv2json>
 *
 * Copyright (c) 2022-present, David Kitavi.
 * Released under the MIT License.
 */
const fs = require('fs');

module.exports = function(path){
    if(typeof path !== 'string'){
        throw new TypeError("Path should be a string");
    }

    if(path.includes('csv') === false){
        throw new TypeError("Module expects a csv file");
    }
    
    const csv = fs.readFileSync(path);

    var arr = csv.toString().split('\r');

    let result = [];

    let headers = arr[0].split(", ");

    for(let i=1; i< arr.length - 1; i++){
        let obj = {};
        let str = arr[i];
        let s = '';

        let flag = 0;
        for(let ch of str) {
            if(ch === '"' && flag === 0) {
                flag = 1
            } else if(ch === '"' && flag === 1){
                flag = 0;
            }

            if(ch === ',' && flag === 0){
                ch = '|'
            }

            if(ch !== '"'){
                s+= ch;
            }
        }

        let properties = s.split("|");

        for(let j in headers) {
            if(properties[j].includes(", ")){
                obj[headers[j]] = properties[j].split(", ").map(item => item.trim())
            } else {
                obj[headers[j]] = properties[j]
            }
        }

        result.push(obj)
    }

    console.log(result);

    return result;
}