// const = a variable that can't be changed
// we use const in place of let if th value is fixed 
// we have to use capital digit while using const with no. and boolean

const PI = 3.14159;
let radius;
let circumference;
radius = window.prompt(`Enter the radius of a circle`);
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);