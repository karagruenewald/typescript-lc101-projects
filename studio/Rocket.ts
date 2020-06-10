import {Astronaut} from './Astronaut';
import {Payload} from './Payload';
import {Cargo} from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo [];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }

    sumMass(items: Payload[]): number {
        let total: number = 0;
        for (let i = 0; i < items.length; i++) {
            total += (items[i].massKg)
        }
        return total;
    }

    currentMassKg(): number {
        let astronautMass: number = this.sumMass(this.astronauts);
        let cargoMass: number = this.sumMass(this.cargoItems);
        let total: number = astronautMass + cargoMass;
        return total;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }

    addCargo(cargo: Cargo): boolean {
        let value = this.canAdd(cargo);
        if (value === true) {
            this.cargoItems.push(cargo)
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        let value = this.canAdd(astronaut);
        if (value === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}