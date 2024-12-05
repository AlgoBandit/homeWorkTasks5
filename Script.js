//functions checks smaller number and prints it
function printSmallerNumber(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(printSmallerNumber(5, 10));

// checks if output length is bigger than 4 chars 
function countStringsLongerThanThree(str1, str2, str3, str4) {
    let count = 0;

    if (str1.length > 3) count++;
    if (str2.length > 3) count++;
    if (str3.length > 3) count++;
    if (str4.length > 3) count++;

    return count;
}
console.log(countStringsLongerThanThree("apple", "banana", "orange", "kiwi"));

//check if theres A and replavce it with a
function checkAndConvertA(input) {
    let index = input.indexOf('A');
    if (index !== -1) {
        let result = input.slice(0, index) + 'a' + input.slice(index + 1);
        return result;
    } else {
        return "No 'A' found in the input";
    }
}
console.log(checkAndConvertA("BALON"));
//checks if number is even or odd in negative or positive
function analyzeNumber(num) {
    if (num >= 0) {
        if (num % 2 === 0) {
            return "Positive, Even";
        } else {
            return "Positive, Odd";
        }
    } else {
        if (num % 2 === 0) {
            return "Negative, Even";
        } else {
            return "Negative, Odd";
        }
    }
} console.log(analyzeNumber(-5));
// checks if first and last letters are the same and deletes them
function removeMatchingEdges(input) {
    //input.length - 1 takes the last letter of the string
    if (input[0] === input[input.length - 1]) {
        // Remove the first and last characters
        let result = input.slice(1, input.length - 1);
        return result;
    } else {
        return input;
    }
}
console.log(removeMatchingEdges(`a, b, c, d, e, f, a`));

function handleSpecialCharacters(input) {
    if (input.indexOf('*') !== -1) {
        return input.replace('*', '');
    } else if (input.indexOf('@') !== -1) {
        return '*' + input + '*';
    } else if (input.indexOf('₪') !== -1) {
        return "new shekel";
    } else {
        return input;
    }
}
console.log(handleSpecialCharacters("hello*world"));
console.log(handleSpecialCharacters("hello@world"));
console.log(handleSpecialCharacters("hello₪world"));
