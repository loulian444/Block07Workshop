/* write  this in a string: "You have received this message because you have been chosen to open an important vault. 
Here is the secret combination:" */
// pick 3 arithmetic operators: probably +, -, *. try % tho
// 472 - 66 * 7
// (378 + 22) / 10
// 556 % 47

const str =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// 66 times 7 first, then subtract the multiple from 472
const pw1 = 472 - 66 * 7;

// add 378 and 22, then divide the sum by 10
const pw2 = (378 + 22) / 10;

// divide 556 by 47, the number is your remainder
const pw3 = 556 % 47;

alert(str);
// make them work for the code a bit. hope they don't skip
prompt("First Code:" + " 472 - 66 * 7");
prompt("Second Code:" + " (378 + 22) / 10");
prompt("Third Code:" + " 556 % 47");
// give some useless dialog
confirm("Did you remember the codes?");
alert("Welp I hope you did. Good Luck!!");
// give answer
alert("JK here's the code in case you didn't get it:")
alert(pw1 + " - " + pw2 + " - " + pw3);
