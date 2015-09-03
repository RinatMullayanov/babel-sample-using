'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log('I walk: ' + this.name);
  }
}

class Rabbit extends Animal {
  constructor() {
    super('Rabbit 1'); // same Animal.call(this, 'Rabbit 1')
  }

  walk() {
    super.walk();
    console.log('...and jump!');
  }
}

new Rabbit().walk();