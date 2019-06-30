'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('pop works as expected', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.pop();
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
    stuff.pop();
    expect(stuff.length).toEqual(1);
  });
 
  it ('takes in a callback function and runs that function over each element in the array', () => {
    let stuff = new List();
    stuff.push(1);
    stuff.push(2);
    stuff.push(3);
    let newArray = [];
    stuff.forEach(element => {
      let product = element * 10
      newArray.push(product);
    });
    expect(newArray[0]).toEqual(10);
    expect(newArray[1]).toEqual(20);
    expect(newArray[2]).toEqual(30);
  });

  it('removes the first element from position 0 of the array', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    let result = stuff.shift();
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('c');
    expect(stuff.data[2]).toBeUndefined();
    expect(result).toEqual('a');
    stuff.shift();
    expect(stuff.length).toEqual(1);
  });

  it('adds parameters to the beginning positions of an array', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    let result = stuff.unshift('y', 'z');
    expect(stuff.length).toEqual(5);
    expect(stuff.data[2]).toEqual('a');
    expect(result).toEqual(5);
    stuff.unshift('m');
    expect(stuff.length).toEqual(6);
  });

});


