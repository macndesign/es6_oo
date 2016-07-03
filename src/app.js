import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';


let dataService = new FleetDataService();
dataService.loadData(fleet);

// console.log(dataService.cars);

// for (let car of dataService.cars) {
//     console.log(car.license);
// }

// for (let drone of dataService.drones) {
//     console.log(drone.base);
// }

// for (let e of dataService.errors) {
//     console.log(e);
// }

// let car = dataService.getCarByLicense('MNO345');
// console.log(car);

// let cars = dataService.getCarsSortedByLicense();
// for (let car of cars) {
//     console.log(car.license);
// }


let cars = dataService.filterCarsByMake('e');
for (let car of cars) {
    console.log(car.make);
}