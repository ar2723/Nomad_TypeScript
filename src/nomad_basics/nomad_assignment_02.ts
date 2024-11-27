interface storageItem<T> {
    [keys : string] : T
}

abstract class LocalStorageAPI <T> {
    item : storageItem<T> = {};
    abstract setItem(key : string, value : T) : void
    abstract getItem(key : string) : T
    abstract clearItem(key : string) : void
    abstract clear() : void
}

class LocalStorage <T> extends LocalStorageAPI <T>  {
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