/* INTERFACES */
interface IdName {
  id: number;
  name: string;
}

interface DescrValue {
  descr: string;
  value: number;
}

const user: IdName = {
  id: 1,
  name: "Joseph",
};

console.log(`user = ${JSON.stringify(user, null, 4)}`);

/* OPTIONAL PROPERTIES */
interface IOptional {
  id: number;
  name?: string;
}

const optionalId: IOptional = {
  id: 1,
};
const optionalIdName: IOptional = {
  id: 2,
  name: "optional name",
};
console.log(JSON.stringify(optionalId));
console.log(JSON.stringify(optionalIdName));

/* WEAK TYPES */
interface IWeakType {
  id?: number;
  name?: string;
}
const weakTypeNoOverlap: IWeakType = {};
console.log(JSON.stringify(weakTypeNoOverlap));

/* 'IN' OPERATOR */
function printNameOrValue(obj: IdName | DescrValue): void {
  if ("id" in obj) {
    console.log(`obj.name : ${obj.name}`);
  }
  if ("descr" in obj) {
    console.log(`obj.value : ${obj.value}`);
  }
}

printNameOrValue({
  id: 1,
  name: "nameValue",
});
printNameOrValue({
  descr: "description",
  value: 2,
});

/* 'KEYOF' KEYWORD */
interface Person {
  id: number;
  name: string;
}
type PersonPropertyName = keyof Person;

function getProperty(key: PersonPropertyName, value: Person) {
  console.log(`${key} = ${value[key]}`);
}
getProperty("id", { id: 1, name: "firstName" });
getProperty("name", { id: 2, name: "secondName" });
//getProperty("telephone", { id: 3, name: "thirdName" });

/* -----CLASSES----- */
class SimpleClass {
  id?: number;
  print(): void {
    console.log(`SimpleClass.print() called.`);
  }
}
const mySimpleClass = new SimpleClass();
mySimpleClass.print();

/* 'THIS' KEYWORD */
class SimpleClass2 {
  id?: number;
  print(): void {
    console.log(`SimpleClass2.id = ${this.id}`);
  }
}
const mySimpleClass2 = new SimpleClass2();
mySimpleClass2.id = 2020;
mySimpleClass2.print();

/* IMPLEMENTING INTERFACES */
class ClassA implements Print {
  print(): void {
    console.log(`ClassA.print() called.`);
  }
}
class ClassB implements Print {
  print(): void {
    console.log(`ClassB.print() called.`);
  }
}

interface Print {
  print(): void;
}
function printClass(a: Print) {
  a.print();
}

const classA = new ClassA();
const classB = new ClassB();
printClass(classA);
printClass(classB);

class ClassC {
  print(): void {
    console.log(`ClassC.print() called.`);
  }
}
const classC = new ClassC();
printClass(classC);

/* CLASS CONSTRUCTORS */
class ClassWithConstructor {
  id: number;
  constructor(id: number) {
    this.id = id;
  }
}

const classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`);

/* CLASS MODIFIERS */
class ClassWithPublicProperty {
  public id?: number;
}
const publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;

class ClassWithPrivateProperty {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
}
const privateAccess = new ClassWithPrivateProperty(20);

console.log(JSON.stringify(publicAccess));
console.log(JSON.stringify(privateAccess));

/* JS PRIVATE FIELDS */
class ClassES6Private {
  #id: number;
  constructor(id: number) {
    this.#id = id;
  }
  print() {
    console.log(`es6 private class = ${this.#id}`);
  }
}
const es6PrivateClass = new ClassES6Private(10);
console.log(`es6 private class = ${JSON.stringify(es6PrivateClass)}`);
es6PrivateClass.print();

/* CONSTRUCTOR PARAMETER PROPERTIES */
class ClassWithCtorMods {
  constructor(public id: number, private name: string) {}
}
const myClassMod = new ClassWithCtorMods(1, "test");
console.log(`myClassMod.id = ${myClassMod.id}`);
// console.log(`myClassMod.name = ${myClassMod.name}`);

/* READONLY */
class ClassWithReadonly {
  readonly name: string;
  constructor(_name: string) {
    this.name = _name;
  }
}
const readOnly = new ClassWithReadonly("I am readonly!");
console.log(readOnly.name);

/* GET & SET */
class ClassWithAccessors {
  private _id = 0;
  get id(): number {
    console.log(`get id property`);
    return this._id;
  }
  set id(value: number) {
    console.log(`set id property`);
    this._id = value;
  }
}

const classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);

/* STATIC FUNCTIONS */
class StaticFunction {
  static printTwo() {
    console.log(`2`);
  }
}
StaticFunction.printTwo();

/* STATIC PROPERTIES */
class StaticProperty {
  static count = 0;
  updateCount() {
    StaticProperty.count++;
  }
}
const firstInstance = new StaticProperty();
const secondInstance = new StaticProperty();
firstInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);
secondInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);

/* NAMESPACES */
// deno-lint-ignore no-namespace
namespace FirstNameSpace {
  export class NameSpaceClass {}
  // class NotExported {}
}

// deno-lint-ignore no-unused-vars
const nameSpaceClass = new FirstNameSpace.NameSpaceClass();
// let notExported = new FirstNameSpace.NotExported();

