//
/*Function declaration
function add(a, b) {
  let result = a + b;
  return result;
}
let sum = add(5, 12);
console.log(sum);

// Function expression
const addition = function (a, b) {
  let result1 = a + b;
  return result1;
};
let total = addition(10, 5);
console.log(total);
*/

// Task - 01*** > add all numbers of the array
/*
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);*/

// Task - 02*** > Average of the numbers
/*
let num = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
let average = sum / num.length;
console.log(average);*/

// Task - 03*** > Average of the numbers using function
/*
function findAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let average = sum / array.length;
  return average;
}
let Average = findAverage([25, 132, 45, 62]);
console.log(Average);
*/
// Task - 04*** > Find the largest number by for loop
/*
let nums = [10, 45, 21, 39, 2];
let max = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}
console.log(max);*/

// Task - 05 (Find the smallest number using function)
/*
function minNumber(numList) {
  let min = numList[0];
  for (let i = 1; i < numList.length; i++) {
    if (numList[i] < min) {
      min = numList[i];
    }
  }
  return min;
}
let minNum = minNumber([10, 45, 21, 39, 2]);
console.log(minNum);
*/
// Task - 06 > Find the both max and min numbers using function
/*
function minMax(minAndMax) {
  let min = minAndMax[0];
  let max = minAndMax[0];
  for (let i = 1; i < minAndMax.length; i++) {
    if (minAndMax[i] < min) {
      min = minAndMax[i];
    }
    if (minAndMax[i] > max) {
      max = minAndMax[i];
    }
  }
  return [min, max];
}
let result = minMax([21, 5, 87, 10, 46, 55, 78]);
console.log("Min number: " + result[0]);
console.log("Max number: " + result[1]);
*/

// Task - 07 > addition of the even numbers
/*
function sumEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum = sum + array[i];
    }
  }
  return sum;
}
let result = sumEven([10, 5, 8, 3, 4, 7]);
console.log(result);*/

// Task - 08 > addition of the odd numbers
/*
function sumOdd(odd) {
  let sum = 0;
  for (let i = 0; i < odd.length; i++) {
    if (odd[i] % 2 !== 0) {
      sum = sum + odd[i];
    }
  }
  return sum;
}
let result = sumOdd([10, 5, 8, 3, 4, 7]);
console.log(result);*/

// Task - 09 > Count how many even numbers are there
/*
function countEven(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      count += 1;
    }
  }
  return count;
}
let result = countEven([10, 5, 8, 3, 4, 7]);
console.log(result);*/

// Task - 10 > Count how many odd numbers are there
/*
function countOdd(oddNumbers) {
  let count = 0;
  for (let i = 0; i < oddNumbers.length; i++) {
    if (oddNumbers[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}
let result = countOdd([10, 5, 8, 3, 4, 7]);
console.log(result);*/

// Task - 11*** > Sum of the digits. without function. (string > number > string)
/*
let number = 1774;
let str = number.toString();
let sum = 0;
for (i = 0; i < str.length; i++) {
  sum += parseInt(str[i]);
}
console.log(sum);*/

// Task - 12 > Sum of the digits
/*
let number1 = 618153;
let string = number1.toString();
let total = 0;
for (let i = 0; i < string.length; i++) {
  total += parseInt(string[i]);
}
console.log(total);*/

// Task - 13*** > Find how many digits are in a number
/*
let number = 52516;
let str = number.toString();
let count = 0;
for (i = 0; i < str.length; i++) {
  count++;
}
console.log(count);*/

// Task - 14*** > Reverse the digits
/*
let number = 1234;
let str = number.toString();
let reverse = "";
for (const letter of str) {
  reverse = letter + reverse;
}
console.log(reverse);*/

// Task - 15 > Reverse the digits inside a function, return as numbers
/*
function reversed(number) {
  let str = number.toString();
  let reverse = "";
  for (const character of str) {
    reverse = character + reverse;
  }
  return parseInt(reverse);
}
let reversedNum = reversed(615174);
console.log(typeof reversedNum);
*/
