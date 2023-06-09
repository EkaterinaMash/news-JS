import './sources.css';
import {SourcesObject} from '../../types';

class Sources {
    public draw(data: Array<SourcesObject>) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp');

        data.forEach((item: SourcesObject) => {
            const sourceClone: HTMLElement = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