/* ------INHERITANCE----- */

/* INTERFACE INHERITANCE */
interface Base {
  id: number;
}
interface DerivedFromBase extends Base {
  name: string;
}
class IdNameClass implements DerivedFromBase {
  id = 0;
  name = "nameString";
}
const idName = new IdNameClass();
console.log(idName.id, idName.name);

interface BaseStringOrNumber {
  id: string | number;
}
interface DerivedFromBaseNumber extends BaseStringOrNumber {
  id: number;
}

interface Multiple extends DerivedFromBase, DerivedFromBaseNumber {
  description: string;
}
const multipleObject: Multiple = {
  id: 1,
  name: "myName",
  description: "myDescription",
};
console.log(JSON.stringify(multipleObject));

/* CLASS INHERITANCE */
class BaseClass implements Base {
  id = 0;
}
class DerivedFromBaseClass extends BaseClass implements DerivedFromBase {
  name = "nameString";
}

const derivedClass = new DerivedFromBaseClass();
console.log(JSON.stringify(derivedClass));

interface FirstInterface {
  id: number;
}
interface SecondInterface {
  name: string;
}
class MultipleInterfaces implements FirstInterface, SecondInterface {
  id = 0;
  name = "nameString";
}

const multipleClass = new MultipleInterfaces();
console.log(JSON.stringify(multipleClass));

/* THE SUPER FUNCTION */
class BaseClassWithCtor {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
}
class DerivedClassWithCtor extends BaseClassWithCtor {
  private name: string;
  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }
}

const derivedWithSuper = new DerivedClassWithCtor(1, "Super");
console.log(`derivedWithSuper = ${JSON.stringify(derivedWithSuper, null, 2)}`);

/* FUNCTION OVERRIDING */
class BaseClassWithFn {
  print(text: string) {
    console.log(`BaseClassWithFn.print() : ${text}`);
  }
}
class DerivedClassFnOverride extends BaseClassWithFn {
  print(text: string) {
    console.log(`DerivedClassFnOverride.print(${text})`);
  }
}

const derivedClassFnOverride = new DerivedClassFnOverride();
derivedClassFnOverride.print("test");

class DerivedClassFnCallthrough extends BaseClassWithFn {
  print(text: string) {
    super.print(`from DerivedClassFncallthrough : ${text}`);
  }
}
const derivedCallthrough = new DerivedClassFnCallthrough();
derivedCallthrough.print("text");

/* PROTECTED */
class BaseClassProtected {
  protected id: number;
  private name = "";
  constructor(id: number) {
    this.id = id;
  }
}
class AccessProtected extends BaseClassProtected {
  constructor(id: number) {
    super(id);
    console.log(`base.id = ${this.id}`);
    // console.log(`base.name = ${this.name}`);
  }
}
const accessProtected = new AccessProtected(1);
accessProtected;

/* ABSTRACT CLASSES & METHODS*/
abstract class EmployeeBase {
  public id: number;
  public name: string;
  abstract doWork(): void;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
class OfficeWorker extends EmployeeBase {
  doWork() {
    console.log(`${this.name} : doing work`);
  }
}
class OfficeManager extends OfficeWorker {
  public employees: OfficeWorker[] = [];
  manageEmployees() {
    super.doWork();
    for (const employee of this.employees) {
      employee.doWork();
    }
  }
}

const joeBlogg = new OfficeWorker(1, "Joe");
const jillBlogg = new OfficeWorker(2, "Jill");
const jackManager = new OfficeManager(3, "Jack");
jackManager.employees.push(joeBlogg);
jackManager.employees.push(jillBlogg);
jackManager.manageEmployees();

console.log(
  `officeWorkers = ${JSON.stringify(joeBlogg, null, 2)}, 
  ${JSON.stringify(jillBlogg, null, 2)} : 
  officeManager = ${JSON.stringify(jackManager, null, 2)}`
);

/* INSTANCEOF OPERATOR */
class A {}
class BfromA extends A {}
class CfromA extends A {}
class DfromC extends CfromA {}

console.log(`A instance of A : 
    ${new A() instanceof A}`);
console.log(`BfromA instance of A : 
    ${new BfromA() instanceof A}`);
console.log(`BfromA instance of BfromA : 
    ${new BfromA() instanceof BfromA}`);
console.log(`CfromA instance of BfromA : 
    ${new CfromA() instanceof BfromA}`);
console.log(`DfromC instance of CfromA : 
    ${new DfromC() instanceof CfromA}`);
console.log(`DfromC instance of A : 
    ${new DfromC() instanceof A}`);

/* INTERFACES EXTENDING CLASSES */
class BaseInterfaceClass {
  id = 0;
  print() {
    console.log(`this.id = ${this.id}`);
  }
}
interface BaseInterfaceClassExt extends BaseInterfaceClass {
  setId(id: number): void;
}

class ImplementsExt
  extends BaseInterfaceClass
  implements BaseInterfaceClassExt
{
  setId(id: number): void {
    this.id = id;
  }
}

const baseInt = new ImplementsExt();
baseInt.setId(15);
baseInt.print();
