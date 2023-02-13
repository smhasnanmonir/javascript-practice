// Task 1
function mindGame(number) {
  let sum = 0;
  if (typeof number == "number" && number > 0) {
    sum = (number * 3 + 10) / 2 - 5;
    return sum;
  } else {
    return "Please enter a positive integer";
  }
}
console.log(mindGame(5));
console.log(mindGame(50));
console.log(mindGame(33));

// Description : mindGame function will take an input.
// If the input is a positive integer than the function will multiply it by 3 then add 10 and then divide it by 2 and subtract 5 from it and return the value
// If the input is anything other than positive integer than it will ask user to input a positive integer.

// Task 2
function evenOdd(stringInput) {
  if (typeof stringInput == "string") {
    if (stringInput.length % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  } else {
    return "Please input a string";
  }
}

console.log(evenOdd("Phero"));
console.log(evenOdd("Batch7"));
console.log(evenOdd("chatgpt"));
console.log(evenOdd(13));

// Description : evenOdd function will take an input
// If the input is a string than it will find out the length the string and return 'even' or 'odd' based on the number of letter the string have
// If the input anything other than string than it will return "Please input a string"

//Task3
function isLGSeven(number) {
  let sum = 0;
  if (typeof number == "number") {
    sum = number - 7;
    if (sum < 7) {
      return sum;
    } else {
      return number * 2;
    }
  } else {
    return "Please enter a valid number";
  }
}
console.log(isLGSeven(6));
console.log(isLGSeven(-15));
console.log(isLGSeven(15));
console.log(isLGSeven("cat"));

// Description : evenOdd function will take an input
// If the input is a number then the function will subtract 7 from that number
// If the value after subtraction is less than 7 then it will return sum and will return double the amount of input value otherwise.
// If the input anything other than string than it will return "Please input a string"

//Task4
function findingBadData(inputArry) {
  let negative_value = 0;
  if (Array.isArray(inputArry) == true) {
    for (let i = 0; i <= inputArry.length; i++) {
      if (inputArry[i] < 0) {
        negative_value += 1;
      }
    }
    return negative_value;
  } else {
    return "Please give an Array as an input";
  }
}
console.log(findingBadData([1, 2, 5]));
console.log(findingBadData([2, -5, -7, -13]));
console.log(findingBadData([-4, -9, -5, -33, -55]));
console.log(findingBadData("cat"));

// Description : findingBadData function will take an input
// If the input is an array than it will check how many negative values are in the array and return how many negative values are there.
// If the input anything other than an array than it will return "Please give an Array as an input"

//task5
function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {
  let totalDiamond =
    firstFriendGem * 21 + secondFriendGem * 32 + thirdFriendGem * 43;
  if (
    typeof firstFriendGem == "number" &&
    typeof secondFriendGem == "number" &&
    typeof thirdFriendGem == "number"
  ) {
    if (totalDiamond > 1000 * 2) {
      totalDiamond = totalDiamond - 2000;
      return totalDiamond;
    } else {
      return totalDiamond;
    }
  } else {
    return "Please give three valid integer as input";
  }
}

console.log(gemsToDiamond(1, 1, 1));
console.log(gemsToDiamond(20, 200, 50));
console.log(gemsToDiamond(100, 5, 1));
console.log(gemsToDiamond("cat", "dog", "cow"));

// Description : gemsToDiamond function will take three inputs
// If the inputs are numbers than the function will calculate the number of Diamonds.
// If the number of Diamond is greater than 2000 than it will subtract 2000 from the value of total diamond and will return the value
// If If the number of Diamond is less than 2000 than it will return the main value without subtracting anything.
// If the input anything other than an array than it will return "Please give three valid integer as input"
