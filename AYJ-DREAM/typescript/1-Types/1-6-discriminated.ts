{
  //Discriminated Union은 다른 Union 타입과 함께 사용되는 패턴
  // 서로 다른 객체 타입이 공통된 리터럴 프로퍼티를 가지고 있는 경우 코드에서 명시적으로 구분할 수 있게 해준다.

  /**
   * 1. 공통된 리터렁 타입 프로퍼티
   * 2. 서로 다른 타입을 나타내는 union 타입
   * 3. 타입 가드를 사용한 타입별 코드 처리
   */

  type Success = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = Success | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'loggin in',
      },
    };
  }

  function printLoginState(state: LoginState) {
    if (state.result == 'success') {
      console.log(`😃 ${state.response.body}`);
    } else {
      console.log(`😃 ${state.reason}`);
    }
  }
}
