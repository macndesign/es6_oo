import $ from 'jquery';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {GoogleMap} from './ui/google-map.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);

let centerOfMap = {lat: 40.783661, lng: -73.965883};
let map = new GoogleMap(centerOfMap, dataService.cars);

map.appendToElement($('body'));
