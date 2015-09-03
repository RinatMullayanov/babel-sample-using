'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    alert("I walk: " + this.name);
  }
}

class Rabbit extends Animal {
  constructor() {
    super("Rabbit 1"); // same Animal.call(this, "Rabbit 1")
  }

  walk() {
    super.walk();
    alert("...and jump!");
  }
}

new Rabbit().walk();