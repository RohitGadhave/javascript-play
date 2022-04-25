//Spread Operator and Rest Parameters
function concat1 () {
  console.log(arguments);
  return Array.prototype.slice.call(arguments).join(' ')
}
var result = concat1('this', 'was', 'no', 'fun')
console.log(result)
// Rest parameters is a better arguments
/*
everything is an array with all parameters passed to foo
*/
function foo (...everything) {
  console.log(arguments);
}
// foo(1,2,3,4);


function concat (...words) {
  return words.join(' ')
}
var result = concat('this', 'is', 'okay')
console.log(result)
// <- 'this is okay'
/**
Named parameters are excluded from ...rest
*/
function foo1 (bar, ...rest) {}

// Spread operator
//fn(...[1, 2, 3]) is equivalent to fn(1, 2, 3)
[1, 2, ...[3, 4, 5], 6, 7]