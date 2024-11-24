// type Nickname = string
// type Food = string;
// type Friends = Array<string>

// // 이렇게 특정 값으로만 입력하도록 제한할 수도 있음
// type Team = "read" | "blue" | "yellow"
// type Health = 1 | 5 | 10;

// // 인터페이스 - 객체(object)의 모양을 먼저 잡아주기 위한 기능
// // 하지만 type과는 다르게 다른 타입에 대해서는 정의할 수 없음
// // 인터페이스끼리도 상속이 가능
// // 인터페이스는 중복으로 선언해서 서로 다른 프로퍼티들을 중첩시킬 수 있음
// interface User {
//     name : string
// };

// interface Player extends User {
//     nickName : string,
//     health : Health,
//     team : Team
// }

// const nico : Player = {
//     name : "nicolas",
//     nickName : "nico",
//     health : 10,
//     team : "blue"
// };

// 인터페이스 방식 말고 아래와 같이 타입 형식으로도 가능
// type 키워드는 interface에 비해서 좀 더 많은 (목적으로 활용)걸 할 수 있음

// type User = {
// name : string
// }

// & -> 그리고 의 의미임 
// type Player = User & {
// }

// const nico : Player = {
// name : "nico"
// }
