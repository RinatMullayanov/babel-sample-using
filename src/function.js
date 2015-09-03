'use strict';

let inc = x => x+1;

console.log( inc(1) ); // 2


let sum = (a,b) => a + b;

console.log( sum(1, 2) ); // 3

let getTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${hours}:${minutes}`;
};

console.log( getTime() ); // current time

let arr = [5, 8, 3];

let sorted = arr.sort( (a,b) => a - b );

console.log(sorted); // 3, 5, 8