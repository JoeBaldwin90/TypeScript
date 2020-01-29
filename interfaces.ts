import { Category } from "./enums";

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;             // Imported 'Category' type from enum
    pages?: number;                 // Optional property
    markDamaged?: DamageLogger      // Function Type defined by interface
}

interface DamageLogger {
    (reason: string): void;         // Func (params) => return type
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (customerName: string) => void
}

export { Book, DamageLogger, Person, Author, Librarian };