{
  //Array
  const fruits: string[] = ['🍎', '🍊'];
  const scroes: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
    //전달된 배열을 출력하는 함수
    // 데이터를 변경하거나 업데이트 할 수 없게 할려면 readonly 를 붙이면 된다.
  }

  //Tuple -> interface , type alias , class
  //서로다른 타입의 데이터를 담을 수 있게 한다
  //동적으로 관리할때는 유용
  let student: [string, number];
  student = ['name', 12];
  student[0]; //name
  student[1]; //12

  const [name, age] = student;
}
