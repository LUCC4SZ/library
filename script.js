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

console.log(myLibrary);

addBook("Tolkien", "The Lord of the Rings", 300, true);

