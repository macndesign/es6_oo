'use strict';

class Vehicle {
    constructor(licenseNum) {
        this.licenseNum = licenseNum;
    }
}

class Drone extends Vehicle {

}

class Car extends Vehicle {
    constructor(licenseNum) {
        super(licenseNum);
    }
}

let c = new Car('A123');

console.log(c.licenseNum);

console.log(c instanceof Car);
console.log(c instanceof Vehicle);
console.log(c instanceof Object);
