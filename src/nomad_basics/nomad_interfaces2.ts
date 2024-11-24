interface User {
    firstName : string,
    lastName : string,
    sayHi(name : string) : string,
    fullName() : string
}

interface Human {
    health : number
}

// 인터페이스를 구현할 때는 접근제어자 private와 protected를 사용하지 못한다.
// 추상클래스와 다르게 인터페이스에서는 선언부를 따로 지정할 수 없다.
// 인터페이스는 JS로 컴파일되지 않는다.
class Player implements User, Human {
    constructor (
        public firstName : string, 
        public lastName : string,
        public health : number
    ) {}

    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    
    sayHi(name: string): string {
        return `Hello ${name}. My name is ${this.fullName()}`
    }

    userFn(arg : User) {
        console.log(arg.fullName());
    }
}

const nico2 = new Player('nico', 'las', 1);

nico2.fullName();

nico2.sayHi('seyeong');

nico2.userFn(nico2);

