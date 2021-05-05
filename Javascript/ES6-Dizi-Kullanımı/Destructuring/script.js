//Arrays in ES6
const boxes = document.querySelectorAll('.box');

let boxesES5 = Array.prototype.slice.call(boxes);

// //ES5
// boxesES5.forEach(function(box) {
//     box.style.backgroundColor = 'green';
// });

//ES6

// Array.from(boxes).forEach(box => {
//     box.style.backgroundColor = 'green';
// })

//ES5
// for(let i=0; i<boxesES5.length ; i++){
//     if(boxesES5[i].className == 'box blue'){
//         continue;
//     }
//     boxesES5[i].textContent = "I'm changed";
//     boxesES5[i].style.backgroundColor = "blue";
// }

//ES6

// var boxesES6 = Array.from(boxes);

// for (let box of boxesES6){
//     if(box.className == 'box blue'){
//         continue;
//     }
//     box.textContent = "I'm changed.";
//     box.style.backgroundColor = 'blue';
// }

// let arr = Array.from('Modern Javascript');

// const product = [
//     {name : 'Samsung S8' , price: 3000},
//     {name : 'Samsung S8' , price: 2000},
//     {name : 'Samsung S8' , price: 1000}
// ]

// console.log(Array.from(product,prd => prd.name));

let numbers = ['a','b','c'];

let entries = numbers.entries();

for(let i of entries){
    console.log(i);
}

let keys = numbers.keys();

for(let i of keys){
    console.log(i);
}
let values = numbers.values();

for(let i of values){
    console.log(i);
}