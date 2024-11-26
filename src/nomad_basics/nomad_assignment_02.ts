type storageItem <T> = {
    [keys : string] : T
}

abstract class LocalStorageAPI <T> {
    constructor(
        protected item : storageItem<T>
    ) {}
    abstract setItem(key : string, value : T) : void
    abstract getItem(key : string) : T
    abstract clearItem(key : string) : void
    abstract clear() : void
}

class localStorageAPI <T> extends LocalStorageAPI <T>  {
    setItem(key : string, value : T) {
        super.item[key] = value;
    }
    getItem(key : string) {
        return super.item[key];
    }
    clearItem(key : string) {
        delete super.item[key];
    }
    clear() {
        super.item = {};
    }
}

type GeolocationAPI = {
    (successFn: () => {}, errorFn? : () => {}, optionObj? : object): number,
    (success : boolean, error? : boolean, options? : unknown) : number
}

class geolocation {
    private position : number = 0;

    public getCurrentPosition : GeolocationAPI = (successFn, errorFn, optionObj) => {
        if(typeof successFn === 'function') {
            return this.position;
        }
        else {
            return this.position;
        }
        
    }
}