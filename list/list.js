'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i]);
    }
  }

  shift() {
    let returnValue = this.data[0];
    delete this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return returnValue;
  }

  unshift(...arr) {
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i + arr.length] = this.data[i];
    }
    for (let i = 0; i < arr.length; i++) {
      this.data[i] = arr[i];
      this.length++;
    }
    return this.length;
  }

  map(callback) {
    let result = new List();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this.data[i])); 
    }
    return result;
  }
  
  filter(callback, thisArg) {
  
  }
  
  reduce(callback, initialValue) {

  }

}

module.exports = List;
