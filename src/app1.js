'use strict';

class Drone {
    constructor(id, name) {
        this._id = id;
        this.name = name;
    }

    get id() {
        console.log('in id getter');
        return `${this._id} TEMPORARY`;
    }

    set id(value) {
        this._id = value;
    }

    static getCompany() {
        console.log('in getCompany');
    }

    fly() {
        console.log(`Drone ${this.id} is flying`);
    }
}
Drone.maxHeight = 2000;

let drone = new Drone(123, 'Flyer');
let drone2 = new Drone(456, 'Twirl');

console.log('drone1: ' + drone['id'], drone['name']);

drone.id = 987;
console.log('drone1: ' + drone.id, drone.name);

console.log('drone2: ' + drone2.id, drone2.name);
console.log('max height in instance: ' + drone2.maxHeight);
console.log('max height in Class: ' + Drone.maxHeight);

drone.fly();
drone2.fly();

Drone.getCompany();
