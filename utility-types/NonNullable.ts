type N0 = NonNullable<string | number | undefined>
// type N0 = string | number

type N1 = NonNullable<string[] | null | undefined>
// type N1 = string[]

interface nObj1 {
  n1: string;
  n2: undefined
}

interface nObj2 {
  n3: null
}

type N2 = NonNullable<nObj1 | nObj2>;
// type N2 = nObj1 | nObj2
const the_n2: N2 = {
  n1: 'hello typescript',
  n2: undefined,
  n3: null,
}