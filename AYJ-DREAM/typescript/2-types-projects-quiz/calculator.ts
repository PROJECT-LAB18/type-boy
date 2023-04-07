/**
 * Let's make a calculator 🧮
 */

//3개 인자 받아와야함
// union 타입으로
// string , number ,number
// 함수 타입 -> number

type calc = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculateMy(calc: calc, a: number, b: number) {
  if (calc === 'add') {
    return a + b;
  } else if (calc === 'substract') {
    return a - b;
  } else if (calc === 'multiply') {
    return a * b;
  } else if (calc === 'divide') {
    return a / b;
  } else if (calc === 'remainder') {
    return a % b;
  } else {
    return;
  }
}
console.log(calculateMy('add', 1, 3)); // 4
console.log(calculateMy('substract', 3, 1)); // 2
console.log(calculateMy('multiply', 4, 2)); // 8
console.log(calculateMy('divide', 4, 2)); // 2
console.log(calculateMy('remainder', 5, 2)); // 1

/**-------------------------------------------------------------------------------------------- */

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Command, a: number, b: number) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command ');
  }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
