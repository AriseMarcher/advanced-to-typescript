type A = Awaited<Promise<string>>;

// the Promise then the promise resolve is number
type B = Awaited<Promise<Promise<number>>>;

// the Promise is boolean or then resolve number
type C = Awaited<boolean | Promise<number>>;
