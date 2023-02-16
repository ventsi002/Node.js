const express = require("express");
const app = express();

app.get("/birds", (req, res) => {
    res.send({ message: "That are all birds" })
});

app.get("/birds/:name", (req, res) => {
    req.query;
    res.send({ name: req.params.name });
});

app.listen(8080);