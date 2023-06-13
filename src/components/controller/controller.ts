import AppLoader from './appLoader';
import { CallbackFunction, NewsData, SourcesData } from '../types';

class AppController extends AppLoader {
    public getSources(callback: CallbackFunction<SourcesData>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: CallbackFunction<NewsData>): void {
        let target: HTMLElement = e.target as HTMLElement;
        const newsContainer: HTMLElement = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId) {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                }

                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
