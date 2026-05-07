function filterEvenNumbers(number: number[]): number[] {
    const result: number[] = [];
    for (let num of number) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }
    return result;
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));



function reverseString(text: string): string {
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }

    return reversed;
}

// console.log(reverseString("typescript"));


type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
    if (typeof value === "string") {
        return "string";
    } else {
        return "number"
    }
}

// console.log(checkType("hello"))
// console.log(checkType(42))



function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key]
}

const user = {
    id: 1,
    name: "munna",
    age: 21
};

// console.log(getProperty(user, "name"))


interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book) {
    return {
        ...book,
        isResd: true
    };
};

const myBook: Book = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024
};

// console.log(toggleReadStatus(myBook));


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");

// console.log(student.getDetails());



function getIntersection(arr1: number[], arr2: number[]): number[] {

    const result: number[] = [];

    for (const num of arr1) {
        if (arr2.includes(num)) {
            result.push(num);
        }
    }

    return result;
}



// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));