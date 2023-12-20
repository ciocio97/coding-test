'use strict'

// Object
// one of the Javascript' s data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of Object
// object = { key : value }; 키와 벨류의 집합체

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
}

// object로 변경하면 관리 쉬워짐
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 }; // class가 없어도 바로 object 생성 가능
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']); // 배열에서 접근하는 것처럼 data 받아오기 가능

ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);  // 동적으로 키를 받아와야할 때 [] 유용합네다
}
printValue(ellie, 'name');
printValue(ellie, 'age'); 

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// object를 필요할 때 일일이 만들게 되면 불필요한 key와 value 계속 쓰는 일 발생

// 4. Constructor function
const person4 = new Person('ellie', 30);
console.log(person4);
function Person(name, age) {  
    // this = {}
    this.name = name;
    this.age = age;
    // return this;
}    

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for...in vs for...of
// for (key in obj)          
// for in : (iterator) => 값을 차례대로 꺼낼 수 있는 객체
console.clear();
for (key in ellie) {
    console.log(key);
}

// for (value of iterable)   
// for of : (iterable) => 반복 가능한 객체 ex. a number of array
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value)
}

// 7. Fun cloning
// Object.assign (dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
