function analyzeSentence(sentence) {
    let length = 0;  // Length of the sentence
    let words = 0;   // Number of words
    let vowels = 0;  // Number of vowels
    let inWord = false;  // Flag to track if we're inside a word
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        // Increment the length for each character
        length++;

        // Check if the character is a vowel
        if (vowelSet.has(char)) {
            vowels++;
        }

        // Check if the character is a space
        if (char === ' ') {
            if (inWord) {
                words++;
                inWord = false;
            }
        } else if (char === '.') {
            // End of the sentence; close the last word if necessary
            if (inWord) {
                words++;
            }
            break;  // Stop processing further characters
        } else {
            // It's a character that belongs to a word
            inWord = true;
        }
    }

    // Return the results
    return {
        length: length,
        words: words,
        vowels: vowels
    };
}
 
// Example usage:
let sentence = "This is an example sentence.";
let result = analyzeSentence(sentence);
console.log(`Length: ${result.length}`);
console.log(`Words: ${result.words}`);
console.log(`Vowels: ${result.vowels}`);    