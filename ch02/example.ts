/* CONST & LET */
let index: number = 0;
if (index == 0) {
  let index: number = 2;
  console.log(`index = ${index}`);
}
console.log(`index = ${index}`);

const constValue = "this should not be changed";

/* UNION TYPES */
function printObject(obj: string | number) {
  console.log(`obj = ${obj}`);
}
printObject(1);
printObject("string value");

/* TYPE GUARDS */
function addWithTypeGuard(arg1: string | number, arg2: string | number) {
  if (typeof arg1 === "string") {
    // arg 1 is treated as a string
    console.log(`arg1 is of type string`);
    return arg1 + arg2;
  }
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    // both are numbers
    console.log(`arg1 and arg2 are numbers`);
    return arg1 + arg2;
  }
  console.log(`default return treat both as strings`);
  return arg1.toString() + arg2.toString();
}

console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`);
console.log(`  1 ,  2  = ${addWithTypeGuard(1, 2)}`);
console.log(`  1 , "2" = ${addWithTypeGuard(1, "2")}`);

/* TYPE ALIASES */
type StringOrNumber = string | number;
function addWithTypeAlias(arg1: StringOrNumber, arg2: StringOrNumber) {
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    // both are numbers
    console.log(`arg1 and arg2 are numbers`);
    return arg1 + arg2;
  }
  return arg1.toString() + arg2.toString();
}

console.log(` "1", "2" = ${addWithTypeAlias("1", "2")}`);
console.log(`  1 ,  2  = ${addWithTypeAlias(1, 2)}`);
console.log(`  1 , "2" = ${addWithTypeAlias(1, "2")}`);

/* ENUMS */
const enum DoorStateConst {
  Open = 10,
  Closed = 20,
}

enum DoorState {
  Open,
  Closed,
}
enum DoorStateString {
  Open = "Open",
  Closed = "Closed",
}

function checkDoorState(state: DoorStateString | DoorState) {
  console.log(`enum value is : ${state}`);
  switch (state) {
    case DoorStateString.Open:
    case DoorState.Open:
      console.log(`Door is open`);
      break;
    case DoorStateString.Closed:
    case DoorState.Closed:
      console.log(`Door is closed`);
      break;
  }
}

checkDoorState(DoorStateString.Open);
checkDoorState(DoorStateString.Closed);
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);
console.log(`const Open = ${DoorStateConst.Open}`);
console.log(`const Closed = ${DoorStateConst.Closed}`);

/* UNDEFINED */
let array = ["123", "456", "789"];
delete array[0];
for (let i = 0; i < array.length; i++) {
  console.log(`array[${i}] = ${array[i]}`);
}

for (let i = 0; i < array.length; i++) {
  checkAndPrintElement(array[i]);
}
function checkAndPrintElement(arrElement: string | undefined) {
  if (arrElement === undefined) console.log(`invalid array element`);
  else console.log(`valid array element : ${arrElement}`);
}

/* NULL */
function printValues(a: number | null) {
  console.log(`a = ${a}`);
}
printValues(1);
printValues(null);

/* CONDITIONALS */
/* TERNARY */
const value: number = 10;
const message: string =
  value > 10 ? "value is larger than 10" : "value is 10 or less";
console.log(message);

/* OPTIONAL CHAINING */
var objectA = {
  nestedProperty: {
    name: "nestedPropertyName",
  },
};
function printNestedOptionalChain(obj: any) {
  if (obj?.nestedProperty?.name) {
    console.log(`name = ${obj.nestedProperty.name}`);
  } else {
    console.log(`name not found or undefined`);
  }
}

printNestedOptionalChain(undefined);
printNestedOptionalChain({
  aProperty: "another property",
});
printNestedOptionalChain({
  nestedProperty: {
    name: null,
  },
});
printNestedOptionalChain({
  nestedProperty: {
    name: "nestedPropertyName",
  },
});

/* NULLISH COALESCING */
function nullishCheck(a?: number | null) {
  console.log(`a : ${a ?? `undefined or null`}`);
}
nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);

/* NULL OR UNDEFINED OPERANDS */
function testNullOperands(a: number, b?: number | null) {
  return a + (b ?? 0);
}

console.log(testNullOperands(5));
console.log(testNullOperands(5, 2));

/* DEFINITE ASSIGNMENT */
var globalString!: string;
setGlobalString("this string is set");
console.log(`globalString = ${globalString}`);
function setGlobalString(value: string) {
  globalString = value;
}

let x: number;
initialize();
// No error!
console.log(x! + x!);
function initialize() {
  x = 10;
}

/* OBJECT */
let structuredObject: object = {
  name: "myObject",
  properties: {
    id: 1,
    type: "AnObject",
  },
};
function printObjectType(a: object) {
  console.log(`a: ${JSON.stringify(a)}`);
}

printObjectType(structuredObject);

/* UNKNOWN */
let a: any = "test";
let aNumber: number = 2;
aNumber = a;

let u: unknown = "an unknown";
u = 1;
let aNumber2: number;
aNumber2 = <number>u;

/* NEVER */
function fail(msg: string): never {
  throw new Error(msg);
}

function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}

/* OBJECT SPREAD */
let firstObj: object = { id: 1, name: "firstObj" };
let secondObj: object = { ...firstObj };
console.log(`secondObj : ${JSON.stringify(secondObj)}`);

let nameObj: object = { name: "nameObj name" };
let idObj: object = { id: 1 };
let obj3 = { ...nameObj, ...idObj };
console.log(`obj3 = ${JSON.stringify(obj3)}`);

let objPrec1: object = { id: 1, name: "obj1 name" };
let objPrec2: object = { id: 1001, desc: "obj2 description" };
let objPrec3 = { ...objPrec1, ...objPrec2 };
console.log(`objPrec3 : ${JSON.stringify(objPrec3, null, 4)}`);

let firstArray = [1, 2, 3];
let secondArray = [3, 4, 5];
let thirdArray = [...firstArray, ...secondArray];
console.log(`third array = ${thirdArray}`);

let objArray1 = [{ id: 1, name: "first element" }];
let objArray2 = [{ id: 2, name: "second element" }];
let objArray3 = [...objArray1, { id: 3, name: "third element" }, ...objArray2];
console.log(`objArray3 = ${JSON.stringify(objArray3, null, 4)}`);

/* TUPLES */
let tuple1: [string, boolean];
tuple1 = ["test", true];

/* TUPLE DESTRUCTURING */
console.log(`tuple1[0] : ${tuple1[0]}`);
console.log(`tuple1[1] : ${tuple1[1]}`);

let [tupleString, tupleBoolean] = tuple1;
console.log(`tupleString = ${tupleString}`);
console.log(`tupleBoolean = ${tupleBoolean}`);

/* OPTIONAL TUPLE ELEMENTS */
let tupleOptional: [string, boolean?];
tupleOptional = ["test", true];
tupleOptional = ["test"];
console.log(`tupleOptional[0] : ${tupleOptional[0]}`);
console.log(`tupleOptional[1] : ${tupleOptional[1]}`);

/* TUPLE & SPREAD SYNTAX */
let tupleRest: [number, ...string[]];
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string1", "string2"];
console.log(`tuplerest = ${tupleRest}`);

/* OBJECT DESTRUCTURING */
let complexObject = {
  aNum: 1,
  bStr: "name",
  cBool: true,
};
let { aNum, bStr, cBool } = complexObject;

console.log(`aNum : ${aNum}`);
console.log(`bStr : ${bStr}`);
console.log(`cBool : ${cBool}`);

let { aNum: objId, bStr: objName, cBool: isValid } = complexObject;
console.log(`objId : ${objId}`);
console.log(`objName : ${objName}`);
console.log(`isValid : ${isValid}`);

/* FUNCTIONS */

/* OPTIONAL PARAMETERS */
function concatValues(a: string, b?: string) {
  console.log(`a + b = ${a + b}`);
}
concatValues("first", "second");
concatValues("third");

/* DEFAULT PARAMETERS */
function concatWithDefault(a: string, b: string = "default") {
  console.log(`a + b = ${a + b}`);
}
concatWithDefault("first", "second");
concatWithDefault("third");

/* REST PARAMETERS */
function testArguments(...args: string[] | number[]) {
  for (let i in args) {
    console.log(`args[${i}] = ${args[i]}`);
  }
}
testArguments("1");
testArguments(10, 20);

/* FUNCTION CALLBACKS */
var myCallback = function (text: string) {
  console.log("myCallback called with " + text);
};
function withCallbackArg(message: string, callbackFn: Function) {
  console.log("withCallback called, message : " + message);
  callbackFn(message + " from withCallback");
}
withCallbackArg("initial text", myCallback);

/* FUNCTION SIGNATURES AS PARAMETERS */
function myCallback2(text: string): void {
  console.log(`myCallback2 called with ${text}`);
}
function withCallbackArg2(message: string, callbackFn: (text: string) => void) {
  console.log(`withCallback2 called, message : ${message}`);
  callbackFn(`${message} from withCallback2"`);
}
withCallbackArg2("more initial text", myCallback2);

/* FUNCTION OVERRIDES */
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: boolean, b: boolean): boolean;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add("first", "second"));
console.log(add(1, 2));
console.log(add(false, true));

/* LITERALS */
type AllowedStringValues = "one" | "two" | "three";
type AllowedNumericValues = 1 | 20 | 65535;
function withLiteral(input: AllowedStringValues | AllowedNumericValues) {
  console.log(`called with : ${input}`);
}

withLiteral("one");
withLiteral("two");
withLiteral("three");
withLiteral(65535);
withLiteral("four");
withLiteral(2);
