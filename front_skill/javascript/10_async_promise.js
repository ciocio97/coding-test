'use strict';

// promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// * pending: 우리가 지정한 operation이 실행 중일 때
// * fulfilled: operation을 성공적으로 끝냈을 때 (완벽)
// * rejected: file을 찾을 수 없거나 network에 문제가 생겼을 때

// Producer vs Consumer

// 1. Producer
// promise는 class. object 생성 가능
// when new Promise is created, the executor runs automatically.

const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(()=> {                // 성공 or 실패 관계없이 무조건 출력 finally
        console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
});

fetchNumber
.then(num => num *2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));


// 4. Error Handling
const getHen = () => 
    new Promise((resolve,reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));