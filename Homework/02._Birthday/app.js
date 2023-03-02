const express = require("express");
const app = express();
app.use(express.json());

app.get("/birthday", (req, res) => {
    res.sendFile(__dirname + "/birthday.html");
});


app.get("/api/birthday", (req, res) => {
    res.send({ time: Date() });
});


app.listen(8080);

module.exports = app