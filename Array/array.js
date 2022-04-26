console.log('Hi i am array');
// reduce










let arrayOfNumber = [];







//############################################
const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
console.log("Array length on adding 100th index value");
console.log(arrayOfOddNumbers.length);//101

/*
The reason for this solution is as follows: JavaScript placesempty as a value for indices 3 - 99. Thus, when you set the value of the 100th index, the array looks like:
(101) [1, 3, 5, empty × 97, 199]
*/
