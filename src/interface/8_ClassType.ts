// :: 인터페이스는 자바와 같이 클래스에 상속되면 필드와 메소드를 강제할 수 있음

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date): void {
    this.currentTime = d;
  }

  constructor(h: number, m: number) {}
}

// :: 함수 타입 인터페이스 선언 방법
// :: 함수 타입 인터페이스를 상속 받았으면 변수에는 함수가 들어가야한다.

interface funcInterface {
  (x: number, y: string): boolean;
}

const test: funcInterface = (x, y) => {
  return true;
};

test(1, "abc");

// :: 함수가 아닌 Boolean 값을 리턴하기 때문에 오류
// function test2(x, y): funcInterface {
//     return true;
// }

function test3(): funcInterface {
  const func = ((x, y) => {
    return true;
  }) as funcInterface;
  return func;
}

let test3test = test3();
test3test(3, "abc");
