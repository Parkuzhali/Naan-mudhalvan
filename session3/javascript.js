//pre increment/post increment
a = 10;
b = 20;
c = a++ + ++b + --a - a-- + b++ + ++b - a++ + 10;
console.log(c);
// if for loop is empty then for loop will iterate the loop
// for (var i = 0; i < 5; i++){
//    // console.log(i)
// }
// console.log(i);

for (var i = 0; i < 5; i += 2) {
  console.log(i);
}
// function
var a = 10;
function print() {
  console.log("hello");
  return 10;
}
console.log(print());

var a = 10;
function print() {
  return 10; // if a function return one statement then the remaining part will not be executed.
  console.log("hello");
}
console.log(print());

function parkuzhali() {
  console.log("Iam Parkuzhali,I'm a Multi Talented person...");
}
parkuzhali();

function print_num(x, y) {
  console.log(x,y)
}
print_num(4, 7);
