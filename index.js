let userInput = prompt("Enter your age");
let age = parseInt(userInput);
if (age >= 18 && age <= 80) {
    let option = prompt("Do you want to vote for a president or a congressman?");
    if (option === "president") {
        let person = prompt("who do you want to vote for? Hasina or Khalida", "killer Hasina");
        confirm("Are you sure you want to vote?  " + person);
        alert("You have successfully voted for " + person)
        console.log(`age:  ${age}`);
        console.log(option);
        console.log(person);
    }
    else if (option === "congressman") {
        alert("Sorry you can't vote for a congressman")
    }
} else {
  alert("You are not old enough to vote");
}