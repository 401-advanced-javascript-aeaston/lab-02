'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

// interates through the whole array

List.prototype.forEach = function () {
  for (let i = 0; i < this.length; i++) {
    return this.data[i];
  }
};

// removes first item from beginning of array

List.prototype.shift = function() {
  let returnValue = this.data[0];
  delete this.data[0];
  this.length--;
  return returnValue;
}

// adds an element or more to teh beginning of an array

List.prototype.unshift = function(...item) {
  for (let i = 0; i < item.length; i++) {
    this.data[0] = item;
    this.length++;
  }
};



module.exports = List;
