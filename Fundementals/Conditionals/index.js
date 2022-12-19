// What are conditionals?
// in programming, the simpliest way to describe it is
// if this condition is true -> do this
// else -> do this other thing

// Here's an example of how it works
function hasPermissionToGoogleDoc(person) {
    if (person.hasPermission) {
        console.log("This person has permission");
    } else {
        console.log("This person does not have permission");
    }
};

const Jason = {
    hasPermission: false, //changing this to true will console.log "This person has permission" 
};

// hasPermissionToGoogleDoc(Jason);


// In the case you have other conditions you need to consider, you can add them using `else if` but the order matters

if (Jason.hasPermission) {
    console.log("This person has permission");
} else if (!Jason.name) { //Jason does not have a name property at this point
    console.log("This person does not have a name");
} else {
    console.log('Jason does not have permission and has a name');
}

// There are ways to shorten this though, in case you think all the characters make it a little annoying to read through
// You can use a ternary operator


function hasPermissionTernaryToGoogleDoc(person) {
    console.log(
        person.hasPermission ?
            "Person has permission":
            "Person does not have permission"
    );
};

const JasonClone = {
    name: 'Jason',
    hasPermission: false,
};

hasPermissionTernaryToGoogleDoc(JasonClone);


// * String Interperlation
// If you want to use a variable value within a string, such as a character name, you can add it using this method

console.log(`The name of JasonClone is ${JasonClone.name}`);

// * String Concatination
// Concatination is when you string values together

console.log("JasonClones name is " + JasonClone.name + ".");

// Exercise
// https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript