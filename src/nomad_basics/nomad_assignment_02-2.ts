type GeolocationFn = {
    (successFn: Function, errorFn? : Function, optionObj? : object) : void
    (success : boolean, error? : boolean, options? : unknown) : void
}

interface GeolocationAPI {
    position : GeolocationPosition;
    successFn(pos : GeolocationPosition) : void;
    getCurrentPosition: GeolocationFn;
    watchPosition : GeolocationFn;
    clearWatch(id : number) : void;
}

class geolocation implements GeolocationAPI {

    position = new GeolocationPosition();

    public successFn(pos : GeolocationPosition) {
        console.log(`위도 : ${pos.coords.latitude} | 경도 : ${pos.coords.longitude}`);
    }

    public getCurrentPosition : GeolocationFn = (successFn, errorFn, optionObj) => {
        if(typeof successFn === 'function') {
            this.position.coords.latitude
            console.log(this.position['longitude']);
        }
        if(typeof errorFn === 'function') {
            console.log("현재 위치 정보를 불러올 수 없습니다")
        }
        if(typeof optionObj === 'object') {
            
        }
    }

    public watchPosition : GeolocationFn = (success, error, options) => {
        if(typeof success === 'boolean') {
            console.log(this.position['latitude']);
            console.log(this.position['longitude']);
        }
        if(typeof error === 'boolean') {
            
        }
    }

    public clearWatch(id) {

    }
}