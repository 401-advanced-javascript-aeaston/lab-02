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

  it('removes the first element from position 0 of the array', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    let result = stuff.shift();
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('c');
    expect(result).toEqual('a');
    stuff.shift();
    expect(stuff.length).toEqual(1);
  });

});
