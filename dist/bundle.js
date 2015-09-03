(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./user":2}],2:[function(require,module,exports){
'use strict';

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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2FsbC1icm93c2VyLmpzIiwiZGlzdC91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgQW5pbWFsID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQW5pbWFsKG5hbWUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5pbWFsKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQW5pbWFsLCBbe1xuICAgIGtleTogJ3dhbGsnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3YWxrKCkge1xuICAgICAgY29uc29sZS5sb2coJ0kgd2FsazogJyArIHRoaXMubmFtZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFuaW1hbDtcbn0pKCk7XG5cbnZhciBSYWJiaXQgPSAoZnVuY3Rpb24gKF9BbmltYWwpIHtcbiAgX2luaGVyaXRzKFJhYmJpdCwgX0FuaW1hbCk7XG5cbiAgZnVuY3Rpb24gUmFiYml0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYWJiaXQpO1xuXG4gICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmFiYml0LnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmNhbGwodGhpcywgJ1JhYmJpdCAxJyk7IC8vIHNhbWUgQW5pbWFsLmNhbGwodGhpcywgJ1JhYmJpdCAxJylcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSYWJiaXQsIFt7XG4gICAga2V5OiAnd2FsaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdhbGsoKSB7XG4gICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihSYWJiaXQucHJvdG90eXBlKSwgJ3dhbGsnLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgY29uc29sZS5sb2coJy4uLmFuZCBqdW1wIScpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSYWJiaXQ7XG59KShBbmltYWwpO1xuXG5uZXcgUmFiYml0KCkud2FsaygpO1xuXG5cbnZhciBpbmMgPSBmdW5jdGlvbiBpbmMoeCkge1xuICByZXR1cm4geCArIDE7XG59O1xuXG5jb25zb2xlLmxvZyhpbmMoMSkpOyAvLyAyXG5cbnZhciBzdW0gPSBmdW5jdGlvbiBzdW0oYSwgYikge1xuICByZXR1cm4gYSArIGI7XG59O1xuXG5jb25zb2xlLmxvZyhzdW0oMSwgMikpOyAvLyAzXG5cbnZhciBnZXRUaW1lID0gZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICB2YXIgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gIHZhciBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gIHJldHVybiBob3VycyArICc6JyArIG1pbnV0ZXM7XG59O1xuXG5jb25zb2xlLmxvZyhnZXRUaW1lKCkpOyAvLyBjdXJyZW50IHRpbWVcblxudmFyIGFyciA9IFs1LCA4LCAzXTtcblxudmFyIHNvcnRlZCA9IGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBhIC0gYjtcbn0pO1xuXG5jb25zb2xlLmxvZyhzb3J0ZWQpOyAvLyAzLCA1LCA4XG5cblxudmFyIG1hcmtlZDAkMCA9IFtnZW5lcmF0ZVNlcXVlbmNlXS5tYXAocmVnZW5lcmF0b3JSdW50aW1lLm1hcmspO1xuZnVuY3Rpb24gZ2VuZXJhdGVTZXF1ZW5jZSgpIHtcbiAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIGdlbmVyYXRlU2VxdWVuY2UkKGNvbnRleHQkMSQwKSB7XG4gICAgd2hpbGUgKDEpIHN3aXRjaCAoY29udGV4dCQxJDAucHJldiA9IGNvbnRleHQkMSQwLm5leHQpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgY29udGV4dCQxJDAubmV4dCA9IDI7XG4gICAgICAgIHJldHVybiAxO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIGNvbnRleHQkMSQwLm5leHQgPSA0O1xuICAgICAgICByZXR1cm4gMjtcblxuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gY29udGV4dCQxJDAuYWJydXB0KCdyZXR1cm4nLCAzKTtcblxuICAgICAgY2FzZSA1OlxuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgcmV0dXJuIGNvbnRleHQkMSQwLnN0b3AoKTtcbiAgICB9XG4gIH0sIG1hcmtlZDAkMFswXSwgdGhpcyk7XG59XG5cbi8vIGdlbmVyYXRvciBmdW5jdGlvbiBjcmVhdGUgZ2VuZXJhdG9yXG52YXIgZ2VuZXJhdG9yID0gZ2VuZXJhdGVTZXF1ZW5jZSgpO1xuXG52YXIgb25lID0gZ2VuZXJhdG9yLm5leHQoKTtcbmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9uZSkpOyAvLyB7dmFsdWU6IDEsIGRvbmU6IGZhbHNlfVxuXG52YXIgdHdvID0gZ2VuZXJhdG9yLm5leHQoKTtcbmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHR3bykpOyAvLyB7dmFsdWU6IDIsIGRvbmU6IGZhbHNlfVxuXG52YXIgdGhyZWUgPSBnZW5lcmF0b3IubmV4dCgpO1xuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhyZWUpKTsgLy8ge3ZhbHVlOiAzLCBkb25lOiB0cnVlfVxuXG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91c2VyID0gcmVxdWlyZSgnLi91c2VyJyk7XG5cbnZhciBfdXNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91c2VyKTtcblxudmFyIHVzZXIxID0gbmV3IF91c2VyMlsnZGVmYXVsdCddKCdWYXN5YScpO1xudXNlcjEuaGVsbG8oKTtcblxuXG4vLyBJbnRlcnBvbGF0ZSB2YXJpYWJsZSBiaW5kaW5nc1xudmFyIG5hbWUgPSAnQm9iJyxcbiAgICB0aW1lID0gJ3RvZGF5JztcbnZhciBncmVldGluZyA9ICdIZWxsbyAnICsgbmFtZSArICcsIGhvdyBhcmUgeW91ICcgKyB0aW1lICsgJz8nO1xuXG5jb25zb2xlLmxvZyhncmVldGluZyk7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgVXNlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFVzZXIobmFtZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVc2VyKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVXNlciwgW3tcbiAgICBrZXk6ICdoZWxsbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhlbGxvKCkge1xuICAgICAgY29uc29sZS5sb2coJ0hpLCBJIGFtICcgKyB0aGlzLm5hbWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBVc2VyO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVXNlcjtcbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWxsLWJyb3dzZXIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBVc2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVXNlcihuYW1lKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFVzZXIpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhVc2VyLCBbe1xuICAgIGtleTogJ2hlbGxvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGVsbG8oKSB7XG4gICAgICBjb25zb2xlLmxvZygnSGksIEkgYW0gJyArIHRoaXMubmFtZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFVzZXI7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBVc2VyO1xuO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107Il19
