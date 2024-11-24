// // 추상 클래스
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
