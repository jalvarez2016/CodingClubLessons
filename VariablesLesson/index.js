// Javascript has 3 types of variables you can use
//  var
//  const
//  let

var customName = 0;
const anotherName = 0;
let otraNombre = 0;

// for now, the I'll explain the difference between const and the
// other 2 variable types. Const variables can't be reassigned 
// whereas let and var can. You can reassign a variableslike this:
customName = 1;

// Where if I try to reassign const, it gives me an error when I run `node index.js`.
// If you want to see that, you can uncomment the code.
// anotherName = 1;

// Variables are names assigned to bits of data
// There are 7 primitive types of data that are assigned to them 
// The most common types are
//  * Number
const numberVariable = 15321;
//  * String
const stringVariable = 'Hello world';
//  * Boolean
const boolVariable = true;

// The other 4 are:
//  * bigInt
const bigIntVariable = BigInt('1235313');
//  * symbol
const symbolVariable = Symbol('unique value');
//  * null
const nullVariable = null;
//  * undefined
const undefinedVariable = undefined;

// There are 2 more main data types:
//  * Object
const objectExample = {
    name: "Jason",
    age: 21,
    company: "Sqsp"
};
//  * Array
const coworkers = [ 'Collin', 'Brian', 'Luc', 'Dzheni', 'Azat', 'David', 'Lissett', 'Ryan', 'Jasmine'];

// These data types are vital for building complex structures since they can be combined with one another and
// create associates that would otherwise be immpossible.
const objectContainingArrays = {
    team: coworkers, //within objects and arrays we use commas to seperate lines
    languages: [
        'Javascript',
        'Python',
        'Typescript',
        'Postgres',
        'HTML',
        'CSS', 
        'React', 
        'Redux', 
        'Spanish', 
        'English', 
        'c++',
        'c#',
        'gdscript' //most languages have the same rules so it's usely just a bunch of translation
    ],
    daysInTheOffice: [],
    hobbies: getHobbies()
};

console.log(objectContainingArrays);

function getHobbies() {
    const hobbies = [];
    hobbies.push('art', 'animtaion', 'game dev', 'coding')
    return hobbies;
}

// Functions
// Functions are bodies of code that can be run all at once.
// They provide readibility to your code and allow you to reduce the amount of repeated code you have to write.
// ie. You're getting a users name off their email and password. It would be much easier to read and write if you had a function you could give the email
// and password to that would return you the user related data you needed.

// To use functions, you must first declare them in one of the following ways
// you can replace functionName with whatever name is best suited for the situation
function functionName () {
    return;
}

const functionName2 = () => {
    return;
}

// If you have a value you'd like to return place it after the return but before the semicolon (;)
// otherwise, you'll just get an undefined

// The code within functions does not run automatically though. You have to call the function in order to get it to run.
// You call a function by using the function name followed by parenthesis. As seen in objectContainingArrays when it calls getHobbies.


function doAction (name = 'people', action = 'try') {
    return `${name} can ${action}`;
}

console.log(doAction("birds", 'fly'));

// Functions can be passed values as seen above.
// When calling a function using values, such as 'birds' and 'fly', the values passed are called aurguements
// The values within the parenthesis in the function declaration are called parameters. In the case you forget to pass
// aurguements in your function call, you can set default parameters by adding `parameterName = value`, otherwise it can
// look like this `function doAction(name, action) {return}`.