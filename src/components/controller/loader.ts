import {Options, getRespArgument, Data, callbackFunction} from '../types'

class Loader {
    private baseLink: string;
    private options: Options;

    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp(
        {endpoint, options = {}}: getRespArgument,
        callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    protected errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Options, endpoint: string): string {
        const urlOptions: Options = {...this.options, ...options};
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method: string, endpoint: string, callback: callbackFunction, options: Options = {}) {
        fetch(this.makeUrl(options, endpoint), {method})
            .then(this.errorHandler)
            .then((res: Response): Promise<Type> => res.json())
            .then((data: Data): void => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
