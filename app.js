const fs = require('fs');
const generatePage = require('./src/page-template.js')
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;
// const profileDataArgs = process.argv.slice(2);

// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
//     name: 'Lernantino',
//     age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';
// Notice the lack of parentheses around the `profileDataArr` parameter?
//  const printProfileData = profileDataArr => {
//      // This...
//      for (let i = 0; i < profileDataArr.length; i += 1) {
//          console.log(profileDataArr[i]);
//      }

//      console.log('q================P');

//      // Is the same as this...
//      profileDataArr.forEach(profileItem => console.log(profileItem));
//  };
//  printProfileData(profileDataArgs);

//  const message = 'Hello Node!';

//  if (true === true) {
//      const message = 'Hello ES6!';
//      let sum = 5;
//      sum += 10;
//      console.log(message);
//      console.log(sum);
//  }

//  console.log(message);
//  console.log(sum);


// console.log(name, github);
// console.log(generatePage(name, github));

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});