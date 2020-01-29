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

export { Book, DamageLogger };