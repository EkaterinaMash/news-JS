"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./news.css");
var types_1 = require("../../types");
function countArticlesAmount() {
    if (window.innerWidth <= types_1.ScreenWidth.Mobile) {
        return types_1.ArticlesAmount.Three;
    }
    else if (types_1.ScreenWidth.Mobile < window.innerWidth && window.innerWidth <= types_1.ScreenWidth.Tablet) {
        return types_1.ArticlesAmount.Five;
    }
    else if (types_1.ScreenWidth.Tablet < window.innerWidth) {
        return types_1.ArticlesAmount.Ten;
    }
}
function renderNews(article, newsItemTemp, fragment, idx) {
    var newsClone = newsItemTemp.content.cloneNode(true);
    if (idx % 2)
        newsClone.querySelector('.news__item').classList.add('alt');
    var newsPhoto = newsClone.querySelector('.news__meta-photo');
    newsPhoto.style.backgroundImage = "url(".concat(article.urlToImage || 'img/news_placeholder.jpg', ")");
    newsClone.querySelector('.news__meta-author').textContent = article.author || article.source.name;
    newsClone.querySelector('.news__meta-date').textContent = article.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');
    newsClone.querySelector('.news__description-title').textContent = article.title;
    newsClone.querySelector('.news__description-source').textContent = article.source.name;
    newsClone.querySelector('.news__description-content').textContent = article.description;
    newsClone.querySelector('.news__read-more a').setAttribute('href', article.url);
    fragment.append(newsClone);
}
var News = /** @class */ (function () {
    function News() {
    }
    News.prototype.draw = function (data) {
        var newsAmount = countArticlesAmount();
        var news = data.length >= newsAmount ? data.filter(function (_item, idx) { return idx < newsAmount; }) : data;
        var fragment = document.createDocumentFragment();
        var newsItemTemp = document.querySelector('#newsItemTemp');
        news.forEach(function (item, idx) {
            var author = item.author, source = item.source, publishedAt = item.publishedAt, title = item.title, description = item.description, url = item.url, urlToImage = item.urlToImage;
            renderNews({ author: author, source: source, publishedAt: publishedAt, title: title, description: description, url: url, urlToImage: urlToImage }, newsItemTemp, fragment, idx);
        });
        document.querySelector('.news').innerHTML = '';
        document.querySelector('.news').appendChild(fragment);
    };
    return News;
}());
exports.default = News;
