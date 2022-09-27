// 선택적 프로퍼티: 앞에 "?" 를 추가해 사용

// 인터페이스의 모든 프로퍼티가 필요한 것이 아니기 때문에
// 선택적 프로퍼티들은 객체 안의 몇 개의 프로퍼티만 채워 함수에 전달할 수 있다.

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });

console.log("mySquare: ", mySquare);
