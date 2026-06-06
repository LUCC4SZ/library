const myLibrary = [];

function Book(author, title, pages, read, id) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBook(author, title, pages, read) {
    const book = new Book(author, title, pages, read, crypto.randomUUID());
    myLibrary.push(book);
}

function createBookCard(book) {
    const bookInfo = document.createElement("div");
    for (let key in book) {
        const info = document.createElement("p");
        info.innerText = `${book[key]}`;
        bookInfo.appendChild(info);
    }
    return bookInfo;
}

const shelf = document.getElementById("shelf");

function showBooks(library) {
    library.forEach(element => {
        const card = document.createElement("div");
        card.appendChild(createBookCard(element));
        shelf.appendChild(card);
    });
}

function cleanShelf(library) {
    library.forEach(element => {
        shelf.removeChild(element);
    })
}

function updateShelf(library) {
    const card = document.createElement("div");
    card.appendChild(createBookCard(library.pop()));
    shelf.appendChild(card);
}

addBook("Tolkien", "The Lord of the Rings", 300, true);
addBook("Lovecraft", "The Call of Cthulu", 200, false);
addBook("Hammond", "Jurassic Park", 150, false);

showBooks(myLibrary);

const showButton = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const inputAuthor = dialog.querySelector("#author-name");
const inputTitle = dialog.querySelector("#book-title");
const inputPages = dialog.querySelector("#pages-number");
const inputRead = dialog.querySelector("#read");
const confirmBtn = dialog.querySelector("#confirm-btn");

showButton.addEventListener("click", () => {
    dialog.showModal();
})

dialog.addEventListener("close", (e) => {
    let readBook;
    if (inputRead.value === "yes") {
        readBook = true;
    } else {
        readBook = false;
    }
    addBook(inputAuthor.value, inputTitle.value, inputPages.value, readBook);
    updateShelf(myLibrary);
})

confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
})