# TypeScript Blog Post

## 1. Differences Between Interfaces and Types

In TypeScript, both **interfaces** and **types** are used to define the structure of objects, but there are some important differences:

1. **Extending and Merging:**  
   - An `interface` can be declared multiple times, and TypeScript will automatically merge them.  
   - A `type` cannot be redeclared; doing so will cause an error.

2. **Union and Intersection:**  
   - `type` can be used to create **union** and **intersection** types.  
   - `interface` is mainly used for defining object structures.

3. **Implementation:**  
   - `interface` can be implemented by classes using the `implements` keyword.  
   - `type` cannot be implemented by classes.

**Example:**

```ts
interface PersonInterface {
  name: string;
  age: number;
}

type PersonType = {
  name: string;
  age: number;
};
```

## 2. Use of `keyof` Keyword in TypeScript

The `keyof` keyword is used to get a **union of all property names** of a type. It helps ensure **type safety** when accessing properties of an object dynamically.

### Example

```ts
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
// PersonKeys is now "name" | "age"

function getProperty(obj: Person, key: PersonKeys) {
  return obj[key];
}

const person = { name: "Fatima", age: 26 };

// Accessing properties safely using keyof
const personName = getProperty(person, "name"); // "Fatima"
const personAge = getProperty(person, "age");   // 26

// The following would cause an error because "gender" is not a key of Person
// const gender = getProperty(person, "gender"); // ❌ Error
```

## 3. Difference Between `any`, `unknown`, and `never` in TypeScript

TypeScript provides several special types that help handle different scenarios in type safety. Three commonly discussed types are **`any`**, **`unknown`**, and **`never`**.

---

### 1. `any` Type

- `any` disables type checking.  
- Variables of type `any` can be assigned **any value**, and you can perform **any operations** on them without compile-time errors.  
- Using `any` is generally discouraged because it **removes type safety**.  

**Example:**

```ts
let value: any;
value = 42;
value = "Hello";
value.toFixed(); // No error, even if value is a string
```

## 4. Use of Enums in TypeScript

Enums in TypeScript are a way of defining **named constants**. They help make code more **readable and maintainable** by giving meaningful names to sets of numeric or string values.

---

### 1. Numeric Enum

By default, enums are **numeric** and auto-incremented starting from 0.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0
```

## 5. Union and Intersection Types in TypeScript

TypeScript provides **union** and **intersection** types to combine multiple types in flexible ways.

---

### 1. Union Types

A **union type** allows a variable to hold **more than one type**.  
Use the `|` symbol to define a union.

**Example:**

```ts
let value: string | number;

value = "Hello"; // ✅ valid
value = 42;      // ✅ valid
// value = true; // ❌ Error: boolean not allowed
```