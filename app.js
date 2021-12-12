const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0];
const github = profileDataArgs[1];
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

const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};
// console.log(name, github);
// console.log(generatePage(name, github));

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});