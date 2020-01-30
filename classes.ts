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
    constructor(public title: string, public year: number) {
        console.log('Creating new reference item');
    }
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
    }
}

class Encyclopedia extends ReferenceItem {                                      
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear)                                                 
    }
    printItem(): void {
      // super.printItem();                                 
      console.log(`Edition: ${this.edition}`);
    }
}

export {
    UniversityLibrarian,
    ReferenceItem,
    Encyclopedia
};