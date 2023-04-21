//js is single-threaded

/*
frtching over a network
manu / heavy calculations
cryptographic functions
reading / writing to files
databases
*/

/*
callbacks
con: callback hell, pyramid of doom
*/

/*
promises

two states:
-pending
-fulfilled
    -rejected
    -resolved

*/

/*
async / await
*/

// new Promise((resolve, rejet) => {
//     setTimeout(() => {
//         try {
//             throw Error;
//             resolve("Yaaay");
//         } catch {
//             rejet("Naaay");
//         }
//     }, 3000);
// })
//     .then(successMessage => console.log("Success message:", successMessage))
//     .catch(errorMessage => console.log("Error message:", errorMessage));


function celebrate(name) {
    return new Promise((resolve, reject) => {
        if (name) {
            resolve(`We will celebrate ${name}`);
        } else {
            reject("No celebrate no name")
        }
    });
};

celebrate()
    .then(celebrationMessage => console.log(celebrationMessage));


function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Good");
            } catch {
                reject("Bad");
            }
        }, 1000);
    })
}

somethingGoodSomethingBad()
    .then(goodMessage => console.log(goodMessage))
    .catch(badMessage => console.log(badMessage));



// IIFE
(async function getGoodOrBadMessage() {
    const somethingGoodSomethingBadMessage = await somethingGoodSomethingBad();
    const celebrationMessage = await celebrate("All of us");
    console.log(somethingGoodSomethingBadMessage, celebrationMessage);
})()

function parallel() {
    Promise.all([somethingGoodSomethingBad(), celebrate("All of us")])
}

