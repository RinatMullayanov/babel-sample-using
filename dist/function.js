'use strict';

var inc = function inc(x) {
  return x + 1;
};

console.log(inc(1)); // 2

var sum = function sum(a, b) {
  return a + b;
};

console.log(sum(1, 2)); // 3

var getTime = function getTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  return hours + ':' + minutes;
};

console.log(getTime()); // current time

var arr = [5, 8, 3];

var sorted = arr.sort(function (a, b) {
  return a - b;
});

console.log(sorted); // 3, 5, 8