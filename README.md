# টাইপস্ক্রিপ্ট ব্লগ পোস্ট

## ১. Interfaces এবং Types-এর মধ্যে পার্থক্য

টাইপস্ক্রিপ্টে **interfaces** এবং **types** দুটোই অবজেক্টের গঠন (structure) নির্ধারণ করতে ব্যবহৃত হয়, কিন্তু এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে:

1. **Extending এবং Merging:**  
   - একটি `interface` একাধিকবার ডিক্লেয়ার করা যায়, টাইপস্ক্রিপ্ট স্বয়ংক্রিয়ভাবে সেগুলোকে মার্জ করে দেবে।  
   - একটি `type` পুনরায় ডিক্লেয়ার করলে এরর হবে।

2. **Union এবং Intersection:**  
   - `type` দিয়ে **union** এবং **intersection** টাইপ তৈরি করা যায়।  
   - `interface` মূলত অবজেক্টের গঠন নির্ধারণের জন্যই ব্যবহৃত হয়।

3. **Implementation:**  
   - `interface` ক্লাস দিয়ে `implements` কীওয়ার্ড ব্যবহার করে ইমপ্লিমেন্ট করা যায়।  
   - `type` ক্লাস দিয়ে ইমপ্লিমেন্ট করা যায় না।

**উদাহরণ:**

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

## 2. TypeScript-এ keyof কীওয়ার্ডের ব্যবহার

`keyof` কীওয়ার্ডটি কোনো টাইপের **সব প্রপার্টি নামের ইউনিয়ন** তৈরি করে। এটি ডাইনামিকভাবে অবজেক্টের প্রপার্টি অ্যাক্সেস করার সময় **টাইপ সেফটি** নিশ্চিত করে।

### Example

```ts
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
// PersonKeys এখন "name" | "age"

function getProperty(obj: Person, key: PersonKeys) {
  return obj[key];
}

const person = { name: "Fatima", age: 26 };

// keyof ব্যবহার করে নিরাপদে প্রপার্টি অ্যাক্সেস
const personName = getProperty(person, "name"); // "Fatima"
const personAge = getProperty(person, "age");   // 26

// নিচের লাইনটি এরর দেবে কারণ "gender" Person টাইপের কী নয়
// const gender = getProperty(person, "gender"); // ❌ Error
```

## 3. `any`, `unknown`, এবং `never`-এর মধ্যে পার্থক্য

টাইপস্ক্রিপ্টে কিছু বিশেষ টাইপ রয়েছে যেগুলো বিভিন্ন পরিস্থিতিতে টাইপ সেফটি নিয়ন্ত্রণ করে। সবচেয়ে আলোচিত তিনটি হলো **`any`**, **`unknown`**, এবং **`never`**।
---

### 1. `any` টাইপ

- `any` টাইপ চেকিং সম্পূর্ণভাবে বন্ধ করে দেয়।  
- `any` টাইপের ভেরিয়েবলে **যেকোনো মান** বসানো যায় এবং তার ওপর **যেকোনো অপারেশন** করা যায়, কম্পাইল-টাইম এরর ছাড়াই। 
- `any` ব্যবহার সাধারণত **নিরুৎসাহিত** করা হয় কারণ এটি টাইপ সেফটি নষ্ট করে।  

**উদাহরণ:**

```ts
let value: any;
value = 42;
value = "Hello";
value.toFixed(); // কোনো এরর নেই, যদিও value এখন স্ট্রিং
```

## 4. TypeScript-এ Enums-এর ব্যবহার

Enums হলো **নামযুক্ত কনস্ট্যান্ট**-এর সেট নির্ধারণের একটি উপায়। এটি কোডকে আরো **পঠনযোগ্য এবং রক্ষণাবেক্ষণযোগ্য** করে।

---

### 1. নিউমেরিক Enum

ডিফল্টভাবে enum **নিউমেরিক** হয় এবং ০ থেকে অটো-ইনক্রিমেন্ট হয়।

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); // আউটপুট: 0
```

## 5. Union এবং Intersection Types TypeScript-এ

টাইপস্ক্রিপ্টে union এবং intersection টাইপের মাধ্যমে একাধিক টাইপকে নমনীয়ভাবে একত্রিত করা যায়।

---

### 1. Union Types

Union **টাইপ** একটি ভেরিয়েবলকে **একাধিক টাইপের** মান ধারণ করতে দেয়।
`|` চিহ্ন ব্যবহার করে ইউনিয়ন তৈরি করা হয়।

**উদাহরণ:**

```ts
let value: string | number;

value = "Hello"; // ✅ বৈধ
value = 42;      // ✅ বৈধ
// value = true; // ❌ এরর: boolean অনুমোদিত নয়
```