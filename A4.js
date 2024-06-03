"use strict";
// Assignment No-4:
// ***Exploring Objects with for...in Loop***
// Objective: Practice working with objects in TypeScript and iterating over their properties using a for...in loop.
// Instructions:
// 1. Create a simple object with three items:
// o Define an object called myObject with three properties: item1, item2, and item3, each with corresponding string values.
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Use a for...in loop to get properties' names and values from the object:
// o Iterate through the properties of myObject using a for...in loop.
// o Inside the loop, print each property's name and its corresponding value to the console.
// Answer:
// 1. Create a simple object with three items:
let myObject = {
    item1: "item1",
    item2: "item2",
    item3: "item3"
};
// 3. Use a for...in loop to get properties' names and values from the object:
for (let key in myObject) {
    // console.log(key);
    console.log(key, myObject[key]);
}
