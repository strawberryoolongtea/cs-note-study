# 디자인 패턴

디자인 패턴은 다음과 같이 분류될 수 있다.

```
Creational

- Singleton
- Factory
- Abstract Factory
- Builder
- Prototype

Structural

- Adapter
- Composite
- Proxy
- Fly Weight
- Facade
- Bridge
- Decorator

Behavioural

- Template Method
- Mediator
- Chain Of Responsibility
- Observer
- Strategy
- Command
- State
- Visitor
- Iterator
- Interpreter
- Memento
```

- Creational

  - 객체 생성 메커니즘에 관련된 패턴이다.
  - 상황에 알맞은 객체를 생성하기 위해 사용한다.

- Structural
  - 객체 간의 구조와 관계를 쉽게 인지하도록 설계하기 위해 사용한다.
- Behavioural
  - 객체 간의 커뮤니케이션 패턴을 정의한다.
  - 객체 간 커뮤니케이션의 유연성을 증대시킨다.

## 싱글톤 패턴 singletom pattern

- 단 하나의 인스턴스를 생성해 사용하는 패턴이다.
- 가장 간단한 예제로는 객체 리터럴을 이용하는 방법이다.
- 하나의 인스턴스만을 생성하기 때문에 전역적으로 사용할 수 있다.
- 메모리 낭비를 방지할 수 있다.
- 싱글톤 인스턴스가 너무 많은 일을 하거나 데이터를 공유할 경우에 결합도가 높아진다.
- 멀티스레드 환경에서는 동기화 처리를 하지 않을 경우 인스턴스가 2개 생성될 가능성이 있다.
- 의존성 주입을 통해 결합을 느슨하게 할 수 있다.
  - 의존성 주입자가 메인 모듈과 하위 모듈 중간에서 간접적으로 의존성을 줄 수 있다. (디커플링)
  - 모듈이 더 분리되는 것이기 때문에 복잡성이 증가하고 런타임 페널티가 있을 수 있다.
  - 상위 모듈은 하위 모듈에서 어떤 것도 가져오지 않아야 한다.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
```

## 팩토리 패턴 factory pattern

- 상속 관계에 있는 두 클래스에서 상위 클래스가 중요한 뼈대를 결정하고 하위 클래스에서 구체적인 내용을 결정하는 패턴이다.
- 상위 클래스와 하위 클래스가 분리되기 때문에 느슨한 결합을 가진다.
- 상위 클래스에서는 인스턴스 생성 방식을 전혀 알 필요가 없기 때문에 더 많은 유연성을 갖게 된다.
- 객체 생성 로직이 분리되어 있기 때문에 리팩터링 시 유지 보수성이 증가된다.
- 전달인자에 따라 다른 타입의 객체를 생성하는 `new Object()` 로 구현할 수 있다.
- 비슷한 객체를 반복적으로 생성해야 할 때 사용하는 패턴이다.

```javascript
const number = new Object(31);
const string = new Object("hello world");

number.constructor.name; // number
```

## 전략 패턴 strategy pattern / policy pattern

- 전략 패턴 또는 정책 패턴이라고 한다.
- 객체의 행위를 바꾸고 싶은 경우 직접 수정하지 않고 전략이라고 부르는 캡슐화한 알고리즘을 사용한다.
- 이를 통해서 컨텍스트 안에서 바꿔주며 상호 교체가 가능하게 만드는 패턴이다.
- 컨텍스트란 상황, 맥락, 문맥을 의미하며 어떤 작업을 완료하는 데 필요한 모든 관련 정보를 말한다.
- 전략 패턴을 활용한 라이브러리로 `passport` 가 있다.
- 상황에 따라 다양한 알고리즘을 필요로 하는 경우 사용할 수 있다.

### 전략 패턴의 구성 요소

- 전략 strategy : 구체화된 여러 알고리즘들의 추상화로 변하는 부분을 담당한다.
  - 전략 콘크리트 concrete strategy : 여러 알고리즘의 실제 구현이다.
- 전략 사용자 context : 전략을 사용하는 프로그램의 흐름으로 변하지 않는다.
- 전략 제공자 client : 전략 사용자에게 실제 전략으로 사용할 전략 콘크리트를 주입한다.

## 옵저버 패턴 observer pattern

## 프록시 패턴과 프록시 서버 proxy pattern and proxy server

## 이터레이터 패턴 iterator pattern

## 노출모듈 패턴 revealing module pattern

## MVC 패턴 model + view + controller

## MVP 패턴 model + view + presenter

## MVVM 패턴 model + view + view model
