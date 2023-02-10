console.log(random(1, 6));

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
};

const randomAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
};

console.log(randomAnonymousFunction(1, 6));

const randomArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

console.log(randomArrowFunction(0, 6));

const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max - min + 1) - min);

console.log(randomArrowFunctionCompact(0, 6));

function genericActionPerformer(genericAction, genericName) {
    return genericAction(genericName);
}


const subtract = (name) => `${name} is subtracting.`;

console.log(genericActionPerformer(subtract, "Tobias"))

const walk = (name) => `${name} is walking`;

console.log(genericActionPerformer(walk, "Nicolas"))

console.log(genericActionPerformer((name) => `${name} is reading`, "Andrea"))