const myLibrary = [];

function Book(author, title, pages, read, id) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBook(author, title, pages, read) {
    let book = new Book(author, title, pages, read, crypto.randomUUID());
    myLibrary.push(book);
}

function showBooks(library) {
    library.forEach(element => {
        console.log(element);
    });
}

addBook("Tolkien", "The Lord of the Rings", 300, true);
addBook("Lovecraft", "The Call of Cthulu", 200, false);
addBook("Hammond", "Jurassic Park", 150, false);

showBooks(myLibrary);