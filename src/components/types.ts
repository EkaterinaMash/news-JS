export interface Options {
    [property: string]: string;
}

export interface getRespArgument {
    endpoint: string;
    options?: Options;
}

export interface SourcesInterface {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

type Source = Pick<SourcesInterface, 'id' | 'name'>;

export interface ArticleInterface {
    source: Source;
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
}

export type Article = Partial<ArticleInterface>;

interface DataInterface {
    status: string;
    totalResults: number;
    sources: Array<SourcesInterface>;
    articles: Array<ArticleInterface>;
}

type NewsDataInterface = Pick<DataInterface, 'status' | 'totalResults' | 'articles'>;
type SourcesDataInterface = Pick<DataInterface, 'status' | 'sources'>;

export type NewsData = Readonly<NewsDataInterface>;
export type SourcesData = Readonly<SourcesDataInterface>;

export type callbackFunction<Type> = (argument?: Type) => void;

export enum ArticlesAmount {
    Three = 3,
    Five = 5,
    Ten = 10,
}

export enum ScreenWidth {
    Mobile = 320,
    Tablet = 640,
}
