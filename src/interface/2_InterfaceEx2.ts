interface LabeledValue {
  label: string;
}

function printLabel2(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

function printLabel2_2(label: string) {
  console.log(label);
}

// string이 아닌 label 프로퍼티를 가진 객체는 함수에 들어가면 에러 발생
let myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj2);
printLabel2_2(myObj2.label);
