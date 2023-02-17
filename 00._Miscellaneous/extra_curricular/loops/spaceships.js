const spaceships = [
    { name: "big baloon", isPriceless: false, cost: 1_000_000 },
    { name: undefined, type: "UFO", isPriceless: true, cost: Number.MAX_SAFE_INTEGER },
    { name: "Apollo 13", versionNumber: 13, isPriceless: false, cost: 2_000_000 }
];

//spaceships.forEach((spaceship, index, array) => console.log(array));

const spaceshipsWithOwners = spaceships.map(spaceship => {
    return { ...spaceship, owner: "China" };
})

//console.log(spaceshipsWithOwners);

// const spaceShipsWithPrice = spaceshipsWithOwners.map(spaceship => {
//     spaceship.isPriceless = true;
//     return spaceship
// })

//console.log(spaceShipsWithPrice);

// spaceships.forEach((spaceship) => {
//     if (spaceship.isPriceless === true) {
//         console.log("priseless", spaceship)
//     }
//     else {
//         console.log("is not priceless", spaceship)
//     }
// })

// const pricelessSpaceships = spaceships.filter(spaceship => spaceship.isPriceless === true);
// const notPricelessSpaceships = spaceships.filter(spaceship => spaceship.isPriceless === false);

// console.log(pricelessSpaceships);
// console.log(notPricelessSpaceships);

const cheapestSpaceship = spaceships.find(spaceship => spaceship.cost <= 2000000);
console.log(cheapestSpaceship);