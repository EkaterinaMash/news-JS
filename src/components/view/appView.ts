import News from './news/news';
import Sources from './sources/sources';
import {Data, NewsObject, SourcesObject} from '../types';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Data) {
        const values: Array<NewsObject> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: Data) {
        const values: Array<SourcesObject> = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
