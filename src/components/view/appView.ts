import News from './news/news';
import Sources from './sources/sources';
import { NewsData, ArticleInterface, SourcesData, SourcesInterface } from '../types';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsData) {
        const values: Array<ArticleInterface> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: SourcesData) {
        console.log(data);
        const values: Array<SourcesInterface> = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
