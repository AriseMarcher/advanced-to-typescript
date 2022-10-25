// function toHex(this: number) {
//   console.log(this)
//   return this.toString(16)
// }

// function numberToString(n: ThisParameterType<typeof toHex>) {
//   return toHex.apply(n)
// }

// // console.log(toHex(999)); // [object Window]
// // this 为 Window 而且还报错
// // Expected 0 arguments, but got 1

// console.log(numberToString(12345)) // 3039
// //  this 为 Number {12345}