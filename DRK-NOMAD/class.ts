
// 추상 클래스 : 오직 다른 곳에서 상속 받을수만 있는 클래스, 단독으로 인스턴스 생성은 불가함 (ex. new User). 
abstract class User {
  constructor(
    protected firstName:string, // 외부에서 사용가능하나, 수정접근할 수는 없게 protected가 막아준다. 
    private lastName:string, // private property는 상속 받더라도 하위 클래스에서 사용할 수 없다. 
    public nickname:string, 
  ) {}
  abstract getNickName():void // 추상 메소드 : 구현이 되어있지 않은 메소드, Call Signature만 가지고 있음

  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

// 타입스크립트의 클래스
class Player extends User{
  getNickName(): void { // 추상 메소드가 있는 경우에는, 상속받는 클래스에서 반드시 추상 메소드를 구현해야한다. 
    console.log(this.nickname);
  }
}

const nico = new Player("nico", "las", "니꼬");

