const myLibrary = [];

function Book(author, title, pages, read, id) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

Book.prototype.changeReadStatus = function() {
    this.read = !this.read;
}

function addBook(author, title, pages, read) {
    const book = new Book(author, title, pages, read, crypto.randomUUID());
    myLibrary.push(book);
}

function createBookCard(book) {
    const bookInfo = document.createElement("div");
    for (let key in book) {
        // const info = document.createElement("p");
        switch (key) {
            case "id":
                const data = document.createAttribute("data-id");
                bookInfo.setAttribute("data-id", book[key]);
                const removeButton = document.createElement("button");
                removeButton.innerText = "Remove Book";
                removeButton.addEventListener("click", () => {
                    removeFromShelf(book[key]);
                })
                bookInfo.appendChild(removeButton);
                break;
            case "read":
                const changeRead = document.createElement("button");
                changeRead.innerText = "Change read status";
                changeRead.addEventListener("click", Book.prototype.changeReadStatus());
                bookInfo.appendChild(changeRead);
                break;
            default:
                const info = document.createElement("p");
                info.innerText = `${book[key]}`;
                bookInfo.appendChild(info);
                break;
        }
    }
    return bookInfo;
}

const shelf = document.getElementById("shelf");

function showBooks(library) {
    library.forEach(element => {
        shelf.appendChild(createBookCard(element));
    });
}

function updateShelf(library) {
    let aux = library;
    shelf.appendChild(createBookCard(aux.pop()));
}

function removeFromShelf(id) {
    let aux = shelf.children;
    for (let i = 0; i < shelf.childElementCount; i++) {
        if (aux[i].dataset.id === id) {
            shelf.removeChild(aux[i]);
        }
    }
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
const inputReadYes = dialog.querySelector("#yes-btn");
const inputReadNo = dialog.querySelector("#no-btn");
const confirmBtn = dialog.querySelector("#confirm-btn");

let readBook;

inputReadYes.addEventListener("click", () => {
    readBook = true;
})

inputReadNo.addEventListener("click", () => {
    readBook = false;
})

showButton.addEventListener("click", () => {
    dialog.returnValue = "";
    dialog.showModal();
})

confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBook(inputAuthor.value, inputTitle.value, inputPages.value, readBook);
    updateShelf(myLibrary);
    dialog.close();
})
