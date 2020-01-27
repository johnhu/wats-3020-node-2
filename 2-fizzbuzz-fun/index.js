/*
Description: Fizz buzz is a game that helps teach children about division
Input: Any number
Output: All the numbers counted up to that number with the "fizz" and "buzz" numbers marked
Usage: 
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()

function fizzbuzz(n){
// TODO provide for tests for divisible for 3,5, and 15 to return desired output
  if (n % 15 === 0) {
  return "fizzbuzz"
} else if (n % 3 === 0) {
  return "fizz"
} else if (n % 5 === 0) {
  return "buzz"
} else {
  return ""
}
}

// TODO check if input is not an integer
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


