declare function  f1(arg: { a: number; b: string }): void;

// arg 代表只是一个对象 为了方便书写 a 和 b的类型而已
const Fn1: typeof f1 = (arg: { a: number; b: string }) => {
  console.log('it works')
  console.log(arg)
}
// This is OK!
Fn1({a:1, b: '2'})

// 返回值无论是 boolean | string | number | null | undefined
// 都是 type P0 = []
type P0 = Parameters<() => boolean>;
// type P0 = []

type P1 = Parameters<(s: string) => void>;
// type P1 = [s: string]

type P2 = Parameters<<T>(arg: T) => T>;
// type P2 = [arg: unknown]

type P3 = Parameters<typeof f1>;
// type P3 = [arg: {
//   a: number;
//   b: string;
// }]

const p3: P3 = [
  { a: 1, b: '2'}, // This is Ok
  // { a: 3, b: '4'} this is error only for on Arguments
]

type P4 = Parameters<any>;
// type P4 = unknown[]

type P5 = Parameters<never>;
// type P5 = never

// type P6 = Parameters<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.ts

// type P7 = Parameters<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//   Type 'Function' provides no match for the signature '(...args: any): any'.