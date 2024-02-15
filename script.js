// List of words that can be edited by the programmer
let words = [
  'argentina', 'australia', 'brazil', 'canada', 'china',
    'egypt', 'france', 'germany', 'india', 'italy',
    'japan', 'kenya', 'mexico', 'netherlands', 'norway',
    'pakistan', 'peru', 'qatar', 'russia', 'spain',
    'sweden', 'thailand', 'turkey', 'ukraine', 'usa',
    'vietnam', 'wales', 'yemen', 'zimbabwe'
];
// chosenword is a randomly picked word from the array above
let chosenword = words[Math.floor(Math.random() * words.length)];
// chosenword_arr is the corresponding array to loop through
let chosenword_arr = chosenword.split(""); // converts string to an array
let userinput = null;
// Array of lowercase letters to check if user guess is a letter or not
let letters = "abcdefghijklmnopqrstuvwxyz";

// word2 comprises the word guessed by the user so far
// word2_arr is an array from word2
let word2_arr = [],
  word2 = "";
let tryCount = chosenword.length + 2;
let eliminatedLetters = [];

// Loop to create a copy of the chosen word and array in word2 and word2_arr
for (let index = 0; index < chosenword_arr.length; index++) {
  word2_arr[index] = "_";
}
word2 = word2_arr.join("");

// Loop to repeatedly prompt the user for guess as long as the word is not completely guessed
while (chosenword != word2 && tryCount > 0) {
  userinput = prompt("Guess a letter (in lowercase) for this word or click Cancel to end the game:\n" + word2_arr + "\nTries Left: " + tryCount + "\nEliminated Letters: " + eliminatedLetters.join(", "));

  // If the user clicks Cancel the userinput has a value of null which would evaluate the condition to a False
  if (userinput) {
    // User input is not null. User wants to continue playing.
    if (userinput.length == 1) {
      // User input is 1 character and validation can proceed
      userinput = userinput.toLowerCase();
      if (letters.indexOf(userinput) >= 0) {
        // User input is a letter and validation can proceed

        if (chosenword_arr.indexOf(userinput) >= 0) {
          // user input is part of the chosen word
          // Loop through the chosen word and mirror the positions onto word2
          for (let index = 0; index < chosenword_arr.length; index++) {
            if (chosenword_arr[index] == userinput) {
              word2_arr[index] = userinput;
            }
          }
          word2 = word2_arr.join("");
        } else {
          // user input is not part of the chosen word
          eliminatedLetters.push(userinput);
          tryCount--;
        }
      } else {
        alert("Invalid input! Please enter a lowercase letter.");
      }
    } else {
      alert("Invalid input! Please enter a single letter.");
    }
  } else {
    break;
  }
}

if (chosenword == word2) {
  alert("Congratulations! You know your food! The word was: " + chosenword);


} else {
  alert("Oops! You ran out of tries. The chosen word was: " + chosenword);
}