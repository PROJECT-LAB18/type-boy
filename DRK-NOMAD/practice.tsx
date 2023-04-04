// primitive types 
const firstName : string = 'nico';
const age : number = 27;
const married : boolean = true;

// 위와 같이 명시적으로 지정할 수 있으나, 다음과 같이 타입스크립트가 추론할 수 있도록 하는 것이 더 깔끔할 수 있다.  
const backNumber = 4; 

// 객체의 타입 지정 
const player : {
  name : string,
  age : number,
} = {
  name : 'nico',
  age : 27,
}

// 타입을 변수화해서 지정할 수 있다. 
type Player = {
  name : string,
  // optional 한 값에는 물음표(?)를 붙여 타입을 지정할 수 있다.  
  age ?: number,
}

// 아래와 같이 변수화하여 지정한 타입을 설정하였고, age값을 지정하지 않아도 오류가 발생하지 않는다. 
const player1 : Player = {
  name : 'dongryul',
}

// 함수의 타입지정 
function makePlayer(name : string) : Player{
  return {
    name
  }
}

// 화살표 함수 타입지정
const playerMaker = (name:string) : Player => ({name}) // 화살표함수가 객체를 반환할때는 ()=>({}) 형태이다. 
