// 접근 가능한 위치
    
//     private - 선언한 클래스 안에서만!
//     protected - 선언한 클래스 안, 상속받은 클래스 안
//     public - 다 가능

// // 추상 클래스
// 추상클래스의 경우 JS로 컴파일 될 때, 일반 클래스로 바뀌게 된다.
// abstract class User {
//     // 인스턴스 선언부
//     constructor(
//         private firstName : string,
//         private lastName : string,
//         protected nickName : string
//     ) {}

//     // 추상 메소드 -> 내부 구현 없이 그냥 call signiture만 작성
//     abstract getNickName() : void

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// // 상속 클래스
// class Player extends User {
//     getNickName(): void {
//         console.log(this.nickName)
//     }
// }

// // Player 클래스 인스턴스 생성
// const nico = new Player("nico", "las", "니꼬");

// nico.getFullName();
// nico.getNickName();