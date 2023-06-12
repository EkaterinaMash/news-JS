import './news.css';
import { ArticleInterface, Article, ArticlesAmount, ScreenWidth } from '../../types';

function countArticlesAmount(): number {
    if (window.innerWidth <= ScreenWidth.Mobile) {
        return ArticlesAmount.Three;
    } else if (ScreenWidth.Mobile < window.innerWidth && window.innerWidth <= ScreenWidth.Tablet) {
        return ArticlesAmount.Five;
    } else if (ScreenWidth.Tablet < window.innerWidth) {
        return ArticlesAmount.Ten;
    }
}

function renderNews(
    newsObject: Article,
    newsItemTemp: HTMLTemplateElement,
    fragment: DocumentFragment,
    idx: number
): void {
    const newsClone: HTMLElement = newsItemTemp.content.cloneNode(true) as HTMLElement;

    if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');

    const newsPhoto: HTMLElement = newsClone.querySelector('.news__meta-photo');

    newsPhoto.style.backgroundImage = `url(${newsObject.urlToImage || 'img/news_placeholder.jpg'})`;
    newsClone.querySelector('.news__meta-author').textContent = newsObject.author || newsObject.source.name;
    newsClone.querySelector('.news__meta-date').textContent = newsObject.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

    newsClone.querySelector('.news__description-title').textContent = newsObject.title;
    newsClone.querySelector('.news__description-source').textContent = newsObject.source.name;
    newsClone.querySelector('.news__description-content').textContent = newsObject.description;
    newsClone.querySelector('.news__read-more a').setAttribute('href', newsObject.url);

    fragment.append(newsClone);
}

class News {
    public draw(data: Array<ArticleInterface>): void {
        const newsAmount: number = countArticlesAmount();
        const news: Array<ArticleInterface> =
            data.length >= newsAmount ? data.filter((_item: ArticleInterface, idx: number) => idx < newsAmount) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp');

        news.forEach((item: ArticleInterface, idx: number) => {
            const { author, source, publishedAt, title, description } = item;
            renderNews({ author, source, publishedAt, title, description }, newsItemTemp, fragment, idx);
        });

        document.querySelector('.news').innerHTML = '';
        document.querySelector('.news').appendChild(fragment);
    }
}

export default News;
