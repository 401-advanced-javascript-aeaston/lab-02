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
 
  it ('takes in a callback function and interates that function over each element in the array', () => {
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

  it('takes a function and iterates that function over each element of an array creating a new array', () => {
    let stuff = new List();
    stuff.push(1);
    stuff.push(2);
    stuff.push(3);
    let newList = stuff.map(element => {
      return element * 10;
    });
    expect(newList).toBeInstanceOf(List);
    expect(newList.length).toEqual(3);
    expect(newList[0]).toEqual(10);
    expect(newList[1]).toEqual(20);
    expect(newList[2]).toEqual(30);
  });
  //

  it('returns a new array with elements filtered from the original array based on the provided function/parameter', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
  });

  it('returns a single output value based on the application of a reducer function each element in the array ', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
  });

});


