"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./sources.css");
function renderSources(source, sourceItemTemp, fragment) {
    var sourceClone = sourceItemTemp.content.cloneNode(true);
    sourceClone.querySelector('.source__item-name').textContent = source.name;
    sourceClone.querySelector('.source__item').setAttribute('data-source-id', source.id);
    fragment.append(sourceClone);
}
var Sources = /** @class */ (function () {
    function Sources() {
    }
    Sources.prototype.draw = function (data) {
        var fragment = document.createDocumentFragment();
        var sourceItemTemp = document.querySelector('#sourceItemTemp');
        data.forEach(function (item) {
            var name = item.name, id = item.id;
            renderSources({ name: name, id: id }, sourceItemTemp, fragment);
        });
        document.querySelector('.sources').append(fragment);
    };
    return Sources;
}());
exports.default = Sources;
