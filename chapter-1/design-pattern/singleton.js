const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

console.log(obj1 === obj2); // false

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
  getInstance() {
    return this.instance;
  }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2); //true

const URL = "database url";
const createConnection = (url) => ({ url });

class DB {
  constructor(url) {
    if (!DB.instance) DB.instance = createConnection(url);
    return DB.instance;
  }

  connect() {
    return this.instance;
  }
}

const db1 = new DB(URL);
const db2 = new DB("database url 2");

// * 싱글톤 패턴으로 구현한 카운터

let counter = {
  value: 0,
  increase: function () {
    this.value++;
  },
  decrease: function () {
    this.value--;
  },
  get: function () {
    return this.value;
  },
};
