'use strict';

class Vehicle {
    constructor() {
        this.gpsEnabled = true;
    }
}

class Drone extends Vehicle {

}

class Car extends Vehicle {
    constructor() {
        this.gpsEnabled = false;
        super();
    }
}

let c = new Car();

console.log(c.gpsEnabled);
