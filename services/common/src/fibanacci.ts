import bigInt from "big-integer";

export default function fib(n: number): bigInt.BigInteger {
  let a = bigInt(0);
  let b = bigInt(1);

  for (let i = 0; i < n; i++) {
    let temp = a;
    a = b;
    b = temp.add(b);
  }

  return a;
}