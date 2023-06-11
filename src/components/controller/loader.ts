import { Options, getRespArgument, callbackFunction, NewsData, SourcesData } from '../types';

class Loader {
    baseLink: string;
    options: Options;

    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp(
        { endpoint, options = {} }: getRespArgument,
        callback: callbackFunction<NewsData | SourcesData> = () => {
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
        const urlOptions: Options = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load(
        method: string,
        endpoint: string,
        callback: callbackFunction<NewsData | SourcesData>,
        options: Options = {}
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response): Promise<NewsData | SourcesData> => res.json())
            .then((data: NewsData | SourcesData): void => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
