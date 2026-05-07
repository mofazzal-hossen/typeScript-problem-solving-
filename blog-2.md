# How the Four Pillars of OOP Help Reduce Complexity in TypeScript Projects

## Introduction

When I first started learning Object-Oriented Programming (OOP), the four pillars seemed very theoretical and difficult to understand. Terms like Inheritance, Polymorphism, Abstraction, and Encapsulation sounded complicated at first.

But after building a few TypeScript projects, I realized these concepts actually make code more organized, reusable, and easier to manage — especially in large applications.

In this blog, I’ll explain the four pillars of OOP in a simple and practical way.


# 1. Encapsulation


Encapsulation means hiding sensitive data and controlling access to it.
In TypeScript, we often use `private` or `protected` access modifiers for this.

Example:

////ts
class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    getBalance() {
        return this.balance;
    }
}


Here, nobody can directly change the `balance` from outside the class.

This helps protect important data and prevents accidental mistakes.

### Why it matters

In large projects, encapsulation helps keep the internal logic secure and controlled.

---

# 2. Inheritance

Inheritance allows one class to reuse properties and methods from another class.

Example:

***ts
class Person {
    constructor(public name: string) {}
}

class Student extends Person {
    constructor(name: string, public grade: string) {
        super(name);
    }
}


Now `Student` automatically gets the `name` property from `Person`.




**** Why it matters

---Inheritance reduces duplicate code and keeps the project structure cleaner.
---Instead of rewriting the same logic again and again, we can reuse existing functionality.



*** 3. Polymorphism

Polymorphism means one method can behave differently depending on the object.
Example:

///ts
class Animal {
    makeSound() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Bark");
    }
}
///

Even though both classes use the same method name, the behavior changes.
** Why it matters

--Polymorphism makes applications flexible and scalable.
--It allows developers to write more dynamic and maintainable code.



# 4. Abstraction


Abstraction means hiding unnecessary implementation details and exposing only the important parts.
For example, when we use a car, we only use the steering wheel and pedals. We don’t need to understand how the engine works internally.
In TypeScript, abstraction can be achieved using abstract classes.

Example:

///ts
abstract class Vehicle {
    abstract startEngine(): void;
}

class Car extends Vehicle {
    startEngine(): void {
        console.log("Car engine started");
    }
}
///

*** Why it matters

Abstraction helps developers focus on what an object does instead of how it works internally.

This reduces complexity in large systems.





*** Conclusion
The four pillars of OOP are not just theoretical concepts. They solve real-world programming problems.

--> Encapsulation protects data
--> Inheritance reduces duplication
-- Polymorphism increases flexibility
--> Abstraction hides complexity



Together, these concepts help developers build scalable, maintainable, and organized TypeScript applications.
As I continue learning TypeScript, I find that understanding OOP makes coding much more structured and enjoyable.