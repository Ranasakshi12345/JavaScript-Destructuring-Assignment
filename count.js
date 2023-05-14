
function countWords(text) {
     // This function takes a string as input and splits it into an array of words using the split() method. It then initializes an empty Map and iterates through each word in the array
    const words = text.split(' ');
    const map = new Map();
    // here using for loop
    for (const word of words) {
    // it checks if it already exists in the Map using the has() method
      if (map.has(word)) {
    //  it increments the word's count using the get() and set() methods.
        map.set(word, map.get(word) + 1);
      } 
    // If it doesn't, it adds the word to the Map with a count of 1.
      else {
        map.set(word, 1);
      }
    }
    return map;
  }
const text = "sakshi is a good girl she very nice person.";
const wordCounts = countWords(text);
console.log(wordCounts);

  