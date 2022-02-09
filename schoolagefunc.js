const whichSchool  = function (age) {
    // Your code in here ...    
    if (age<13){
        console.log("You shoud go to elemantry school")
    }else if(age>=13 && age<=18){
        console.log("You should go to secondry school")
    }else
        console.log("Lighthouse Labs")
    }


console.log("I am 18. Which school should I go to?");
console.log(whichSchool(18));
// console.log("I am 8. Which school should I go to?");
// console.log(whichSchool(8));
// console.log("I am 19. Which school should I go to?");
// console.log(whichSchool(19));