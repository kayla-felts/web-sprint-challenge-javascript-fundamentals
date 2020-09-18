// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// nestedFunction can access internal because both internal and where nested function is being invoked are within myFunction, so the scope of nested includes internal, closure doesn't actually happen until myFunction is invoked at the bottom so any function created within myFunction would be able to access internal.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
  function summation(num){
    let sum = 0;
    for(i = 1; i <= num; i++){
      sum += i;
    }
    return sum;
  }
  console.log(summation(6))