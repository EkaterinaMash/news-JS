import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '39bb69a1d88b4f0abfb3ab8286de6e5e',
        });
    }
}

export default AppLoader;
