import './sources.css';
import { SourceInterface, Source } from '../../types';

function renderSources(source: Source, sourceItemTemp: HTMLTemplateElement, fragment: DocumentFragment) {
    const sourceClone: HTMLElement = sourceItemTemp.content.cloneNode(true) as HTMLElement;
    const sourceItemName = sourceClone.querySelector('.source__item-name');
    const sourceItem = sourceClone.querySelector('.source__item');

    if (sourceItem && sourceItemName && source.id) {
        sourceItemName.textContent = source.name;
        sourceItem.setAttribute('data-source-id', source.id);
    }

    fragment.append(sourceClone);
}

class Sources {
    public draw(data: Array<SourceInterface>) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: SourceInterface) => {
            const { name, id } = item;
            renderSources({ name, id }, sourceItemTemp, fragment);
        });

        const sources: HTMLElement = document.querySelector('.sources') as HTMLElement;
        sources.append(fragment);
    }
}

export default Sources;
