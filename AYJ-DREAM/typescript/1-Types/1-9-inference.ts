/**
 * Type Inference
 */

let text = 'hello';

function print(message = 'hello') {
  //'message' 매개 변수는 암시적으로 'any' 형식이지만, 사용량에서 더 나은 형식을 유추할 수 있습니다.
  console.log(message);
}
print('hello');

//최대한 인자는 어떤 타입을 가지고 있는지 명시하는게 좋다.

function add(x: number, y: number) {
  return x + y;
}
const result = add(1, 2);

//타입 추론은 팀의 스타일 가이드를 명확하게 정하고 일관성 있게 코드를 짜는게 중요하다.
