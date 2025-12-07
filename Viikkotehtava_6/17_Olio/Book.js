const book = {
    bookArray: [],

    addBook: function(name, author, isbn){
        const newID = this.bookArray.length > 0
            ? this.bookArray[this.bookArray.length -1].id_book +1 : 1;
        const newBook = {id_book: newID, name, author, isbn};
        this.bookArray.push(newBook);
    },

    getAllBooks: function(){
        console.log("Kaikki kirjat:");
        console.log(this.bookArray);
    },

    getOneBook: function(x){
        const bookFound = this.bookArray.find(b => b.id_book === x);
        if(bookFound){
            console.log("Kirjan id: ", x, bookFound);
        } else {
            console.log("Kirjaa ei löytynyt")
        }
    }
};

book.addBook("Everything You Ever Wanted to Know", "Upton", "082305649x");
book.addBook("Photography", "Vilppu", "205711499");
book.addBook("Drawing Manual Vilppu", "Zelanshi", "1892053039");
book.addBook("TBA", "Zelanshi", "0534613932");
book.addBook("ManuShaping Space", "Speight", "0534613934");

console.log("Tulostetaan kaikki kirjat funktiolla");
book.getAllBooks();

console.log("Tulostetaan olemassa oleva kirja");
book.getOneBook(2);

console.log("Yritetään tulostaa kirjaid, jota ei ole");
book.getOneBook(8);





