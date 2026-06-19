// function greet() {
//   console.log("Hello");
// }
// greet();

// function num(a) {
//   console.log(a);
// }
// num(10)

// function str(name){
//   return name
// }
// const res = str("JavaScript")
// console.log(res);

// function tech(){
//   return "NodeJS";
// }
// console.log(tech())

// function fact(num) {
//   if (num === 1) return 1;
//   return num * fact(num - 1);
// }
// const res = fact(5);
// console.log(res);

// console.log(1 == "1");
// console.log(1 === "1");

// const greet = () => {
//   console.log("Hello");
// };
// greet()

// const greet = function () {
//   console.log("Hello");
// };
// greet()

// (function () {
//   console.log("Hello");
// })();

// var a = 10;
// let b = 20;
// const c = 30;

function outer() {
  var a = 10;
  let b = 20;
  const c = 30;
  // console.log(a);
  // console.log(b);
  // console.log(c);

  function inner() {
    const e = 50;
    console.log(e);
    // console.log(b);
    // console.log(c);
  }
  inner();
  console.log(e);
}
outer();
