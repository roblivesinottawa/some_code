

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
}

    carStats() {
    return `this car has ${this.doors} doors, ${this.engine} engine and a beautiful ${this.color} color`;
    }
    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 + doors2
    }
}

const cx5 = new Car ( 2, "V6", 'grey' )
const civic = new Car ( 3, 'V4', 'blue' )

console.log(cx5)
console.log(cx5.carStats());
console.log(civic)
console.log(cx5.carStats());
console.log(Car.totalDoors(cx5, civic))




