// Loops are code blocks that we can run mulptile times
// Be careful though since they can be made to go on forever, which will eventually crash your computer
//  note: Some virus function off a similiar concept

// There are 2 ways to make your own loop with custom boundaries
// 1. The for loop
// For loops have 3 parts
// * new variable declaration
// * condition
// * variable increment

function loopExample() {
    for (i =0; i < 10; i++) {
        console.log(i);
    }
}

// loopExample();

// Run `node Loops/index.js`

// 2. The while loop
// While loops have 1 condition that you have to move closer to in some way or it will continue to run 'forever'

function whileExample() {
    let i = 0;
    while (i < 10) {
        console.log(i);
        i += 1;
    }
}

// whileExample();

// There are also loops built into some data types like arrays and objects
// There are also ways to create your own abstract data types that you can structure to be interable, linked lists

function arrayLoop() {
    const array = [0,1,2,3,4,5,6,7,8,9];
    // forEach is a built in method to an array type
    array.forEach((i) => {
        console.log(array[i]);
    });
    // Other built in methods you can use are listed here
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
}

// arrayLoop();

// You can iterate through an object like this
function objectIteration() {
    const object = { a: 1, b: 2, c: 3 };

    for (const property in object) {
        console.log(`${property}: ${object[property]}`);
    }

}

objectIteration();