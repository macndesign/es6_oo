import {BaseElement} from './base-element.js';

export class Image extends BaseElement {
    constructor(filename) {
        super();
        this.filename = filename;
    }

    getElementString() {
        return `
            <image src="${this.filename}" style="width: 100%" />
        `;
    }
}