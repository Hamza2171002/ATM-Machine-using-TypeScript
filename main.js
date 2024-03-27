#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 3456;
let pinAnwer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number"
});
if (pinAnwer.pin === myPin) {
    console.log("Correct pin code");
    let operationAnwer = await inquirer.prompt([{
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }]);
    if (operationAnwer.operation === "withdraw") {
        let amountAnwer = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAnwer.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
    else if (operationAnwer.operation === "check balance") {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin code");
}
