interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

// error
// Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'
// const obj2: Required<Props> = { a: 5 };