import './news.css';
import { ArticleInterface, Article, ArticlesAmount, ScreenWidth } from '../../types';

function countArticlesAmount(): number {
    if (window.innerWidth <= ScreenWidth.Mobile) {
        return ArticlesAmount.Three;
    } else if (ScreenWidth.Mobile < window.innerWidth && window.innerWidth <= ScreenWidth.Tablet) {
        return ArticlesAmount.Five;
    }
    return ArticlesAmount.Ten;
}

function renderNews(
    article: Article,
    newsItemTemp: HTMLTemplateElement,
    fragment: DocumentFragment,
    idx: number
): void {
    const newsClone: HTMLElement = newsItemTemp.content.cloneNode(true) as HTMLElement;
    const newsPhoto: HTMLElement = newsClone.querySelector('.news__meta-photo') as HTMLElement;
    const newsItem = newsClone.querySelector('.news__item');
    const newsAuthor = newsClone.querySelector('.news__meta-author');
    const newsDate = newsClone.querySelector('.news__meta-date');
    const newsTitle = newsClone.querySelector('.news__description-title');
    const newsSource = newsClone.querySelector('.news__description-source');
    const newsContent = newsClone.querySelector('.news__description-content');
    const newsReadMore = newsClone.querySelector('.news__read-more a');

    if (idx % 2 && newsItem) newsItem.classList.add('alt');
    if (newsPhoto) newsPhoto.style.backgroundImage = `url(${article.urlToImage || 'img/news_placeholder.jpg'})`;
    if (newsAuthor) newsAuthor.textContent = article.author ?? article.source?.name ?? 'Unknown';
    if (newsDate && article.publishedAt)
        newsDate.textContent = article.publishedAt.slice(0, 10).split('-').reverse().join('-');

    if (newsTitle && article.title) newsTitle.textContent = article.title;
    if (newsContent && article.description) newsContent.textContent = article.description;
    if (newsReadMore && article.url) newsReadMore.setAttribute('href', article.url);
    if (newsSource && article.source) newsSource.textContent = article.source.name;

    fragment.append(newsClone);
}

class News {
    public draw(data: Array<ArticleInterface>): void {
        const newsAmount: number = countArticlesAmount();
        const news: Array<ArticleInterface> =
            data.length >= newsAmount ? data.filter((_item: ArticleInterface, idx: number) => idx < newsAmount) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        const newsContainer = document.querySelector('.news');

        news.forEach((item: ArticleInterface, idx: number) => {
            const { author, source, publishedAt, title, description, url, urlToImage } = item;
            renderNews(
                { author, source, publishedAt, title, description, url, urlToImage },
                newsItemTemp,
                fragment,
                idx
            );
        });

        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
