declare function Rf1(): { a: number; b: string};

type R0 = ReturnType<() => string>;
// type R0 = string

type R1 = ReturnType<(s: string) => void>;
// type R1 = void

type R2 = ReturnType<<T>() => T>;
// type R2 = unknown

type R3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type R3 = number[]

type R4 = ReturnType<typeof Rf1>;
// type R4 = {
//   a: number;
//   b: string;
// }

type R5 = ReturnType<any>;
// type R5 = any

type R6 = ReturnType<never>;
// type R6 = never

// type R7 = ReturnType<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.ts

// type T8 = ReturnType<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
  // Type 'Function' provides no match for the signature '(...args: any): any'.