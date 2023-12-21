// Task 1: 
// https://github.com/type-challenges/type-challenges/blob/main/questions/00013-warm-hello-world/README.md

type HelloWorld = string // expected to be a string


// Task 2:
// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md

type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3


// Task 3:
// https://github.com/type-challenges/type-challenges/issues/1314


type Flatten<S extends any[], T extends any[] = []> =  S extends [infer X, ...infer Y] ? 
  X extends any[] ?
   Flatten<[...X, ...Y], T> : Flatten<[...Y], [...T, X]> 
  : T

// Test the Flatten type
type TestFlatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; 

// Task 4:
// https://github.com/type-challenges/type-challenges/blob/main/questions/01367-medium-remove-index-signature/README.md

type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
  };
  
  // Test the RemoveIndexSignature type
  type Foo = {
    [key: string]: any;
    foo(): void;
  };
  
  type A = RemoveIndexSignature<Foo>; // { foo(): void }

// Task 5:
// https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.md

type Diff<O, O1> = {
    [K in Exclude<keyof (O & O1), keyof(O | O1)>]: (O & O1)[K]
  }


  