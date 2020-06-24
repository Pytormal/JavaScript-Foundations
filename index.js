// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
 */
let M;
var principal = 200000; // principal
var interestRate = 0.05; // interest rate
var years = 30; //years
var name = "AlexAndrew";

// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate.
Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12.
Create another variable called `periods` and give it the value of years*12.
*/
console.log(interestRate);
var monthlyInterestRate = interestRate / 12; // monthlyInterestRate
var periods = years * 12; //periods

// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe (also below) to run calculations on your numbers. Save the final value into a variable called monthlyRate.

M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]

Hint: while these calculations can be done in one line, it might be helpful to create seperate variables to hold parts of your equation. That might look like this:

(1) Create a variable called n1 and set it equal to  (1 + monthlyInterestRate )^N

(2) Create a variable called numerator and set it equal to p * n1 * monthlyInterestRate

(3) Create a variable called denominator and set it equal to n1 - 1

(4) Create a variable called monthlyRate and set it equal to numerator/denominator

Hint #2: you'll need to use the `math` object for parts of this calculation!
When your math is correct, monthlyRate will equal 1073.64
*/

/*M = P[I(1 + I) ^ N] / [(1 + I) ^ N - 1]*/

var numerator =
  monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periods);
var denominator = Math.pow(1 + monthlyInterestRate, periods) - 1;
let monthlyRate = (numerator / denominator) * principal;
monthlyRate = Number(monthlyRate.toFixed(2));

console.log(monthlyRate);

// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"
If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/

let mortgageCalculator = function () {
  let phrase = ", your monthly rate is ";
  console.log(name + phrase + monthlyRate);
};
mortgageCalculator();

// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.
For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/

// let P = principal;
// let I = interestRate;
// let N = periods;


mortgageCalculator = function (P, I, N) {
  var numerator =
    I * Math.pow(1 + I, N);
  var denominator = Math.pow(1 + I, N) - 1;
  let monthlyRate = (numerator / denominator) * P;
  monthlyRate = Number(monthlyRate.toFixed(2));
  console.log(monthlyRate)

};
mortgageCalculator(200000, 0.05 / 12, 30 * 12)




// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).
Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/

mortgageCalculator = function (P, I, N, creditScore = 0 && 800) {
  if (creditScore >= 740) {
    I = I - (0.5 / 100)
    console.log("good credit")
  }
  else if (creditScore <= 660) {
    I = I + (0.5 / 100)
    console.log("poor credit")
  }
  else {
    return I
  }

  I = I / 12
  N = N * 12

  var numerator =
    I * Math.pow(1 + I, N);
  var denominator = Math.pow(1 + I, N) - 1;
  let monthlyRate = (numerator / denominator) * P;
  monthlyRate = Number(monthlyRate.toFixed(0));
  console.log(monthlyRate)
}
mortgageCalculator(200000, 0.05, 30, 670);

//  let mortgageCalculator = function (creditScore) {
//   if (creditScore > 740) {
//   } else creditScore < 660;
//   console.log(creditScore);
// }



// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.
For example, variableInterestRate(200000, 0.04, 30) should console.log:
"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/
const variableInterestRate = function (P, I, N,) {
  interestDisplay = I - 0.02
  I = I - 0.02
  I = I / 12
  N = N * 12

  var numerator =
    I * Math.pow(1 + I, N);
  var denominator = Math.pow(1 + I, N) - 1;
  let monthlyRate = (numerator / denominator) * P;

  monthlyRate =Number (monthlyRate.toFixed(0));
  interestDisplay =Number( interestDisplay.toFixed(3))


  console.log(
    name +
    ", " +
    "with an interest rate of " +
    interestDisplay +
    " your monthly rate is " +
    monthlyRate);

}


let rate = 0.04

for (let i = 0; i < 9; i++) {
  variableInterestRate(200000, rate, 30);
  rate += 0.005
}


// const variableInterestRate = function (P, I, N) {

//   interestDisplay = I - 0.02
//   I = I - 0.02
//   I = I / 12
//   N = N * 12
 

//    numerator =
//     I * Math.pow(1 + I, N);
//    denominator = Math.pow(1 + I, N) - 1;
//   monthlyRate = (numerator / denominator) * P;

//   monthlyRate = Number(monthlyRate.toFixed(0));
//   interestDisplay = Number(interestDisplay.toFixed(3))

//   for (let I = 0.02; I <= 0.06; I += 0.005) {
//     console.log(
//       name +
//       ", " +
//       "with an interest rate of " +
//       interestRate +
//       " your monthly rate is " +
//       monthlyRate
//       );

//     }
 
// };

// variableInterestRate(200000, I, 30);

// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */

/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */

/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */

/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
