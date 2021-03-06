
abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static get onlyInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.onlyInstance;
const accounting2 = AccountingDepartment.onlyInstance;

console.log(accounting, accounting2);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

function WithTemplate(template: string, hookId: string) {
  return function<T extends { new (...args: any[]): {name: string} }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if(hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    }
  }
}

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();

interface Greetable {
  name: String;
  greet(phrase: String): void;
}

@WithTemplate('<h1>My Person Object</h1>', 'hookId')
class Person implements Greetable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: String): void {
    console.log(phrase + `${this.name}`)
  }
}

let user1: Greetable;
user1 = new Person('Noëlle');
console.log(typeof(user1));
user1.greet('Hi there I am: ');

const num1 = 2;
if (typeof num1 === 'number') {
  console.log('hello');
} else {

}

console.log("like you the most");

const names = ['phipu', 5, true];
if (typeof names[0] === 'string') {
  names[0].split(' ');
}

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(extractAndConvert({name: 'steven'}, 'name'));

const pers = new Person('Philipp');
