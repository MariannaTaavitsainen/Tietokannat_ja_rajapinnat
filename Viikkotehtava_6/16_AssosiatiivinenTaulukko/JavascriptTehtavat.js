
const prompt = require('prompt-sync')();

const x = parseFloat(prompt("Anna ensimmäinen luku: "));
const y = parseFloat(prompt("Anna toinen luku: "));

function getBiggerOne(x, y){
    if (x > y) {
        return x;
    } 
    else if (x === y) {
        console.log(
            "Ei kumpikaan. arvot ovat samansuuruisia.");
        return null;
    }
    else {
        return y;
    }
}

console.log("Antamistasi luvuista isompi on: ", getBiggerOne(x, y));




