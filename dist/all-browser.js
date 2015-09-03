'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Animal = (function () {
  function Animal(name) {
    _classCallCheck(this, Animal);

    this.name = name;
  }

  _createClass(Animal, [{
    key: 'walk',
    value: function walk() {
      console.log('I walk: ' + this.name);
    }
  }]);

  return Animal;
})();

var Rabbit = (function (_Animal) {
  _inherits(Rabbit, _Animal);

  function Rabbit() {
    _classCallCheck(this, Rabbit);

    _get(Object.getPrototypeOf(Rabbit.prototype), 'constructor', this).call(this, 'Rabbit 1'); // same Animal.call(this, 'Rabbit 1')
  }

  _createClass(Rabbit, [{
    key: 'walk',
    value: function walk() {
      _get(Object.getPrototypeOf(Rabbit.prototype), 'walk', this).call(this);
      console.log('...and jump!');
    }
  }]);

  return Rabbit;
})(Animal);

new Rabbit().walk();


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


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var user1 = new _user2['default']('Vasya');
user1.hello();


// Interpolate variable bindings
var name = 'Bob',
    time = 'today';
var greeting = 'Hello ' + name + ', how are you ' + time + '?';

console.log(greeting);


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var User = (function () {
  function User(name) {
    _classCallCheck(this, User);

    this.name = name;
  }

  _createClass(User, [{
    key: 'hello',
    value: function hello() {
      console.log('Hi, I am ' + this.name);
    }
  }]);

  return User;
})();

exports['default'] = User;
;
module.exports = exports['default'];
//# sourceMappingURL=all-browser.js.map