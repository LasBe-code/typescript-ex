//이 객체가 실제로는 더 많은 프로퍼티를 갖고 있지만,
//컴파일러는 최소한 필요한 프로퍼티가 있는지와 타입이 잘 맞는지만 검사합니다

function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
