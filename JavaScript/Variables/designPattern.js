//Design Pattern

//1. Module Pattern(IIFE)

// let Bank = (function() {
//     let bankBalance = 100000;

//     function getBalance() {
//         return bankBalance;
//     }

//     function setBalance(val) {
//         if (val <= 0) throw new Error('Add Sufficient amount');
//         bankBalance = val; 
//         console.log(bankBalance);
//     }

//     function withDrawn(val) {
//         if (val <= 0 || val > bankBalance) throw new Error('Add Sufficient amount');
//         bankBalance -= val;
//         console.log(bankBalance);
//     }

//     return {
//         getBalance,
//         setBalance,
//         withDrawn
//     };
// })();

// Bank.getBalance();
// Bank.setBalance(-1);
// Bank.withDrawn(2000000);

//2.Revealing module pattern 

// return {
//         get: getBalance,
//         set: setBalance,
//         drawn: withDrawn
//     };

//3.Factory function pattern

// function createProduct(name, price) {
//     let stock = 10;

//     return {
//         name,
//         price,
//         buy(qty) {
//             if (qty <= stock) {
//                 stock -= qty;
//                 console.log(`${stock} item bought - ${stock} item left in stock`);
//             }else {
//                 console.error('We dont have that much item in our stock');
//             }
//         },
//         refill(qty) {
//             stock += qty;
//         }
//     }
// }

// let iphone = createProduct('iphone', 700000);
// iphone.buy(5);

// 4.Observer pattern

