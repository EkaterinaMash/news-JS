export interface Options {
    [property: string]: string;
}

export interface getRespArgument {
    endpoint: string;
    options?: Options;
}

export interface SourcesObject {
    readonly [property: string]: string;
}

export interface NewsObject {
    source: SourcesObject;
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
}

interface DataInterface {
    status: string;
    totalResults?: number;
    sources?: Array<SourcesObject>;
    articles?: Array<NewsObject>;
}

export type Data = Readonly<DataInterface>;

export type callbackFunction = (argument?: Data) => void;
