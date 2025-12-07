// 1. Kopioitu funktio tehtävänannosta
setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");


// 2. Anonyymi funktio
setTimeout(function(){ 
    console.log("Demonstrating anonymous callbacks");
}, 2000);

console.log("Anonym function is started");


// 3. Arrow-funktio
setTimeout(() => {
    console.log("Demonstrating arrow function's callbacks");
}, 2000);

console.log("Arrow function started");


