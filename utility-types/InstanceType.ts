class I {
  x = 0;
  y = 0;
}

type I0 = InstanceType<typeof I>;
// type I0 = I;

type I1 = InstanceType<any>;
// type I1 = any

type I2 = InstanceType<never>;
// type I2 = never

// type I3 = InstanceType<string>;
// Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'

// type T4 = InstanceType<Function>;
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
  // Type 'Function' provides no match for the signature 'new (...args: any): any'