'use strict';
const fs = require('fs');

function help() {
  console.log(`
  use node index.js help                 Shows help section.
  use node index.js list                 Shows current to-dos, or shows an appropriate text if there are no to-dos.
  use node index.js add "to Do item"     Adds a to-do item. All the words behind add are entered as 1 to-do item to the list.
  use node index.js remove index         To remove the item at that index.
  use node index.js reset                Removes all to-do items from the list.
  `);
}

function readData() {
  return new Promise(resolve =>
    fs.readFile('data.txt', 'utf8', (err, data) => resolve(err ? '' : data)),
  );
  // let data = fs.readFileSync('data.txt', 'utf8');
  // if (data.length < 1)
  //   console.log("File is empty");
  // else
  //   console.log(data);
}

function writeData(toDoItem) {
  fs.writeFileSync('data.txt', toDoItem + '\n', 'utf8');
}

function addData(toDoItem) {
  fs.appendFileSync('data.txt', toDoItem + '\n', 'utf8');
}

function list() {
  readData().then(data => console.log("To-Dos: \n " + data));
}


function remove(index) {
  let data = fs.readFileSync('data.txt', 'utf8');
  let contentAsList = data.split('\n');
  if (contentAsList.length < 1)
    console.log('There is no content in the the list');
  else if (index > contentAsList.length)
    console.log('The forth argument is not right.');
  else {
    let updatedList = contentAsList.splice(index, 1);
    console.log(contentAsList);
    reset();
    contentAsList.forEach(item => {
      addData(item);
    });
  }
}

function reset() {
  fs.truncateSync('data.txt');
}

const userChoice = process.argv[2];
const userData = process.argv[3];

switch (userChoice) {
  case 'help': help();
    break;
  case 'list': list();
    break;
  case 'add': add(userData);
    break;
  case 'remove': remove(userData);
    break;
  case 'reset': reset();
    break;
  default: console.log("Error: Please use node fileName help section for more info. ");
}


