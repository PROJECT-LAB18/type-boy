# SRT-NOMAD

💙 성령 ([@sryung1225](https://github.com/sryung1225)) <br>
💙 2023.04.05 -

- [x] [코딩애플](https://www.youtube.com/watch?v=xkpcNolC270)
- [x] [코딩앙마](https://youtube.com/playlist?list=PLZKTXPmaJk8KhKQ_BILr1JKCJbR0EGlx0)
- [ ] [노마드코더](https://nomadcoders.co/typescript-for-beginners)

<br>

***


## TypeScript
- [공식문서](https://www.typescriptlang.org/ko/)
- **Strongly Typed Programming Langauge**
- 브라우저가 타입스크립트를 이해하지 못하기 때문에 자바스크립트로 변환함 (컴파일)
  - 타입스크립트로 작성한 코드를 읽고, 컴파일 하기 이전에 에러를 미리 판단함
  - 타입스크립트가 성공적으로 컴파일 된다 = 타입스크립트 코드를 제대로 작성했다
- 보기에는 JavaScript와 다른 부분이 없지만,
- TypeScript는 타입 추론을 하기 때문에 오류를 미리 판별해서 알려줌

<br>

## JavaScript vs TypeScript
- JavaScript (동적 언어)
  - **런타임**에 타입 결정 / 오류 발견
- TypeScript (정적 언어)
  - **컴파일 타임**에 타입 결정 / 오류 발견
  - **타입 안정성**을 가짐
    - 코드에 버그가 줄어듦
    - 런타임 에러가 줄어듦
    - 생산성이 늘어남

<br>

```ts
[1, 2, 3, 4] + false 
// JS ? 1,2,3,4false
// TS ? Errors in code : Operator '+' cannot be applied to types 'number[]' and 'boolean'.
```

```ts
// JS
function addJS(num1, num2){
  console.log(num1 + num2);
}
addJS(1); // ? NaN
addJS(1, 2); // ? 3
addJS("hello", "world"); // ? helloworld


// TS
function addTS(num1:number, num2:number){ // 숫자 타입 지정
  console.log(num1 + num2);
}
// addTS(1); // 에러로 실행 불가
addTS(1, 2); // ? 3
// addTS("hello", "world"); // 에러로 실행 불가
```

<br>

## JavaScript vs TypeScript