// const express = require("express");
// const app = express();
const app = require("express")();


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
}),
    app.listen(8080);
