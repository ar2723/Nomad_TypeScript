type PlayerA = {
    name : string
}
type PlayerAA = PlayerA & {
    lastName : string
}

const playerA : PlayerAA = {
    name : "nico",
    lastName : "las"
}

// 타입과 인터페이스는 모두 추상클래스를 대체할 수 있다.
// 클래스가 type을 implements 하는 게 가능하다. 

interface PlayerB {
    name : string
}
interface PlayerBB extends PlayerB {
    lastName : string
}
const playerB : PlayerBB = {
    name : "nico",
    lastName : "las"
}