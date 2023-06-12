import './sources.css';
import { SourceInterface, Source } from '../../types';

function renderSources(source: Source, sourceItemTemp: HTMLTemplateElement, fragment: DocumentFragment) {
    const sourceClone: HTMLElement = sourceItemTemp.content.cloneNode(true) as HTMLElement;

    sourceClone.querySelector('.source__item-name').textContent = source.name;
    sourceClone.querySelector('.source__item').setAttribute('data-source-id', source.id);

    fragment.append(sourceClone);
}

class Sources {
    public draw(data: Array<SourceInterface>) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp');

        data.forEach((item: SourceInterface) => {
            const { name, id } = item;
            renderSources({ name, id }, sourceItemTemp, fragment);
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
