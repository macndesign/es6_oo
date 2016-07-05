import $ from 'jquery';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';
import {DataTable} from './ui/data-table.js';

let tb = new TitleBar('Other Title');
tb.addLink('Home', 'http://google.com');
tb.addLink('About', '');
tb.appendToElement($('body'));

let image = new Image('../images/drone.jpg');
image.appendToElement($('body'));

let btn = new Button('Click Me');
btn.appendToElement($('body'));

let headers = 'License Make Model Miles'.split(' ');
let dataService = new FleetDataService();
dataService.loadData(fleet);

let dt = new DataTable(headers, dataService.cars);
dt.appendToElement($('body'));

let droneHeaders = 'license model airTimeHours base'.split(' ');
let droneDt = new DataTable(droneHeaders, dataService.drones);
droneDt.appendToElement($('body'));
