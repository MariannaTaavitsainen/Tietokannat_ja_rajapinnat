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

function Palindromi(sana) {
    const pelkistetty = sana.toLowerCase();
    const kaannetty = pelkistetty.split('').reverse().join('');
    return pelkistetty === kaannetty;
}

const sana = prompt("Anna sana, jotta naet onko se palindromi: ");

if (Palindromi(sana)) {
    console.log("Sana on palindromi!")
} else {
    console.log("Sana ei ole palindromi.");
}
