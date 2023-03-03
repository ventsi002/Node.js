const express = require("express");
const app = express();
app.use(express.json());

app.get("/b", (req, res) => {
    res.sendFile(__dirname + "public/birthday.html");
});


app.get("/api/birthday", (req, res) => {
    res.send({ time: Date() });
});


app.listen(8080);

module.exports = app;