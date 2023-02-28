// the result of a higher order function to variables. To do this we call a function with a callback function as a parameter.
//Just as in the last challenge, you must call the getTea method and store it in a variable.
//Only this time, you have 2 variables to store 2 seperate sets of data in. You will see that the getTea() 
//function is the same as before, only now it takes in 2 seperate parameters. The first parameter is a function, so we will need to pass in either the
//prepareGreenTea() function or the prepareBlackTea() function, followed by the second parameter numOfCups which can be input as an integer.

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
