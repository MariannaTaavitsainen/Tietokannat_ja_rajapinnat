//Vaihe 1, tehdään taulukko

const bookArray = [];

function addBook(name, author, isbn){
    const newID = bookArray.length > 0? bookArray[bookArray.length -1].id_book +1 : 1;
    const newBook = {id_book: newID, name, author, isbn};
    bookArray.push(newBook);
}

addBook("Everything You Ever Wanted to Know", "Upton", "082305649x");
addBook("Photography", "Vilppu", "205711499");
addBook("Drawing Manual Vilppu", "Zelanshi", "1892053039");
addBook("TBA", "Zelanshi", "0534613932");
addBook("ManuShaping Space", "Speight", "0534613934");

// 2. Tulostetaan tietotyyppi typeof:lla
console.log("Tietotyyppi: ", typeof bookArray);

//3. Tulostetaan koko sisältö
console.log("Koko sisältö: ", bookArray);

// 4. Ensimmäinen rivi
console.log("1. rivi: ", bookArray[0]);

// 5. Ensimmäisen kirjan nimi
console.log("Ensimmäisen kirjan nimi: ", bookArray[0].name);

// 6. Rivien määrä
console.log("Rivien määrä: ", bookArray.length);

// 7. Kaikkien kirjojen nimet
console.log("Kaikkien taulukon kirjojen nimet: ");
bookArray.forEach(book => console.log(book.name));

