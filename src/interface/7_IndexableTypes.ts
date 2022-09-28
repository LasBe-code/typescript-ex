interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
console.log("myArray: ", myArray);
console.log("myArray[0]: ", myArray[0]);

myArray = {
  0: "John",
  1: "Bob",
  2: "Fred",
};
console.log("myArray: ", myArray);
console.log("myArray[0]: ", myArray[0]);

/////////////////////////////////////////////

interface StringArray2 {
  [index: string]: string;
}

let myArray2: StringArray2 = {
  first: "hello",
  second: "hi",
};
console.log("myArray2: ", myArray2);
console.log('myArray2["first"]: ', myArray2["first"]);
