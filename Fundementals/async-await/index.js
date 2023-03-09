// ASYNC

// An async function in javascript returns a promise instead of a proper response
// A promise is a bit of code that takes time to return a proper value (such as a number) due to the natural delay in retrieving data
// In the function below we use the keyword async because we are communicating with an api across the internet and communications like that take time
//  since they aren't saved locally and have to be retrieved


// AWAIT

// The keyword await can only be used in an async function. Await is intended to be used on promises, which are lines of code that take time to retrieve data.
// Using the key word await tells the async function to wait until the repsonse comes back before moving onto the next line of the function.
// In the case below we have to use it twice:
//      * once to make an api call to the weather api
//      * and again to convert the data into a more readable format, json

// JSON (pronounced jay-s-on)

// JSON is the universally agreed upon way to format data when communicating across the internet. Usually when making a call to an api on the internet, you'll need to
//  run a .json() on it.


// How to incorporate an async function

// So, I suggest pushing any api calls you have in your functions into their own functions. Then make those functions into async function in the format of the getWeather() function
// below. Then call the function in wherever you need the data from the api. Since it will return a promise, you'll need to use a .then() callback to use the data after the promise
// returns the expected value. A callback is a function you pass to another function or method. In this case, the async function you've written should have a return that will supply
// us a parameter for the .then() callback. Understanding that, you should understand that the code will not run the .then() immediately, it will run everything after it first and then
// come back to the .then() callback. So, make sure you implement whatever logic you need inside the .then() that relies on the api data and whatever doesn't outside of it.

async function getWeather() {
    let data = await fetch('http://api.weatherapi.com/v1/current.json?key=41a0005e88c8423dbe5221451220705&q=NYC&aqi=no');
    let json = await data.json();
    console.log(json);
    return json.current.condition.text;
}

function main() {
    getWeather().then((weatherInfo) => {
        console.log(weatherInfo);
        // Do things
    });
}