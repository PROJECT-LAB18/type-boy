{
  /**
   * Enum
   */
  //javascript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //문자열을 지정할수도있지만 그 다음 값으로는 뭐가 나와야할지 모르기떄문에 수동적으로 지정해줘야한다.
  // enum으로 타입이 지정된 변수에 다른 어떤 숫자도 할당할 수 있는 것이 문제점이다 (초기)
  // 초기 타입스크립트에서는 strict 옵션이 false로 되어있어서 재할당이 금지 되어있지만 2.3버전 부터 기본적 옵션으로 true로 설정되어있어서 엄격한 타입 검사가 가능하다.

  type daysOf = 'monday' | 'tuesday' | 'wednesday' | 'thursday';
  enum Days {
    월요일 = 'a',
    화요일 = 'b',
    수요일 = 'c',
    목요일 = 'd',
    금요일 = 'e',
    토요일 = 'f',
    일요일 = 'g',
  }

  console.log(Days.화요일);
  let day: Days = Days.토요일;
  day = Days.금요일;
}
