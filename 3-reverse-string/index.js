/*
Description: This program will look for a string argument and will display a message showing the format of the command if it doesn't find one.
Input: The input is a string
Output: The string reversed
Usage: node 3-reverse-string <string>
*/

// get input using getargs
const getargs = require("../modules/getargs");
let input = getargs.getStringArg();


//test that it is a string
if (!input) {
    console.log("usage: node 3-reverse-string <string>");
}

else {
    // uses string methods to reverse the string
    console.log(input.split('').reverse().join(''));
}




