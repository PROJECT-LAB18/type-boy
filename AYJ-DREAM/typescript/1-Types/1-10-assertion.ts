{
  /**
   * Type Assertions ❌
   */

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();

  console.log((result as string).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); //❌

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // ❌

  // 실시간으로 어플리케이션이 죽을 위험이 있다.

  const button = document.querySelector('class')!; // 정말 장담 할 수 있을 떄 ! 를 쓸 수 있다 .
  button.nodeValue;
}
