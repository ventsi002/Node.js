const express = require("express");
const app = express();
app.use(express.json());

const birds = [
    { id: 1, name: "parrot", maleRating: 10, femaleRating: 2 }
]
let curentId = 1;

app.get("/birds", (req, res) => {
    res.send({ data: birds });
});

app.get("/birds/:id", (req, res) => {
    console.log(req.params.id);
    const foundBird = birds.find(bird => bird.id === Number(req.params.id));
    res.send({ data: foundBird });
})

app.post("/birds", (req, res) => {
    const birdToCreate = req.body;
    birdToCreate.id = ++curentId;
    birds.push(birdToCreate);
    res.send({ data: birdToCreate });
})

app.patch("/birds/:id", (req, res) => {
    const foundIndex = birds.foundIndex(bird => bird.id === Number(req.params.id));
    if (!foundIndex) {
        res.status(404).send({ message: `No bird found with id ${req.params.id}` })
    } else {
        const foundBird = birds[foundIndex];
        const birdsToUpdate = { ...foundBird, ...req.body, id: foundBird.id };
        birds[foundIndex] = birdsToUpdate
        res.send({ data: birdsToUpdate });
    }
});

app.delete("/birds/:id", (req, res) => {
    const foundIndex = birds.foundIndex(bird => bird.id === Number(req.params.id));

    if (foundIndex === -1) {
        res.send({ data: foundIndex, message: `No bird found with id ${req.params.id}` })
    } else {
        const deleteBird = birds.splice(foundIndex, 1)[0];
        res.send({ data: deleteBird });
    }
})

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});