const express = require("express");
const app = express();
app.use(express.json());

const birds = [
    { id: 1, name: "parrot", color: "green" },
    { id: 2, name: "flamingo", color: "pink" },
    { id: 3, name: "owl", color: "brown" }
];

app.get("/birds", (req, res) => {
    res.send(birds)
});

app.get("/birds/:id", (req, res) => {
    const { id } = req.params;
    res.send(birds.find(b => b.id == id));
});

app.post('/birds', (req, res) => {
    const bird = req.body;
    let id;
    if (birds.length > 0) {
        id = birds[birds.length - 1].id + 1;
    } else {
        id = 1;
    }
    const newBird = { id: id, ...bird };
    birds.push(newBird);
    res.send(newBird);
});

app.put('/birds/:id', (req, res) => {
    const id = Number(req.params.id);
    const findBird = birds.findIndex(bird => bird.id === id);
    if (findBird >= 0) {
        const bird = req.body;
        const updateBird = { id, ...bird };
        birds[findBird] = updateBird;
        res.send(updateBird);
    }
    else {
        res.send({ message: "No such bird" });
    }
});

app.delete('/birds/:id', (req, res) => {
    const id = Number(req.params.id);
    const findBird = birds.findIndex(bird => bird.id === id);
    birds.splice(findBird, 1);
    res.send({ message: "Bird removed" });
})

app.listen(8080);