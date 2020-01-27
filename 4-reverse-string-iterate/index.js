/*
Description: This program will look for a string argument and will display a message showing the format of the command if it doesn't find one.
Input: The input is a string
Output: The string reversed
Usage: node 4-reverse-string-iterate <string>
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()

function reverseWithFullIteration(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str [i];
    }
    return result;
}

function reverseWithHalfIteration(str) {
        let result = []
        //swap characters from back and front
        for (let i = 0; i < str.length / 2; i++) {
            result[i] = str[(str.length - i)]
            result[str.length - i] = str[i]
        }
        return result.join('')
    }

//test that it is a string
if (!input) {
    console.log("usage: node 4-reverse-string-iterate <string>");
}

else {
    // uses string methods to reverse the string
    console.log(input.split('').reverse().join(''));
}
 
console.log("result with half iteration", reverseWithHalfIteration(input));




