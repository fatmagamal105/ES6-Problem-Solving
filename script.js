//EX1  Swap the values of two variables using destructuring
let fname = 'Datma Alzahraa';
let lname = 'Gamal';

[fname, lname] = [
      lname, 
      fname
    ];

console.log(fname); // Gamal
console.log(fname); // Gamal

//EX2   Using rest parameter and spread operator return max value from any array

function findValue(...val){
  console.log(val);
  let maxValue = Math.max(...val);
  console.log(maxValue);
  let minValue = Math.min(...val);
  console.log(minValue);
  return[minValue, maxValue]
}

console.log(findValue(2,4,6,8,9,10));


//EX3  a:test that every element in the given array is a string
var fruits = ["apple", "strawberry", "banana", "orange","mango"];

for (let i = 0; i < fruits.length; i++) {
      if(typeof(fruits[i]) == "string")
      {
        console.log(`${fruits[i]} is a string value `);
      }else{
        throw "error";
      }
}

//EX3 b:"test that some of array elements starts with "a"

for (let i = 0; i < fruits.length; i++) {
  if(fruits[i].startsWith("a"))
  {
    console.log(`array element start with a =  ${fruits[i]}`);
  }
}

//EX3 c:"test that some of array elements starts with "a"

var fruits = ["apple", "strawberry", "banana", "orange","mango"];

let specialFruits = [];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].startsWith("b") || fruits[i].startsWith("s")) {
        specialFruits.push(fruits[i]);
    }
}
console.log(specialFruits);

//EX3 d. generate new array each element of the new array contains a string declaring that you like the give fruit element
//Ex3 e. use forEach to display all elements of the new array from previous point
let likedFruits = [];
for (let i = 0; i < fruits.length; i++) {
    fruits[i] = "I like "+fruits[i];
    likedFruits.push(fruits[i]);
}

console.log(likedFruits);
