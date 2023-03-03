const express = require("express");
const app = express();
// const app = require("express")();

app.use(express.json());

///route (entire thing)
// HTTP method
// | endpoint callback function
app.get("/", (req, res) => {
    res.send({ message: "poemi go otzad" });
});

let bicycleSpins = 0;
app.get("/spinthebicycle", (req, res) => {
    bicycleSpins += 1;
    res.send({ message: `koleloto se vurti ${bicycleSpins}` });
});

app.get("/kick", (req, res) => {
    res.send({ message: "ow ow ow" });
})

app.get("/about", (req, res) => {
    res.send(`
    <h1>About</h1>
    <h3>my pishka</h3>
    `);
});

app.get("/bat", (req, res) => {
    console.log(req.query);

    res.send({ message: `The bat is ${req.query.adjective}.` });
});

app.get("/bottle/:bottleSize", (req, res) => {
    console.log(req.params);
    res.send({ bottleSize: req.params.bottleSize })
});

app.post("/package", (req, res) => {
    console.log(req.body);
    res.send({ message: req.body });
});

app.get("/time/time", (req, res) => {
    res.send({
        timeUTC: new Date(),
        timeLocal: Date(),
        timeUnix: Date.now()
    });
});

const days = ["sun", "m", "tue", "w", "thu", "f", "sat"]

app.get("/time/day", (req, res) => {
    res.send({ data: days[new Date().getDay()] });
});

const months = ["j", "f", "m", "a", "m", "jun", "jul", "aug", "s", "o", "n", "d"]

app.get("/time/month", (req, res) => {
    res.send({ data: months[new Date().getMonth()] });
});

console.log(new Date());
console.log(Date());
console.log(Date.now());
console.log(new Date().getDay());

app.listen(8080);
