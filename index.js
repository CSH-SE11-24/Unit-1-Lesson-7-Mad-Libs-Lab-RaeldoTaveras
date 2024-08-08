// Console log a welcome message with instructions to mad libs
let welcomeback = "welcome"


// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let user = prompt("put in a color")
let user1 = prompt("put in a noun/is a thing")
let user2 = prompt("put in a verb/action that is happening")
let user3 = prompt("put in a word that describes nouns")
// Create an array that stores the values the user entered

let array = [user,user1,user2,user3]

// Console log the story with the array values passed into the blanks
console.log(array)
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive

console.log("in a small",array[0],"school in the bronx,there was a problem with too many",array[1],"these",array[2],"loved to",array[3],"which cauased Mr.P so many headaches.However, no one wanted to remove them because they were too",[4],"so they stayed there forever.")






