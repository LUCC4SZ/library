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

function showBooks(library) {
    const shelf = document.getElementById("shelf");
    library.forEach(element => {
        const card = document.createElement("div");
        card.appendChild(createBookCard(element));
        shelf.appendChild(card);
        console.log(element);
    });
}

addBook("Tolkien", "The Lord of the Rings", 300, true);
addBook("Lovecraft", "The Call of Cthulu", 200, false);
addBook("Hammond", "Jurassic Park", 150, false);

showBooks(myLibrary);


const showButton = document.getElementById("show-dialog");
const addDialog = document.getElementById("add-book");
const confirmBtn = addDialog.querySelector("#confirm-btn");

showButton.addEventListener("click", () => {
    addDialog.showModal();
})

confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addDialog.close();
})