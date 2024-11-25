//Class에 대해서 배워보자!

// 타입스크립트의 클래스(Class)
// - constructor의 매개변수를 지정해주면 this.firstName = firstName 같은 자바스크립트 코드로 자동 변환해준다.
// - private 키워드: 클래스 바깥에서 프로퍼티나 메서드에 접근할 수 없게 하는 키워드. 
// 상속받은 클래스에서도 접근할 수 없다.(자바스크립트에서는 작동x)
// - protected 키워드: 자식 클래스에서는 프로퍼티나 메서드에 접근할 수 있게 하고, 외부에서는 접근할 수 없도록 하는 키워드.
// - 추상 클래스: 다른 클래스가 상속 받을 수는 있지만 새로운 인스턴스는 만들 수 없는 클래스
// - 추상 메서드: 추상 클래스 안에 만들 수 있는 메서드. 추상 클래스를 상속 받는 모든 것들이 구현 해야하는 메서드를 의미한다. 메서드를 구현해서는 안되고 call signature만 작성해야한다.

// abstract Class 추상 클래스
// abstract Class : 다른 클래스가 상송받을 수 있는 class
// abstract 를 사용하면 상속받을 class에 'extends' 를 꼭 추가해주기!
// abstract class User{
//     constructor(
//         private firstName:string,
//         private lastName:string,
//         public nickname:string
//     ) {}
// }
    
//     class Player extends User{ }
    
//     // new User는 사용할 수 없다 -> 상속만 가능
//     const seung = new Player("kim","seung","승현2");
    
    // private한 것들은 대입이 되지 않는다. public 만 가능!
    // seung.firstName = "lee";
    
    
    