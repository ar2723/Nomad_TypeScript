// 접근 가능한 위치
    
//     private - 선언한 클래스 안에서만!
//     protected - 선언한 클래스 안, 상속받은 클래스 안
//     public - 다 가능
    
    abstract class User {
        constructor(
            protected firstName:string,
            protected lastName:string,
            protected nickname:string
        ){}
        
        abstract getNickName() : void
            getFullName() {
                return `${this.firstName} ${this.lastName}`
            }
        }
        
        class Player extends User{
                getNickName(){
                console.log(this.nickname);
            }
        }
        
        const seung = new Player("kim","seung","승현2");
        seung.getFullName();