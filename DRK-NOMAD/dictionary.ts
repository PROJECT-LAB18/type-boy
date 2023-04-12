type Words = {
  [key:string] : string // key 에 해당하는 이름 자유롭게 변경가능
}

class Dict { 
  private words: Words // initializer 없이 선언 후, 
  constructor() {
    this.words = {} // 초기화
  }

  add(word: Word) { // 클래스 자체를 타입 인자로 전달할 수 있다. 
    if (this.words[word.term]===undefined){
      this.words[word.term] = word.def;
    }
  }

  def(term: string){
    return this.words[term]
  }

  static hello(){
    return "hello"
  }
}

class Word {
  constructor(
    public readonly term: string, // readonly를 통해 읽어들일 순 있지만, 수정을 불가하게 막을 수 있음.
    public def: string,
  ) {}
}

const kimchi = new Word('kimchi', '김치');

const dict = new Dict()

dict.add(kimchi)
dict.def("kimchi")

Dict.hello(); // static 메소드 실행

// kimchi.term = '기무치'; // readonly라 수정을 막음

