#! user/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number.
// 2) user input for guessing number.
// 3) compare user input with computer generated number and show result.
const randomnum = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt({
    name: "userguestnumber",
    type: "number",
    message: "please guess a number between 1 to 10"
});
if (answers.userguestnumber === randomnum) {
    console.log("congralution! you guessed a right number");
}
else {
    console.log("you guessed wrong number");
}
