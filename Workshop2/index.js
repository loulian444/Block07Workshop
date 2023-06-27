/* write  this in a string: "You have received this message because you have been chosen to open an important vault. 
Here is the secret combination:" */
// pick 3 arithmetic operators: probably +, -, *. try % tho
// 472 - 66 * 7
// (378 + 22) / 10
// 556 % 47

const str =
  "you have received this message because you have been chosen to open an important vault. Here is the secret combination:";


// 66 times 7 first, then subtract the multiple from 472
const pw1 = 472 - 66 * 7;

// add 378 and 22, then divide the sum by 10
const pw2 = (378 + 22) / 10;

// divide 556 by 47, the number is your remainder
const pw3 = 556 % 47;

const codeName = prompt("State your codename:");

alert("Hello, " + codeName + ", " + str);
alert("[472 - 66 * 7] - [(378 + 22) / 10] - [556 % 47]");
// make them work for the code a bit. hope they don't skip
// check their answers after each answer
let pw1a = Number(prompt("First Code:" + " 472 - 66 * 7"));
let checkAns1 = pw1a === pw1;
alert(codeName + ", your answer was: " + checkAns1);

let pw2a = Number(prompt("Second Code:" + " (378 + 22) / 10"));
let checkAns2 = pw2a === pw2;
alert(codeName + ", your answer was: " + checkAns2);

let pw3a = Number(prompt("Third Code:" + " 556 % 47"));
let checkAns3 = pw3a === pw3;
alert(codeName + ", your answer was: " + checkAns3);

// give some useless dialog
confirm("Did you get the codes?");
alert(`Welp ${codeName}, I hope you did. Good Luck!!`);
// give answer
alert("JK here's the correct code in case you didn't get it:")
alert(pw1 + " - " + pw2 + " - " + pw3);

// tell them the sum of all 3 numbers, for some reason?
const sumOf = pw1 + pw2 + pw3;
const sumOf2 = pw1a + pw2a + pw3a;
alert("Let's see how close/far off you were:");
alert("Sum of the correct code: " + sumOf + ". Your sum: " + sumOf2 + ".");
