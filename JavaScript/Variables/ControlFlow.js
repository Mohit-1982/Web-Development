// if (1) {
//     console.log("Entered");
// } else {
//     console.log("Not Entered");
// } 

// for (let i = 0; i < 10; i++) console.log(i);

// for (let i = 0; i < 10; i++) {
//     console.log(`this is ${i}`);
    
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }

// let i = 0;

// while (i < 10) {
//     console.log(i++);
// }

// i = 0;

// do {
//     console.log(i);
//     i++;
// }while (i < 11);

// const arr = [1, 2, 3, 4, 5, 6];

// for (let val of arr) {
//     console.log(val);
// }

// const str = "mohit yadav";

// for (let char of str) {
//     console.log(char);
// }

// let map = new Map();

// map.set(1, "mohit");
// map.set(2, "rohit");
// map.set(3, "aditya");
// map.set(1, "shyam");
// map.set(1, "shyam");

// for (const [key, value] of map) {
//     console.log(key, ' ', value);
// }

const myObj = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swiftByApple"
};

// myObj.forEach( (key) => { //not possible
//     console.log(myObj.key);
// });

// for (const key in myObj) {
//     console.log(`Key is : ${key} and value is : ${myObj[key]}`);
// }

const arr = ["js", "ruby", "python", "typescript", "java", "cpp", "c"];

// arr.forEach( function print(item) {
//     console.log(item);
// });

// arr.forEach(function(item) {
//     console.log(item);
// });

// arr.forEach( (val) => {
//     console.log(val);
// });

// arr.forEach( (item, item2, item3, item4) => {
//     console.log(item, item2, item3, item4);//element, index, whole array, undefined
// });

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.filter( (item) => {
//     return item > 4;
// } );

// console.log(myNum);
// console.log(newNum);

// const newNu = myNum.map( (num) => num * 10 );
// console.log(newNu);

const newN = myNum.reduce( (acc, currVal) => acc + currVal, 0);
console.log(newN);



