let pony = {foo : "i am foo"};
let [a, b] = [0, 1];
let [c, , d] = [0, 1, 2]
let {foo: baz=0} = pony

console.warn(baz,a,c);
let {boo} = {bar: 'baz'}
console.log(boo)
// <- undefined
//function

function foo(bar={ a: 1, b: 2 }){
  console.log(bar);
}
function foo1 ({ a=1, b=2 }) {
  console.log(a,b);
}
foo1({});
function foo2 ({ a=1, b=2 } = {}) {
  console.log(a,b);
}
foo2({a:20});

function es5 () {
  var left = 10
  var right = 20
  var aux
  if (right > left) {
    aux = right
    right = left
    left = aux
  }
}
function es6 () {
  var left = 10
  var right = 20
  if (right > left) {
    [left, right] = [right, left]
  }
}
let {p,q,r} = {p:"p",q:"q",r:""};
console.log(p,q,r,r?r:false);
 [x,y,z] = [1,2,3,4,5]
let array =[x,y,z]
console.log(array);








function getUrlParts (url) {
  var magic = /^(https?):\/\/(ponyfoo\.com)(\/articles\/([a-z0-9-]+))$/
  return magic.exec(url)
}
var parts = getUrlParts('http://ponyfoo.com/articles/es6-destructuring-in-depth')
var [,protocol,host,pathname,slug] = parts
console.log(protocol)
// <- 'http'
console.log(host)
// <- 'ponyfoo.com'
console.log(pathname)
// <- '/articles/es6-destructuring-in-depth'
console.log(slug)
// <- 'es6-destructuring-in-depth'