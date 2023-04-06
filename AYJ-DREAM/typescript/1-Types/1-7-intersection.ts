{
  /**
   * Intersection Types
   * union은 발생할수 있는 모든 케이스 중에 한가지만 선택할 수 있는 거였다면
   * 모든것을 합한것이다.
   * and &
   */

  type Student = { name: string; score: number };
  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: 'an',
    score: 1,
    empolyeeId: 1123,
    work: () => {},
  });
}
