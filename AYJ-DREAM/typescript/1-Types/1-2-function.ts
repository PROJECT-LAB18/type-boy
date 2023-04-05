{
  //JS
  // function isAdd(num1, num2) {
  //   return num1 + num2;
  // }

  //TS
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  //JS
  // function isFetchNum(id) {
  //code...
  //code ..

  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  //TS
  // function fetchNum(id: string): Promise<number> {
  //code...
  //code ..

  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  //Optional parameter
  //두개의 인자를 절대적으로 받는게 아니라 ? 를 붙이면 절달해도 되고 안해도 된다라는 뜻이 된다.
  //두번쨰 인자에 undefined를 전달해도 괜찮다. undefined를 전달해도 아무것도 안해도 똑같이 undefined로 출력된다.

  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('An', 'yujin');
  printName('kim');

  //Default parameter
  function printMessage(message: string = 'default messge') {
    console.log(message);
  }
  printMessage();

  //Rest parameter
  //모든 전달 되는 인자들을 배열 형태로 받는다면 reduce를 사용해서 전달된 모든 인자들을 더 할 수 있다.
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
}
