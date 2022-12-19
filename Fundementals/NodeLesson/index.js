// Running your code using node
//  1. Use the command `node fileName.fileExtension`
//      This will run the code in the file specified
//      The output will only appear in the terminal you 
//      ran the command in and any other files the code may have specified
//      
console.log("Hello World")

//  2. As mentioned above the you can you can affect other files when running your
//      code. Below is a method to write text to another file. One of the things
//      you should change is the path to the file you're writing to since your
//      computer probably isn't called the same as mine. You can change the content of
//      the content variable to change what is written to the file.
// 
//      FS
//      FS stands for file system and is a node module you can use to make interacting 
//      with the file system more easily.
// 
//      Explaining Try Catch
//      You can put your code in a try catch to get information from an error if your
//      code fails. The code will run in your try section and will only run the code
//      in your catch if there is an error with your code within the try block.
//      

const fs = require('fs/promises');

async function example() {
  try {
    const content = 'Hello World!';
    await fs.writeFile('/Users/jason/Downloads/Coding Club Lessons/NodeLesson/index.txt', content);
  } catch (err) {
    console.log(err);
  }
}
example();

// Talk about front-end and backend