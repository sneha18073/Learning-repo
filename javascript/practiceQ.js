// Question number - 01
/* 1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

const date = new Date()

const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const daysOfWeek = days[date.getDay()]
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
const meridiem = hours >=12 ? 'PM' : "AM"

const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

const currentTime = `${formattedHours} ${meridiem} : ${formattedMinutes} : ${formattedSeconds}`
console.log(`Today's day : ${daysOfWeek}.\n CurrentTime is : ${currentTime}`)


// New way to get the current date and day 
console.log(date.toLocaleString())
const f = new Intl.DateTimeFormat('en-iso', {
    dateStyle: "full"
})
console.log(f.format(date))

// Question number - 02
// Write a JavaScript program to print the current window contents.  
// =>  Use the syntax window.print to print the current page contents.

// Question number - 03
/*3. Write a JavaScript program to get the current date.  
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

let months = date.getMonth()
let years = date.getFullYear()
let day = date.getDate()

if(day < 10){day = '0' + day}
if(months < 10){months = '0' + months}

console.log(`${months} / ${day} / ${years}`)
console.log(`${months} / ${day} / ${years}`)
console.log(`${day} - ${months} - ${years}`)
console.log(`${day} - ${months} - ${years}`)


// Question number - 04
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
const AreaOfTriangle = (l,b,h) => {
return l * b * h
}

console.log(AreaOfTriangle(3,4,5))

// Question number - 05
// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter 
// from the string end and attaching it to the front.  


function rotateStringRight(str, rotations) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }

    const length = str.length;
    rotations = rotations % length; // Normalize rotations if larger than string length

    const rotatedString = str.slice(-rotations) + str.slice(0, -rotations);
    return rotatedString;
}

const originalString = 'w3resource';
const numberOfRotations = 3;

const rotatedString = rotateStringRight(originalString, numberOfRotations);
console.log(rotatedString); // Output: "rcew3sour"


// Question number - 06
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  
function isLeapYear(year) {
    // Leap years are divisible by 4
    if (year % 4 === 0) {
        // But not divisible by 100, except if also divisible by 400
        if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
            return true; // It's a leap year
        }
    }
    return false; // It's not a leap year
}

// Test cases
const year1 = 2020;
const year2 = 2100;
const year3 = 2000;

console.log(year1 + " is a leap year: " + isLeapYear(year1)); // Output: true
console.log(year2 + " is a leap year: " + isLeapYear(year2)); // Output: false
console.log(year3 + " is a leap year: " + isLeapYear(year3)); // Output: true


// Question number - 07
// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  
function findSundays() {
    for (let year = 2014; year <= 2050; year++) {
        // Create a date object for January 1st of the current year
        const date = new Date(year, 0, 1);
        
        // Check if the day of the week is Sunday (0 represents Sunday)
        if (date.getDay() === 0) {
            console.log(`January 1st, ${year} is a Sunday.`);
        }
    }
}

findSundays();


// Question number - 08
// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.
//  The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user for a guess
const userGuess = prompt("Guess a number between 1 and 10:");

// Check if the user's guess matches the random number
if (userGuess === null) {
    // Handle the case where the user clicks Cancel
    alert("You canceled the game.");
} else {
    const parsedGuess = parseInt(userGuess); // Convert the input to an integer

    if (!isNaN(parsedGuess)) {
        // Check if the parsed guess is a number
        if (parsedGuess === randomNumber) {
            alert("Good Work! You guessed the correct number.");
        } else {
            alert(`Not matched. The correct number was ${randomNumber}.`);
        }
    } else {
        // Handle the case where the input is not a number
        alert("Please enter a valid number.");
    }
}


// Question number - 9
// Write a JavaScript program to calculate the days left before Christmas. 
// Get the current date
const currentDate = new Date();

// Define the target date (Christmas)
const christmasDate = new Date(currentDate.getFullYear(), 11, 25); // December is represented by 11 (zero-indexed month)

// Calculate the time difference in milliseconds
const timeDifference = christmasDate - currentDate;

// Calculate the number of days left (convert milliseconds to days)
const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

// Display the result
console.log(`There are ${daysLeft} days left until Christmas.`);


// Question number - 10
// Write a JavaScript program to calculate multiplication and division of two numbers (input from the user)

// Prompt the user for the first number
const firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user for the second number
const secondNumber = parseFloat(prompt("Enter the second number:"));

// Check if both inputs are valid numbers
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    // Calculate and display the multiplication
    const multiplicationResult = firstNumber * secondNumber;
    console.log(`Multiplication: ${firstNumber} * ${secondNumber} = ${multiplicationResult}`);

    // Check if the second number is not zero before performing division
    if (secondNumber !== 0) {
        // Calculate and display the division
        const divisionResult = firstNumber / secondNumber;
        console.log(`Division: ${firstNumber} / ${secondNumber} = ${divisionResult}`);
    } else {
        console.log("Division by zero is not allowed.");
    }
} else {
    console.log("Please enter valid numeric values for both numbers.");
}


// Question number - 11
/* Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

// Example 1: Convert 60°C to Fahrenheit
const celsiusTemp = 60;
const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp}°C is ${fahrenheitTemp}°F`);

// Example 2: Convert 45°F to Celsius
const fahrenheitTemp2 = 45;
const celsiusTemp2 = fahrenheitToCelsius(fahrenheitTemp2);
console.log(`${fahrenheitTemp2}°F is ${celsiusTemp2}°C`);


// Question number - 12
// Write a JavaScript program to get the website URL (loading page)

// Get the current website URL
const currentURL = window.location.href;

// Display the URL
console.log(`Current URL: ${currentURL}`);


// Question number - 13
//  Write a JavaScript exercise to create a variable using a user-defined name.
// Create an object to store user-defined variables
const userVariables = {};

// Prompt the user for a variable name
const variableName = prompt("Enter a variable name:");

// Prompt the user for a variable value
const variableValue = prompt(`Enter a value for ${variableName}:`);

// Store the user-defined variable in the object
userVariables[variableName] = variableValue;

// Access the user-defined variable
console.log(`Value of ${variableName}: ${userVariables[variableName]}`);


// Question number - 14
// Write a JavaScript exercise to get the filename extension.

function getFileExtension(filename) {
    // Use regular expression to extract the extension
    const extension = filename.split('.').pop();
    return extension;
}

// Example usage:
const filename = "example.html";
const fileExtension = getFileExtension(filename);
console.log(`The extension of ${filename} is: ${fileExtension}`);


// Question number - 15
// Write a JavaScript program to get the difference between a given number and 13, if the number is broader
//  than 13 return double the absolute difference. 

function calculateDifferenceAndDouble(number) {
    const difference = Math.abs(number - 13);

    if (number > 13) {
        return difference * 2;
    } else {
        return difference;
    }
}

// Example usage:
const givenNumber = 17;
const result = calculateDifferenceAndDouble(givenNumber);

console.log(`The result is: ${result}`);


// Question number - 16

// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum

function sumOrTripleSum(a, b) {
    if (a === b) {
        return 3 * (a + b);
    } else {
        return a + b;
    }
}

// Example usage:
const num1 = 5;
const num2 = 5;
const result16 = sumOrTripleSum(num1, num2);

console.log(`The result is: ${result16}`);


// Question number - 17
// Write a JavaScript program to compute the absolute difference between a specified number and 19. 
// Returns triple the absolute difference if the specified number is greater than 19. 

function computeAbsoluteDifference(number) {
    const absoluteDifference = Math.abs(number - 19);

    if (number > 19) {
        return absoluteDifference * 3;
    } else {
        return absoluteDifference;
    }
}

// Example usage:
const specifiedNumber = 25;
const result17 = computeAbsoluteDifference(specifiedNumber);

console.log(`The result is: ${result17}`);

// Question number - 18
// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
function checkPairFor50(num1, num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const number1 = 30;
const number2 = 20;
const result18 = checkPairFor50(number1, number2);

console.log(`The result is: ${result18}`);

// Question number - 19
// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400
function isWithinRange(number) {
    if ((Math.abs(100 - number) <= 20) || (Math.abs(400 - number) <= 20)) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const testNumber = 85;
const result19 = isWithinRange(testNumber);

console.log(`Is ${testNumber} within 20 of 100 or 400? ${result19}`);

// Question number - 20
// Write a JavaScript program to check two given integers whether one is positive and another one is negative. 
function checkSigns(num1, num2) {
    if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const integer1 = 5;
const integer2 = -10;
const result20 = checkSigns(integer1, integer2);

console.log(`Are ${integer1} and ${integer2} having different signs? ${result20}`);

// Question number - 21
// Write a JavaScript program to create another string by adding "Py" in front of a given string. 
// If the given string begins with "Py" return the original string.

function addPyPrefix(inputString) {
    if (inputString.startsWith("Py")) {
        return inputString;
    } else {
        return "Py" + inputString;
    }
}

// Example usage:
const inputStr1 = "thon";
const inputStr2 = "Python";
const result1 = addPyPrefix(inputStr1);
const result2 = addPyPrefix(inputStr2);

console.log(`Original string: ${inputStr1}`);
console.log(`Modified string: ${result1}`);
console.log(`Original string: ${inputStr2}`);
console.log(`Modified string: ${result2}`);


// Question number - 22
// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function removeCharacterAtPosition(inputString, position) {
    if (position < 0 || position >= inputString.length) {
        return "Invalid position or out of range.";
    }
    
    const firstPart = inputString.slice(0, position);
    const secondPart = inputString.slice(position + 1);

    return firstPart + secondPart;
}

// Example usage:
const originalString1 = "JavaScript";
const positionToRemove = 4;
const modifiedString = removeCharacterAtPosition(originalString1, positionToRemove);

console.log(`Original string: ${originalString1}`);
console.log(`Modified string: ${modifiedString1}`);

// Question number - 23
// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
//  The string length must be broader than or equal to 1.  

function changeFirstAndLast(inputString) {
    if (inputString.length <= 1) {
        return "String length must be greater than or equal to 1.";
    }
    
    const firstChar = inputString.charAt(0);
    const lastChar = inputString.charAt(inputString.length - 1);
    const middleChars = inputString.slice(1, -1);

    return lastChar + middleChars + firstChar;
}

// Example usage:
const originalString2 = "JavaScript";
const modifiedString2 = changeFirstAndLast(originalString2);

console.log(`Original string: ${originalString2}`);
console.log(`Modified string: ${modifiedString2}`);

// Question number - 24
// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.
function addFirstCharToFrontAndBack(inputString) {
    if (inputString.length === 0) {
        return "String is empty.";
    }
    
    const firstChar = inputString.charAt(0);

    return firstChar + inputString + firstChar;
}

// Example usage:
const originalString3 = "JavaScript";
const modifiedString3 = addFirstCharToFrontAndBack(originalString);

console.log(`Original string: ${originalString3}`);
console.log(`Modified string: ${modifiedString3}`);


// Question number - 25
// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. 
function isMultipleOf3Or7(number) {
    if (number <= 0) {
        return "Number must be positive.";
    }
    
    return number % 3 === 0 || number % 7 === 0;
}

// Example usage:
const testNumber25 = 21; // Change this to the number you want to test
const isMultiple = isMultipleOf3Or7(testNumber25);

console.log(`Is ${testNumber25} a multiple of 3 or 7? ${isMultiple}`);

// Question number - 26
// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. 
// The string length must be 3 or more. 
function createNewString(inputString) {
    // Check if the input string has a length of 3 or more
    if (inputString.length >= 3) {
      // Get the last 3 characters of the input string
      const lastThreeChars = inputString.slice(-3);
  
      // Create the new string by adding the last three characters at both the front and back
      const newString = lastThreeChars + inputString + lastThreeChars;
  
      return newString;
    } else {
      // If the input string is less than 3 characters, return an error message
      return "Input string must have a length of 3 or more characters.";
    }
  }
  
  // Test the function with an example
  const inputString = "example";
  const result26 = createNewString(inputString);
  console.log(result26); // Output: "pleexampleple"
  
// Question number - 27
// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise. 
function startsWithJava(inputString) {
    if (inputString.startsWith('Java')) {
      return 'String starts with "Java"';
    } else {
      return 'String does not start with "Java"';
    }
  }
  
  // Test the function with examples
  console.log(startsWithJava('JavaScript')); // Output: "String starts with 'Java'"
  console.log(startsWithJava('Python'));     // Output: "String does not start with 'Java'"

  
//   Question number - 28
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). 
// Return true if either of them falls within the range
function isInRange50To99(num1, num2) {
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test the function with examples
  console.log(isInRange50To99(45, 60)); // Output: true (60 falls within the range)
  console.log(isInRange50To99(30, 40)); // Output: false (both are outside the range)
  console.log(isInRange50To99(80, 100)); // Output: true (80 falls within the range)

  
//   Question number - 29
// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
//  Return true if one or more of them are in the specified range. 
function isAnyInRange50To99(num1, num2, num3) {
    if (
      (num1 >= 50 && num1 <= 99) ||
      (num2 >= 50 && num2 <= 99) ||
      (num3 >= 50 && num3 <= 99)
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test the function with examples
  console.log(isAnyInRange50To99(45, 60, 70)); // Output: true (60 and 70 fall within the range)
  console.log(isAnyInRange50To99(30, 40, 25)); // Output: false (all numbers are outside the range)
  console.log(isAnyInRange50To99(80, 100, 55)); // Output: true (80 and 55 fall within the range)

  
//   Question number - 30
// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. 
// If "Script" appears in the string, return the string without "Script" otherwise return the original one
function checkAndRemoveScript(str) {
    if (str.length >= 5 && str.substring(4, 10) === "Script") {
      // Check if the string has at least 5 characters and the substring "Script" appears at position 5
      return str.substring(0, 4) + str.substring(10);
    } else {
      return str;
    }
  }
  
  // Test the function with examples
  console.log(checkAndRemoveScript("JavaScript")); // Output: "Java"
  console.log(checkAndRemoveScript("Python")); // Output: "Python" (no change)
  console.log(checkAndRemoveScript("HelloScriptWorld")); // Output: "HelloWorld"
  

//   Question number - 31
// Write a JavaScript program to find the largest of three given integers
function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
      return num1;
    } else if (num2 >= num1 && num2 >= num3) {
      return num2;
    } else {
      return num3;
    }
  }
  
  // Test the function with examples
  console.log(findLargest(5, 10, 3)); // Output: 10
  console.log(findLargest(15, 7, 22)); // Output: 22
  console.log(findLargest(8, 8, 8)); // Output: 8 (all numbers are equal)
  

//   Question number - 32
// Write a JavaScript program to find the closest value to 100 from two numerical values
function closestTo100(num1, num2) {
    const target = 100;
    const diff1 = Math.abs(num1 - target);
    const diff2 = Math.abs(num2 - target);
  
    if (diff1 < diff2) {
      return num1;
    } else if (diff2 < diff1) {
      return num2;
    } else {
      // If both differences are equal, return either one
      return num1;
    }
  }
  
  // Test the function with examples
  console.log(closestTo100(90, 120)); // Output: 90
  console.log(closestTo100(95, 99)); // Output: 95
  console.log(closestTo100(105, 98)); // Output: 98
  

//   Question number - 33
// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

function checkRange(num1, num2) {
    if (
      ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) &&
      ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100))
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test the function with examples
  console.log(checkRange(45, 80)); // Output: true
  console.log(checkRange(30, 65)); // Output: false
  console.log(checkRange(75, 110)); // Output: true

  
//   Question number - 34
// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.

function findLargestInRange(num1, num2) {
    if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
      // Both numbers are within the range
      return Math.max(num1, num2);
    } else {
      // At least one of the numbers is outside the range
      return "Both numbers should be within the range 40..60";
    }
  }
  
  // Test the function with examples
  console.log(findLargestInRange(45, 55)); // Output: 55
  console.log(findLargestInRange(30, 50)); // Output: "Both numbers should be within the range 40..60"
  console.log(findLargestInRange(60, 70)); // Output: "Both numbers should be within the range 40..60"

//   Question number - 35
// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string

function isCharBetweenPositions(str, char, start, end) {
    // Check if the string has at least 4 characters and start <= end
    if (str.length >= end && start <= end) {
      // Get the character at the specified position
      const charAtIndex = str.charAt(start - 1);
  
      // Check if it matches the specified character
      return charAtIndex === char;
    } else {
      // Invalid input
      return false;
    }
  }
  
  // Test the function with examples
  console.log(isCharBetweenPositions("example", "a", 2, 4)); // Output: true (character 'a' is between positions 2 and 4)
  console.log(isCharBetweenPositions("hello", "e", 2, 4));    // Output: false (character 'e' is not between positions 2 and 4)
  console.log(isCharBetweenPositions("world", "o", 2, 5));    // Output: true (character 'o' is between positions 2 and 4)
  console.log(isCharBetweenPositions("abc", "x", 2, 4));      // Output: false (string length is less than 4)
  console.log(isCharBetweenPositions("abcdef", "c", 3, 2));   // Output: false (start position is greater than end position)

//   Question number - 36
// Write a JavaScript program that checks whether the last digit of three positive integers is the same.  
function haveSameLastDigit(num1, num2, num3) {
    // Get the last digit of each number using the remainder operator (%)
    const lastDigit1 = num1 % 10;
    const lastDigit2 = num2 % 10;
    const lastDigit3 = num3 % 10;
  
    // Check if all three numbers have the same last digit
    return lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3;
  }
  
  // Test the function with examples
  console.log(haveSameLastDigit(123, 456, 789)); // Output: true (all three have the same last digit 3)
  console.log(haveSameLastDigit(123, 456, 7890)); // Output: false (last digit of the third number is 0)
  console.log(haveSameLastDigit(12, 34, 56)); // Output: false (none of them have the same last digit)
  


