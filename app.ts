import { Category } from './enums';
import { Book, DamageLogger, Person, Author, Librarian } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Encyclopedia } from './classes';

// Returned array type is declared by the imported interface
function GetAllBooks(): Book[] {
    let books = [{
            id: 1, 
            title: 'Kobe',
            author: 'jane doe',
            available: false,
            category: Category.Biography
        },
        {
            id: 2,
            title: 'Dune',
            author: 'joe bloggs',
            available: true,
            category: Category.Fiction
        },
        {
            id: 3,
            title: 'Solaris',
            author: 'mr smith',
            available: true,
            category: Category.Fiction
        },
        {
            id: 4,
            title: 'Tao Te Ching',
            author: 'hacker',
            available: false,
            category: Category.Poetry
        }
    ]
    return books;
}

// Expression as a default parameter
function LogFirstAvailable(books = GetAllBooks()): void {
    let numberOfBooks: number = books.length
    let firstAvailable: string = '';

    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log(`Total books: ${numberOfBooks}`);
    console.log(`First available: ${firstAvailable}`);
}

// Default function parameter values & declarative return type. 
function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {

    console.log(`Getting books in category: ${Category[categoryFilter]}`);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {  
            filteredTitles.push(currentBook.title)           
        }
    }
    return filteredTitles;
}

// Void return type, nothing is returned
function LogBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

// Returns a Book object
function GetBookById(id: number): Book {
    const allBooks = GetAllBooks();    
    return allBooks.filter(book => book.id === id)[0];
}

// Declarative return type
function CreateId(name: string, id: number): string {
  return name + id                                      
}

// Optional parameters
function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log(`Creating customer: ${name}`);

    if(age) {
        console.log(`Age: ${age}`);
    }

    if(city) {
        console.log(`City: ${city}`);
    }   
}

// Rest parameters
function CheckoutBooks(customer: string, ...bookIds: number[]): string[] {
    console.log(`Checking books for ${customer}`);

    let booksCheckedOut: string[] = [];

    for (const id of bookIds) {
        let book = GetBookById(id);
        if(book.available) {
            booksCheckedOut.push(book.title)
        }
    }

    return booksCheckedOut;    
}

// Overload functions
function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if (typeof bookProperty == 'string') {
        // All books by particular author
        for (const book of allBooks) {
            if(book.author === bookProperty) {
                foundTitles.push(book.title)
            }
        }        
    }
    else if(typeof bookProperty == 'boolean') {
        // All books by particular author
        for (const book of allBooks) {
            if(book.available === bookProperty) {
                foundTitles.push(book.title)
            }
        }        
    }
    return foundTitles;
}

// Use Interface with function
function PrintBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

// *******************************

let refBook = new Encyclopedia("Brittanica", 1990, 1.2);
refBook.printItem();

// let item = new ReferenceItem('Dune', 1965);
// item.printItem();

// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Sharon';
// favoriteLibrarian.assistCustomer('Joe');

// let favoriteAuthor: Author = {}             // ctrl+space to see interfaces
// let favoriteLibrarian: Librarian = {}       // ctrl+space to see interfaces

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
