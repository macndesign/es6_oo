import {Page} from './framework/page.js';
import {Image} from './ui/image.js';
import {Button} from './ui/button.js';
import {application} from './app.js';

export class HomePage extends Page {
    constructor() {
        super('Home');
    }

    createElement() {
        super.createElement();

        let i = new Image('../images/drone.jpg');
        i.appendToElement(this.element);

        let styleString = 'width: 300px; height: 80px; margin: 1rem 1rem 0';
        let b = new Button('Self driving var');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Cars'));

        b = new Button('Drones');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Drones'));
    }

    getElementString() {
        return '<div style="text-align: center"></div>';
    }
}