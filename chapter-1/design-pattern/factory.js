const number = new Object(31);
const string = new Object("hello world");

console.log(number.constructor.name); // Number
console.log(string.constructor.name); // String

class Latte {
  constructor() {
    this.name = "latte";
  }
}

class Espresso {
  constructor() {
    this.name = "Espresso";
  }
}

class LatteFactory {
  static createCoffee() {
    return new Latte();
  }
}

class EspressoFactory {
  static createCoffee() {
    return new Espresso();
  }
}

const factoryList = { LatteFactory, EspressoFactory };

class CoffeeFactory {
  static createCoffee(type) {
    const factory = factoryList[type];
    return factory.createCoffee();
  }
}

const orderLatte = () => {
  const coffee = CoffeeFactory.createCoffee("LatteFactory");
  console.log(coffee.name);
};

const orderEspresso = () => {
  const coffee = CoffeeFactory.createCoffee("EspressoFactory");
  console.log(coffee.name);
};

orderLatte();
orderEspresso();

// * 상위 클래스인 CoffeeFactory에서 중요한 뼈대를 결정하고
// * 하위 클래스인 LatteFactory가 구체적인 내용을 결정하고 있다.
// * 이는 의존성 주입이라고도 할 수 있다.
// * CoffeeFactory에서 LatteFactory의 인스턴스를 생성하는 것이 아닌
// * LatteFactory에서 생성된 인스턴스를 CoffeeFactory에 주입하고 있기 때문이다.
