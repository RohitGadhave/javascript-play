//Regular Functions
function Timer () {
  this.seconds = 0
  setInterval(() => this.seconds++, 1000)
}
var timer = new Timer()
setTimeout(() => console.log(timer.seconds), 3100);


function normal (template, ...expressions) {
  console.log(template,expressions);
  return template.reduce((accumulator, part, i) => {
    console.log(accumulator, part, i)
    return accumulator + expressions[i - 1] + part
  })
}

var name = 'nico'
var outfit = 'leather jacket'
var text = normal`hello ${name}, you look lovely today in that ${outfit}`
console.log(text)


/*
Treat function as a (Hidden class) class

  */
// start
function treatAsAClass(param1,param2){
  this.a = param1;
  this.b = param2;
  console.log(this);
}

const obj1 = new treatAsAClass(2,3);
console.log(obj1);
//end 