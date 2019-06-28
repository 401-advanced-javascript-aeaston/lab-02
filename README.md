# LAB 

## Project Name - Lab-01

### Author: Adrienne, with some mob programming with class for setup

### Links and Resources
* [submission PR](https://github.com/401-advanced-javascript-aeaston/lab-02/pull/2)
* [travis][![Build Status](https://travis-ci.com/401-advanced-javascript-aeaston/lab-02.svg?branch=master)](https://travis-ci.com/401-advanced-javascript-aeaston/lab-02)

* [back-end](http://xyz.com) (when applicable)
* [front-end](http://xyz.com) (when applicable)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments)

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events


# README.md instructions





# LAB: Classes, Inheritance, Functional Programming

[![Build Status](https://travis-ci.com/401-advanced-javascript-aeaston/lab-02.svg?branch=master)](https://travis-ci.com/401-advanced-javascript-aeaston/lab-02)

## Before you begin
Refer to *Getting Started* in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup instructions

### Getting Started: Objects and Classes
In the `objects` folder, there is a full implementation of a Car and Motorcycle object created using a constructor function, with an index.js file that you can use to visually play with the objects as well as tests.

In the `objects/__tests__` folder, you'll find a file called `vehicle.test.js` that tests the implementation of both a `Car` and a `Motorcycle` using the constructor pattern.

## Requirements
#### Part 1: Vehicles
* Implement both `Car` and `Motorcycle` using a Javascript `Class` (in the `vehicle-class.js` file)
* Implement both `Car` and `Motorcycle` using a Javascript `Factory Function` (in the `vehicle-factory.js` file)
* The tests are pre-configured to run only the constructor variety, but can handle more as you add them.

 **Software Engineering Note!** *This is the heart of a refactor -- re-implement the same functionality, the same signature, and the same I/O while completely rewriting the underlying implementation*

---

#### Part 2: List Module
  * Create a new folder in the lab directory called `list` to house your code for this assignment
  * implement a full List constructor using a **constructor function**
  * implement the `.length` property
  * implement the following methods on the list constructor
    * `push()`
    * `pop()`
    * `shift()`
    * `unshift()`
    * `forEach()`
  * Do not use any built-in array methods to do this
  
  * **Re-Implement using a Class definition**
    * Do this after your tests are complete
    * This should be a refactor: your tests should remain unchanged and green once your re-implementation is completed
  
## Testing
##### Vehicles
* The tests are already written 
* Not all implementations are wired, however
* Keep the tests working as you add new implementations

##### List Module
* tests that ensure the list module functions correctly with error-check parameters
* tests that the correct errors are thrown with invalid arguments exist
* tests to ensure that the list module functions return the correct results when invoked with valid arguments

## Stretch Goal:
##### Vehicles
* Repeat the process in all directions
  * Empty out your constructor and factory implmentations, keeping only the `class` for reference
  * Implement `constructor` and `factory` again
  * Repeat again, this time using only the `factory` as a starting point and clearing the others.
  
**Software Engineering Notes!** *Why repeat the process? Knowing how to easily move between object creation patterns is essential. You'll be doing quite a bit of this, so it's good to not only recognize but work the various patterns seen here*

##### List Module
  * Implement these methods as well
    * `map()`
    * `filter()`
    * `reduce()`
    * `slice()`
    * `splice()`
    * `reverse()`


### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
