import {
    Book,
    DamageLogger,
    Person,
    Author,
    Librarian
} from './interfaces';

class UniversityLibrarian implements Librarian {

    name: string;
    email: string;
    department: string;

    assistCustomer(customerName: string) {
        console.log(`${this.name} is assisting ${customerName}`);

    }
}

class ReferenceItem {
    constructor(public title: string, private year: number) {               
        console.log('Creating new reference item');   
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`); 
    }
}

export {
    UniversityLibrarian,
    ReferenceItem
};