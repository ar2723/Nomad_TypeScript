type GeolocationFn = {
    (successFn: (pos: GeolocationPosition) => void): void;
    (successFn: (pos: GeolocationPosition) => void, errorFn: (err: string) => void): void;
    (successFn: (pos: GeolocationPosition) => void, errorFn: (err: string) => void, optionObj: object): void;
};

interface GeolocationAPI {
    position : GeolocationPosition;
    getCurrentPosition : GeolocationFn
    watchPosition : GeolocationFn
    clearWatch(id : number) : void;
}

class geolocation implements GeolocationAPI {

    position = new GeolocationPosition(); 
    
    getCurrentPosition (
        successFn: (pos: GeolocationPosition) => void,
        errorFn?: (err: string) => void,
        optionObj?: object
    ) {
        try {
            successFn(this.position);
        } catch (error) {
            if (errorFn) errorFn(error);

        } finally {
            if(optionObj) {
            
            }
        }
    }

    watchPosition (
        success: (pos: GeolocationPosition) => void,
        error?: (err: string) => void,
        option?: object
    ) {
        try {
            success(this.position);
        } catch (err) {
            if (error) error(err);
            
        } finally {
            if(option) {}
        }
    }

    clearWatch(id : number) {

    }
}

const successFn = (pos: GeolocationPosition) => {
    console.log(`위도: ${pos.coords.latitude} | 경도: ${pos.coords.longitude}`);
}

const errorFn = (err) => {
    console.log("에러 : " + err);
}