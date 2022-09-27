interface SquareConfig2 {
  color: string;
  width: number;
}

function createSquare2(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// :: 초과 프로퍼티 검사로 에러 발생
// const mySquare2 = createSquare2({color:"red", another:123})

// :: 객체를 파라미터로 넣으면 초과 프로퍼티 검사 X
// :: 그러나 객체에 공통 프로퍼티가 없으면 에러 발생
const mySquare2 = { color: "red", another: 123 };
createSquare2(mySquare2);
