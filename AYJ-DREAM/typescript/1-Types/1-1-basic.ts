//이름 충돌을 막기위해 로컬 스코프로 제한한다.

{
  /**
   * JavaScript
   * Primitive : number, string, boolean,bigint, symbol, null, undefined
   * Object: function , array ..
   */

  //number
  const num: number = -6;

  //string
  const str: string = 'hello';

  //boolean
  const boal: boolean = false;

  //undefined 결정이 안되어있는 상태
  // let name: undefined; ❌
  let age: number | undefined;
  age = undefined;
  age = 5;

  //찾았다면 숫자를 리턴하고 찾지 못하면 undefined를 반환하다.
  function find(): number | undefined {
    return undefined;
  }

  //null 명확하게 텅텅 비어있는 상태 의도 0
  let person: null;
  let person2: string | null;

  //unknown ❌
  //어떤 데이터든 담을 수 있고 어떤 타입인지 알 수 없는 상태가 된다.
  // 타입스크립트는 타입이 없는 자스와 연동해서 쓸수있기 때문에 타스에서 자스의 라이브러리를 이용하는경우에 자스에서 리턴하는 타입을 모를 수 가 있다.
  // 가능하면 구체적으로 타입을 지정해서 사용하는 것이 좋다
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  //any ❌
  // 어떤 것이든 다 담을 수 있는 상태가 된다.

  let anything: any = 0;
  anything = 'hello';

  //unknown,any는 가능하면 쓰지 말것

  //void
  //함수에서 아무 값도 리턴하지 않으면 자동으로 void가 된다.
  //보통은 함수에서 무언가를 리턴할때 타입을 명시하는것이 관례이다.
  //void 같은 경우 팀의 스타일에서 따라 생략하는지 아닌지 따라 다르다.
  function print() {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; //변수에 void를 선언하면 undefined 밖에 할당할수 없기 때문에 활용성이 떨어진다. ❌

  //never
  //변수에서 사용되지 않고 핸들링 할수 없는 에러 함수에 쓴다. 아무것도 내보내지 않는다.
  function throwError(message: string): never {
    //message->server (log)
    throw new Error(message);
    while (true) {
      //도달할 수 없는 코드 이기 때문에 희미하다.
    }
  }

  //object
  //광범위하게 타입을 지정할 수 있다.
  //배열도 가능하다.
  let obj: object;
  function acceptSomeObject(obj: object) {}

  acceptSomeObject({ name: 'yujin' });
  acceptSomeObject({ animal: 'cat' });
}
