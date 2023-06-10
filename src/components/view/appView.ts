import News from './news/news';
import Sources from './sources/sources';
import { Data, NewsObject, SourcesObject } from '../types';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: Data) {
        const values: Array<NewsObject> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: Data) {
        const values: Array<SourcesObject> = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
