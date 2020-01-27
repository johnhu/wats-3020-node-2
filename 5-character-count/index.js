/*
Description: The program looks for a string argument and will display the format of the command if none is entered.
Input: A string
Output: A list of all characters appearing in the string with a count for each
Usage: node 5-character-count <string>
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()


//test that it is a string
if (!input || input.length == 0){
console.log(`usage: node 5-character-count <string>`);
}
else {
  let charCount = {};
  let characters = input.split('');
  for (let character of characters){
    if (charCount[character]){
      charCount[character]++;
    } else {
      charCount[character] = 1;
    }
}
let charArr = [];
  for (let character in charCount){
    let newElem = {char:character, count:charCount[character]};
    charArr.push(newElem);
  }

  charArr.sort(function(a,b){
    return a.count - b.count;
})

for (let i=0; i < charArr.length; i++){
  console.log(`${charArr[i].char}: ${charArr[i].count}`);
  }
}

