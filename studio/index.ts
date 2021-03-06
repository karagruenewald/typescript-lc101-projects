// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html

// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.

import {Astronaut} from './Astronaut';
import {Cargo} from './Cargo';
import {Rocket} from './Rocket';


// let astroTest: Astronaut = new Astronaut(100, "Ted");
// console.log(astroTest);
// let astroTest2: Astronaut = new Astronaut(200, "Amy");


// let testCargo: Cargo = new Cargo(300, "metal");
// console.log(testCargo);
// let testCargo2: Cargo = new Cargo(200, "plastic");

// let testRocket: Rocket = new Rocket("Dragon", 1000);
// console.log(testRocket);


// let items: Payload[] = [{massKg: 100}, {massKg: 200}, {massKg: 300}]
// let items2: Payload[] = [astroTest, astroTest2]
// console.log(testRocket.sumMass(items));
// console.log(testRocket.sumMass(items2));


// let payloadArray: Payload[] = [
//     astroTest, 
//     new Astronaut(100, "Ron"),
//     new Cargo(25, "organic"),
//     testCargo
// ];

// console.log(testRocket.canAdd(testCargo));

// console.log(testRocket.addCargo(testCargo));
// console.log(testRocket.cargoItems);

// console.log(testRocket.addAstronaut(astroTest2));
// console.log(testRocket.astronauts);

let falcon9: Rocket = new Rocket("Falcon 9", 7500);

let astronauts: Astronaut [] = [
    new Astronaut(75, "Mae"),
    new Astronaut(81, "Sally"),
    new Astronaut(99, "Charles")
];

for (let i = 0; i < astronauts.length; i++) {
    let astronaut = astronauts[i];
    let status = "";
    if (falcon9.addAstronaut(astronaut)) {
        status = "On board";
    } else {
        status = "Not on board";
    }
    console.log(`${astronaut.name}: ${status}`);
} 


let cargo: Cargo [] = [
    new Cargo(3107.39, "Satellite"),
    new Cargo(1000.39, "Space Probe"),
    new Cargo(753, "Water"),
    new Cargo(541, "Food"),
    new Cargo(2107.39, "Tesla Roadster"),
];

for (let i = 0; i < cargo.length; i++) {
    let c = cargo[i];
    let loaded = "";
    if (falcon9.addCargo(c)) {
        loaded = "Loaded";
    } else {
        loaded = "Not loaded";
    }
    console.log(`${c.material}: ${loaded}`);
}

console.log(`Final cargo and astronaut mass: ${falcon9.currentMassKg()} kg.`)