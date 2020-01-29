"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
// Returned array type is declared by the imported interface
function GetAllBooks() {
    var books = [{
            id: 1,
            title: 'Kobe',
            author: 'jane doe',
            available: false,
            category: enums_1.Category.Biography
        },
        {
            id: 2,
            title: 'Dune',
            author: 'joe bloggs',
            available: true,
            category: enums_1.Category.Fiction
        },
        {
            id: 3,
            title: 'Solaris',
            author: 'mr smith',
            available: true,
            category: enums_1.Category.Fiction
        },
        {
            id: 4,
            title: 'Tao Te Ching',
            author: 'hacker',
            available: false,
            category: enums_1.Category.Poetry
        }
    ];
    return books;
}
// Expression as a default parameter
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total books: " + numberOfBooks);
    console.log("First available: " + firstAvailable);
}
// Default function parameter values & declarative return type. 
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log("Getting books in category: " + enums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
// Void return type, nothing is returned
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
// Returns a Book object
function GetBookById(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
// Declarative return type
function CreateId(name, id) {
    return name + id;
}
// Optional parameters
function CreateCustomer(name, age, city) {
    console.log("Creating customer: " + name);
    if (age) {
        console.log("Age: " + age);
    }
    if (city) {
        console.log("City: " + city);
    }
}
// Rest parameters
function CheckoutBooks(customer) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    console.log("Checking books for " + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIds_1 = bookIds; _a < bookIds_1.length; _a++) {
        var id = bookIds_1[_a];
        var book = GetBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        // All books by particular author
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        // All books by particular author
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
// Use Interface with function
function PrintBook(book) {
    console.log(book.title + " by " + book.author);
}
// *******************************
var favoriteAuthor = {};
// // Duck typing in action. myBook contains all keys (and more) of the Interface
// let myBook = {
//     id: 5,
//     title: `Lillith's Brood`,
//     author: 'Octavia Butler',
//     available: true,
//     category: Category.Fiction,             // Imported Category type from enum
//     year: '1813',
//     pages: 376,
//     markDamaged: (reason: string) => console.log(`Damage reported: ${reason}`)
// }
// let logDamage: DamageLogger;
// logDamage = (damage: string) => console.log(`Damage reported: ${damage}`);
// logDamage('Coffee stain')
// PrintBook(myBook);
// myBook.markDamaged('Torn pages')
// // Overload string
// let joesBooks = GetTitles('joe bloggs')
// joesBooks.forEach(title => console.log(title));
// // Overload boolean
// let checkedOutBooks = GetTitles(false)  
// checkedOutBooks.forEach(title => console.log(title));
// let myBooks: string[] = CheckoutBooks("Joe", 1, 2, 3);
// myBooks.forEach(title => console.log(title);
// LogFirstAvailable();
// let fictionBooks = GetBookTitlesByCategory();
// fictionBooks.forEach(title => console.log(title));
// CreateCustomer('Michelle')
// CreateCustomer('Michelle', 22, "Swansea")
// let IdGenerator: (chars: string, nums: number) => string;
// IdGenerator = (name: string, id: number) => { return id + name };
// let myId: string = IdGenerator('joe', 102);
// console.log(myId);
// const allBooks = GetAllBooks();
// LogFirstAvailable(allBooks);
// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// LogBookTitles(fictionBooks)
// fictionBooks.forEach((book, i, arr) => console.log(`${++i} – ${book}`));
//# sourceMappingURL=app.js.map