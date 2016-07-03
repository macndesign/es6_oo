'use strict';

class Vehicle {
    start() {
        console.log('starting vehicle');
    }
    static getCompanyName() {
        console.log('My Company');
    }
}

class Car extends Vehicle {
    start() {
        super.start();
        console.log('starting car');
    }
    static getCompanyName() {
        super.getCompanyName();
        console.log('Other Company');
    }
}

let c = new Car();
c.start();
Car.getCompanyName();