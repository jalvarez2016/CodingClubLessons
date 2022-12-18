
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