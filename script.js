const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBook(author, title, pages, read) {
    let book = new Book(author, title, pages, read);
    myLibrary.push(book);
}

console.log(myLibrary);

addBook("Tolkien", "The Lord of the Rings", 300, true);
