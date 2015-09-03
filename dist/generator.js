'use strict';

var marked0$0 = [generateSequence].map(regeneratorRuntime.mark);
function generateSequence() {
  return regeneratorRuntime.wrap(function generateSequence$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return 1;

      case 2:
        context$1$0.next = 4;
        return 2;

      case 4:
        return context$1$0.abrupt('return', 3);

      case 5:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

// generator function create generator
var generator = generateSequence();

var one = generator.next();
console.log(JSON.stringify(one)); // {value: 1, done: false}

var two = generator.next();
console.log(JSON.stringify(two)); // {value: 2, done: false}

var three = generator.next();
console.log(JSON.stringify(three)); // {value: 3, done: true}