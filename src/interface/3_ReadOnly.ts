// readonly : 객체가 생성될 때만 값을 수정 가능하다.

// 불변 값을 만들 때
// -변수     : const
// -프로퍼티 : readonly
interface xy {
  readonly x: string;
  readonly y: number;
}

let z: xy = { x: "RIPX", y: 10 };
// ::ERROR::
// z.x="hello";
