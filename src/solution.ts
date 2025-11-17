const formatValue = (value: string | number | boolean): string | number| boolean =>{
  if(typeof value === 'string'){
    return value.toUpperCase();
  }else if(typeof value === 'number'){
    return value * 10;
  }else if(typeof value === 'boolean'){
    return !value;
  }else{
    return value;
  }
}

const getLength = (value: string | any[]): number =>{
   if(typeof value === 'string'){
    return value.length;
   }else if(Array.isArray(value)){
    return value.length;
   }else{
    return 0;
   }
}


class Person{
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age
  }
  getDetails(): string{
   return `Name: ${this.name}, Age: ${this.age}`
  }
}

type Item = {
  title: string, 
  rating: number,
}
const filterByRating = (value: Item[]): Item[] =>{
return value.filter(item => item.rating >= 4)
}


type User = {
  id: number,
  name: string,
  email: string,
  isActive: boolean,
}

const filterActiveUsers = (value: User[]): User[] =>{
 return value.filter(item => item.isActive === true);
}

interface Book{
 title: string,
 author: string,
 publishedYear: number,
 isAvailable: boolean,
}

const printBookDetails = (value: Book): void =>{
  console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable ? 'Yes' : 'No'}`);
}



const getUniqueValues = (
  array1: (string | number)[],
  array2: (string | number)[]
): (string | number)[] => {
  
  const result: (string | number)[] = [];
  for (let i = 0; i < array1.length; i++) {

    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === array1[i]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[result.length] = array1[i]; 
    }
  }

  for (let i = 0; i < array2.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === array2[i]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[result.length] = array2[i];
    }
  }
  return result;
};



type Product = {
name: string,
price: number,
quantity: number,
discount?: number,
}

const calculateTotalPrice = (value: Product[]): number => {
  return value.reduce((total, product) => {
    const { price, quantity, discount } = product;
    if (discount && discount > 0) {
      const discountAmount = price * (discount / 100);
      const productPrice = (price - discountAmount) * quantity;
      return total + productPrice;
    }
    
    return total + (price * quantity);
  }, 0);
}




