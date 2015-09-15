'use strict';

export default class User {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log('Hi, I am ' + this.name);
  }
};