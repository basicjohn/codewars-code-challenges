// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My solution:

function pigIt(str){
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let output = [];
    let strArr = str.split(' ');

    strArr.map((word)=>(
      specialCharacters.test(word) ? output.push(word) : output.push(`${word.slice(1)}${word.slice(0,1)}ay`)
    ));
    return output.join(" ");
  }