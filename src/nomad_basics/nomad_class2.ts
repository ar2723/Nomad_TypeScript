type Words = {
    [key : string] : string | string[]
};

class Dict {
    private words : Words;
    constructor() {
        // 단어장 객체 초기화
        this.words = {};
    }
    add(word: Word) {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        } 
    }
    def(term : string) {
        return this.words[term];
    }
    
    static hello() {
        return "hello"
    }
}

// 단어 클래스, 타입으로도 사용할 수 있음
// 클래스를 타입으로 사용할 때 해당 클래스 안에 선언된 변수들을
// 객체 처럼 접근할 수 있음
class Word {
    constructor(public readonly term : string, public readonly def : string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");