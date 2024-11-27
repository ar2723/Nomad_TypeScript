type GeolocationFn = {
    (successFn: () => {}, errorFn? : () => {}, optionObj? : object) : void
    (success : boolean, error? : boolean, options? : unknown) : void
}

interface GeolocationAPI {
    position : GeolocationPosition;
    getCurrentPosition: GeolocationFn;
    watchPosition : GeolocationFn;
    clearWatch(id : number) : void;
}

class geolocation implements GeolocationAPI {

    position = new GeolocationPosition();

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