const express = require("express");
const app = express();

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

app.listen(8080);