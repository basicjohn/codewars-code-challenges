// DESCRIPTION:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// My solution:

function rot13(message){
    let output = [];
    const splitMessage = message.split('')

    splitMessage.map((character) => {
        let characterCode = character.charCodeAt();
        //   Lowercase check
        if (characterCode <= 122 && characterCode >= 97 ) {
            characterCode = characterCode + 13;
            // check if character is outside lowercase range  if so then wrap back to 'a'
            ((characterCode - 122) > 0 ) ? output.push(String.fromCharCode(characterCode - 122 + 96)) : output.push(String.fromCharCode(characterCode));
        }
        //   Uppercase check
        else if (characterCode <= 90 && characterCode >= 65) {
            characterCode = characterCode + 13;
            // Check if character is outside uppercase range if so then wrap back to 'A'
            ((characterCode - 90) > 0 ) ? output.push(String.fromCharCode(characterCode - 90 + 64)) : output.push(String.fromCharCode(characterCode));
        }
        // Pass all other characters through
        else output.push(String.fromCharCode(characterCode));
    });
    return output.join('');
}