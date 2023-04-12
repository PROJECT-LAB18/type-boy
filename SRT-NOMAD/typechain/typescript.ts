

/* -------------------------------------------------------------------------- */
/* Implicit Types vs Explicit Types                                           */
/* -------------------------------------------------------------------------- */

let a = "hello"; // 추론적 (Implicit Types)
let b: boolean = false; // 명시적 (Explicit Types)

let c: number[] = [1, 2, 3];
// c.push("1");
c.push(1);

const player = {
  name: "lesry"
}
// player.name = 1;
// player.hello();
player.name = "sryung";


/* -------------------------------------------------------------------------- */
/* Types of TS                                                                */
/* -------------------------------------------------------------------------- */

// ** basic types
let d: boolean[] = [true];
let e: string[] = ["hello", "world"];
let f: number[] = [1, 2];


// ** optional types
const student = {
  name: "sryung"
}
// 모두가 name은 갖고 있지만, age는 선택적으로 가진다면?
const student2: {
  name: string,
  age?: number
} = {
  name: "sryung"
}


// ** union types
// 한 가지 타입을 받는게 아니라 다양한 타입을 들어오게 하려면?

// 문자열로 가득한 배열, 또는 숫자를 가질거임ㅋ
let g: string[] | number = 123;


// ** object에 type 지정하기
type MemberObj = {
  name: string
}
let marry: MemberObj = { name: 'kim' }
// type 지정할 속성이 너무너무 많다면?
type MemberObj2 = {
  [key: string]: string // 글자로 된 모든 object 속성의 타입은 string
}
let tom: MemberObj2 = { name: 'lee', age: '123' }
// 귀찮게 속성마다 일일히 지정하지 않음


// ** Type Alias(별칭)
// 타입 지정하는 코드가 너무 길어서 변수로 만들게요 : 재사용
// 일반적으로 alias의 첫글자는 대문자
type MyType = string | number;
let h: MyType = 123;
let l: MyType = "123";


// ** 함수에 타입 지정하기
// 파라미터와 return 값 각각에 타입 지정 가능

// number를 받고 number를 뱉을거얌
function funI(x: number): number {
  return x * 2;
}
// 별칭을 이용한 함수 타입 예제 알아보기
type Age = number;
type Name = string;
type Player = {
  name: Name,
  age?: Age
}
function playerMaker(name: string): Player {
  return {
    name
  }
}
// const playerMaker = (name: string) : Player => ({ name }) // 화살표 함수ver
const nico = playerMaker("nico");
nico.age = 12;


// ** readonly
type A = {
  readonly aa: number
  bb?: string
}
let Ob: A = { aa: 123, bb: "hi" };
// Ob.aa = 123; // Ob.aa는 읽기 전용이라 수정 불가능
Ob.bb = "123";

const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(1); // number[]는 읽기 전용이라 수정 불가능

const names: readonly string[] = ["1", "2"];


// ** Tuple
// array 내부에 사용하는 튜플 타입
const TT: [string, number, boolean] = ["nico", 1, true];
// TT[0] = 1; // [0]으로는 string만을 받아야 해서 에러

type Member = [number, boolean]; // 무조건 첫째는 number, boolean 받을거야
let john: Member = [123, true];

// 튜플을 사용함으로써
// 항상 정해진 갯수, 원하는 순서의 요소를 가져야 하는 array 지정이 가능

// tuple + readonly
const PP: readonly [string, number, boolean] = ["nico", 1, true];
// PP[0] = "hi"; // 읽기 전용이라 수정 불가능


// class에 type 지정
class User {
  j: string;
  constructor(k: string) {
    this.j = k;
  }
}