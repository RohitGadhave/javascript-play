console.log('Om Sai Ram');

require('./Array/array');
// require('./Loops/loops');
// require('./Common/Assignment_Destructuring');
// require('./Common/SpreadOperatorAndRestParameters');
// require('./Functions/functions');
require('./File_Handling/main');

let arrayOfLetters = ['a','b','c','d','e','f'];
const anotherArrayOfLetters = arrayOfLetters;
arrayOfLetters = [];
// console.log(anotherArrayOfLetters,arrayOfLetters);
//['a','b','c','d','e','f']

/*
When we carry out the above (containing arrayOfLetters = []) you create a new array and break the old reference. Thus, anotherArrayOfLetters has no effect on it since it is still pointing to the old array.
*/


// How could you print unique values from an array?
const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
function getUniqueValues(arrOfNum){
  // Way 1
  // const set = new Set(arrOfNum);
  // return [...set];
  // Way 2
  let iNo=0;lNo = arrOfNum.length,tempArray = [];
    let flag = false;
  for(iNo;iNo<lNo;iNo++){
    let jNo=0;
    let tempValue = arrOfNum[iNo];
    console.log("tempValue",iNo,jNo,lNo)
    flag = true;
    for(jNo;jNo<lNo;jNo++){
      console.log(arrOfNum[jNo],jNo)
      if(jNo==iNo){
        // continue
        
      }
      else if(tempValue== arrOfNum[jNo]) {
        flag = false
      };
    }
    if(flag) tempArray.push(arrOfNum[iNo]);
    
  }
  return tempArray;
}
// console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]

