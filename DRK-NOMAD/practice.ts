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
// type Player = {
//   name : string,
//   // optional 한 값에는 물음표(?)를 붙여 타입을 지정할 수 있다.  
//   age ?: number,
// }

// 아래와 같이 변수화하여 지정한 타입을 설정하였고, age값을 지정하지 않아도 오류가 발생하지 않는다. 
// const player1 : Player = {
//   name : 'dongryul',
// }

// // 함수의 타입지정 
// function makePlayer(name : string) : Player{
//   return {
//     name
//   }
// }

// 화살표 함수 타입지정
// const playerMaker = (name:string) : Player => ({name}) // 화살표함수가 객체를 반환할때는 ()=>({}) 형태이다. 

// readonly : 처음 선언 시에만 값을 지정할 수 있고, 이후에는 수정 불가 

// any : 무엇이든 될 수 있음 => 사실상 타입스크립트로부터 벗어날 때 사용 (권장하지 않음)

// unknown : 변수의 타입이 확인되지 않을 때 지정하는 용도

// void : 함수에서 return 하는 값이 없을 때 

// never : 어떠한 값도 가질 수 없을 때 

// <call signature> : 함수의 형태를 type으로 선언
type Add = ( a : number, b : number ) => number;
const add : Add = (a, b) => a + b;

// <overloading> : 함수가 여러 개의 signature 를 갖고 있을 때 발생한다. 
type Addf = {
  (a: number, b: number)
  (a: number, b: string)
}

// next.js에는 라우터를 가지고 있는데, 그 때 이 오버로딩을 많이 활용한다. 
type Config = {
  path : string,
  state : object 
}
type Push = {
  (path:string) :void
  (config:Config) :void
}
const push:Push = (config)=>{
  if(typeof config === 'string') console.log(config);
  else {
    console.log(config.path, config.state);
  }
}
// Router.push({
//   path: "/home",
//   state: 1
// })

// parameter 갯수가 다른 경우

type Addt = {
  (a: number, b: number, c:number) : number
  (a: number, b: number) : number
}

const addt:Addt = (a, b, c?:number) => {
  if (c) return a + b + c
  return a + b
}

// polymorphism 다형성 : 
// 프로그램 언어의 다형성(多形性, polymorphism; 폴리모피즘)은 그 프로그래밍 언어의 자료형 체계의 성질을 나타내는 것으로, 
// 프로그램 언어의 각 요소들(상수, 변수, 식, 오브젝트, 함수, 메소드 등)이 다양한 자료형(type)에 속하는 것이 허가되는 성질을 가리킨다. 
// 반댓말은 단형성(monomorphism)으로, 프로그램 언어의 각 요소가 한가지 형태만 가지는 성질을 가리킨다.

// concrete type : number, boolean, string, unknown, void 등 을 일컬음

// generic : typescript에서의 placeholder 역할 
type Superprint = {
  <T, M>(arr: T[], b?: M) : T
}

const superprint : Superprint = (arr) => arr[0]

// TS가 값을 통해 call signature를 유추한다. 
const num1 = superprint([1, 2, 3, 4]);
const string_a = superprint(['a', true, 3]);
const istrue = superprint([true, false, true]);

// 엥? 그럼 any를 지정해주는 것하고는 뭐가 달라? 
/* ex1) 
  istrue.toUpperCase()
를 했을 때 any로 지정하게 되면 실행 시의 오류를 막을 수 없게 된다.   */


// 대부분의 경우에는 제네릭을 직접 만들기보다는 라이브러리의 제네릭을 사용하는 경우가 많을 것이다.  
type Player3<E> = {
  name: string,
  extraInfo: E
}
type nikoExtra = {
  favFood : string
}
type Nicoplayer = Player3<nikoExtra>

const niko: Nicoplayer = {
  name: "niko",
  extraInfo: {
    favFood : 'Kimchi',
  }
}

type A = Array<number>

let a:A = [1, 2, 3, 4]