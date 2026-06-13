// function one() {
//     const user = "mohit";

//     function two() {
//         const user = "rohit";
//         console.log(user);
//     }

//     two();
//     console.log(user);
    
// }

// one();

// const user = {
//     username: "mohit",
//     age: 18,

//     welcomeUser: function() {
//         console.log(`${this.username} , welcome to the website`);
//         console.log(this);
//     }
// }

// user.welcomeUser();
// console.log(this);

// (() => {//arrow function
//     console.log("mohit is my name");
// })(); //without function name we can call them using IIFE

// const user = (num1, num2) => {
//     return num1 + num2;
// };

// console.log(user(2, 5));

// const returnObj = () => ({username: "Mohit"})//it is returning a object
// console.log(returnObj());

// Immediately Invoked Function Expressions (IIFE)

// (function() {
//     console.log(`my name is mohti aydac`);
// })();

// ( () => {
//     console.log("M N I M Y");
// })();

// ( function chai(name) {
//     console.log(`${name} is my first name`);
// })('mohit');

function one() {
    console.log("one functions running");
}


function two() {
    console.log("two functions running");
}


function three() {
    console.log("three functions running");
}

one();
two();
three();