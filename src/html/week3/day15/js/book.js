alert("Welcome to BMS, Here you can maintain your books easily");

var books = [];

var input;

do {
    input = prompt("What do u want to do? \n1. Add book\n2. View all book\n3. Delete book\n4. Exit")
    switch (input) {
        case "1":
            addBook();
            break;
        case "2":
            viewBook();
            break;
        case "3":
            deleteBook();
            break;
        case "4":
            break;
        default:
            console.log("Invalid Input!");
    }
} while (input != 4)

console.log("Thank You and have a nice day!")

function addBook() {
    var book = prompt("Enter name of book to add:")
    books.push(book)
}

function viewBook() {
    console.log("List of books are:")
    for (var x of books) {
        console.log(x);
    }
}

function deleteBook() {
    var book = prompt("Enter name of book to delete:")
    var bookIndex = books.indexOf(book)
    console.log(bookIndex)
    if (bookIndex == -1) {
        console.log("No such book in current list!")
    } else {
        books.splice(bookIndex, 1);
    }
}