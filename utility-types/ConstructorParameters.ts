type C0 = ConstructorParameters<ErrorConstructor>;
// type C0 = [message?: string | undefined]

type C1 = ConstructorParameters<FunctionConstructor>;
// type C1 = string[]

type C2 = ConstructorParameters<RegExpConstructor>;
// type C2 = [pattern: string | RegExp, flags?: string | undefined]

type C3 = ConstructorParameters<any>;
// type C3 = unknown[]

// type C4 = ConstructorParameters<Function>;
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
  // Type 'Function' provides no match for the signature 'new (...args: any): any'