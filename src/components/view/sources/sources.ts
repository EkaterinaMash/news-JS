import './sources.css';
import { SourcesInterface } from '../../types';

class Sources {
    public draw(data: Array<SourcesInterface>) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp');

        data.forEach((item: SourcesInterface) => {
            const sourceClone: HTMLElement = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
