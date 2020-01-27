/*
Description: Fizz buzz is a game that helps teach children about division
Input: Any number
Output: All the numbers counted up to that number with the "fizz" and "buzz" numbers marked
Usage: Enter a number between 1 and the number of the input
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()

// test that input is a number and exit with error
if (isNaN(input) || !Number.isInteger(input)){
  console.log("usage: node 1-fizzbuzz <integer>");
}
else {
  //iterates from 1 to amount of input
  for (let i = 1; i <= input; i++)
    if (i % 15 == 0) {
      console.log(`${i} fizzbuzz`);
    } else if (i % 5 == 0) {
      console.log(`${i} fizz`);
    } else if (i % 3 == 0) {
      console.log(`${i} buzz`);
    } else {
      console.log(`${i}`);
    }
  }

