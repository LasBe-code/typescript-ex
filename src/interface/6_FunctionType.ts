// 인터페이스는 객체의 프로퍼티의 타입을 기술할 수도 있지만
// 함수의 타입을 기술할 수도 있다.

interface SearchFunc {
  (source: string, subString: string): boolean;
}

// :: 일반적인 사용
let mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

// search() : 조건 문자열을 찾아서 위치를 확인하는 함수, 없으면 -1 리턴
let mySearch1: SearchFunc;
mySearch1 = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

let mySearch2: SearchFunc = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

// :: 값 생략도 가능
let mySearch3: SearchFunc = function (source, subString) {
  let result = source.search(subString);
  return result > -1;
};
