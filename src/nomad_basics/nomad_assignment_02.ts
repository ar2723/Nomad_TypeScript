type storageItem<T> = {
    [keys : string] : T
}

interface LocalStorageAPI <T> {
    item : storageItem<T>
    setItem(key : string, value : T) : void
    getItem(key : string) : T
    clearItem(key : string) : void
    clear() : void
}

abstract class LocalStorage2<T> implements LocalStorageAPI<T> {
    item : storageItem<T> = {};
    abstract setItem(key : string, value : T) : void
    abstract getItem(key : string) : T
    abstract clearItem(key : string) : void
    abstract clear() : void
}

class localStorageAPI <T> extends LocalStorage2 <T>  {
    setItem(key : string, value : T) {
        this.item[key] = value;
    }
    getItem(key : string) {
        return this.item[key];
    }
    clearItem(key : string) {
        delete this.item[key];
    }
    clear() {
        this.item = {};
    }
}


type Position = {
    [keys in 'latitude' | 'longitude']: number
}
type GeolocationFn = {
    (successFn: () => {}, errorFn? : () => {}, optionObj? : object) : void
    (success : boolean, error? : boolean, options? : unknown) : void
}

interface GeolocationAPI {
    position : Position;
    getCurrentPosition: GeolocationFn;
    watchPosition : GeolocationFn;
    clearWatch(id : number) : void;
}

class geolocation implements GeolocationAPI {
    position = {'latitude' : 0, 'longitude' : 0} ;

    public getCurrentPosition : GeolocationFn = (successFn, errorFn, optionObj) => {
        if(typeof successFn === 'function') {
            console.log(this.position['latitude']);
            console.log(this.position['longitude']);
        }
    }

    public watchPosition : GeolocationFn = (success, error, options) => {
        if(typeof success === 'boolean') {
            console.log(this.position['latitude']);
            console.log(this.position['longitude']);
        }
    }

    public clearWatch(id) {
        
    }
}