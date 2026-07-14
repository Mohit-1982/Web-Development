// let str = new String("String woo");
// let btr = str;

// btr = "mOhit";// here we are not modifying str we are just letting btr to point to another string mOhit so this won't change str value
// console.log(str, btr);

let str = "Mohit";

console.log(str);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.at(5));
console.log(str.at(3));
console.log(str.charAt(2));
console.log(str.indexOf('t'));
console.log(str.substring(0, 2));
console.log(str.slice(-1, 2));//will print empty string because after converting -1 into 4 we are slicing (4, 2) so start is greater than end this is why it will print ""

let btr = "      yadav       "
console.log(btr.trim());
console.log(btr.replace('a', 'boom'));//it only replaces the first occurance it won't do for all the occurance for all use replaceAll()
console.log(btr.replaceAll('a', 'boom'));
console.log(btr.includes('av'));

let ztr = "mohit-yadav-is-learning-javascript";
console.log(ztr.split('-'));