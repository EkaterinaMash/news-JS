import './news.css';
import { ArticleInterface, ArticlesAmount, ScreenWidth } from '../../types';

function countArticlesAmount(): number {
    if (window.innerWidth <= ScreenWidth.Mobile) {
        return ArticlesAmount.Three;
    } else if (ScreenWidth.Mobile < window.innerWidth && window.innerWidth <= ScreenWidth.Tablet) {
        return ArticlesAmount.Five;
    } else if (ScreenWidth.Tablet < window.innerWidth) {
        return ArticlesAmount.Ten;
    }
}

class News {
    public draw(data: Array<ArticleInterface>): void {
        const newsAmount: number = countArticlesAmount();
        const news: Array<ArticleInterface> =
            data.length >= newsAmount ? data.filter((_item: ArticleInterface, idx: number) => idx < newsAmount) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp');

        news.forEach((item: ArticleInterface, idx: number) => {
            const newsClone: HTMLElement = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');

            const newsPhoto: HTMLElement = newsClone.querySelector('.news__meta-photo');
            newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
            newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsClone.querySelector('.news__description-title').textContent = item.title;
            newsClone.querySelector('.news__description-source').textContent = item.source.name;
            newsClone.querySelector('.news__description-content').textContent = item.description;
            newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        document.querySelector('.news').innerHTML = '';
        document.querySelector('.news').appendChild(fragment);
    }
}

export default News;
