{
  /**
   * Union Types: or
   * union 타입은 발생할 수 있는 타입들 중에 하나만
   */

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  //login

  // type User = 'success' | 'false';
  // function login(userID: User) {
  //   if (userID === 'success') {
  //     console.log('hello');
  //     return;
  //   } else {
  //     console.log('sorry');
  //     return;
  //   }
  // }

  type Success = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = Success | FailState;

  function login(): LoginState {
    return {
      response: {
        body: 'loggin in',
      },
    };
  }

  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`😃 ${state.response.body}`);
    } else {
      console.log(`😃 ${state.reason}`);
    }
  }
}
