// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function mult(a: i32, b: i32): i32 {
  return a * b;
}

export function sub(a: i32, b: i32): i32 {
  return a - b;
}

export function div(a: i32, b: i32): i32 {
  return a / b;
}