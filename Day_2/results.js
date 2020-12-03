const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const fs = require('fs')

//Part 1

const lines = fs.readFileSync('./data.txt').toString();

const linesArray = lines.split('\n');

const totalValid = (arr) => {
    let validPassword = 0; 

    for (let i = 0; i < arr.length; i++) {
        const splitColon = arr[i].split(': ');
        const numAndStr = splitColon[0].split(' ');
        const minMaX = numAndStr[0].split('-')
        const count = splitColon[1].split(numAndStr[1]).length - 1;

       if(splitColon[1].includes(numAndStr[1]) && count >= minMaX[0] && count <= minMaX[1])  {
           validPassword++;
       }
    }
    return validPassword
}

    const totalValid2 = (arr) => {
        let validPassword = 0;

        for (let i = 0; i < arr.length; i++) {
            let  splitColon = arr[i].split(': ');
            let numAndStr = splitColon[0].split(' ');
            let minMaX = numAndStr[0].split('-');

            if(!(splitColon[1][Number(minMaX[0]) -1] === numAndStr[1] && splitColon[1][Number(minMaX[1]) - 1] === numAndStr[1])) {
                if ((splitColon[1][Number(minMaX[0]) - 1] === numAndStr[1] || splitColon[1][Number(minMaX[1]) - 1] === numAndStr[1])) {
                    validPassword++
                }
            }
        }
        return validPassword;
    }

console.log(totalValid(linesArray))
console.log(totalValid2(linesArray))