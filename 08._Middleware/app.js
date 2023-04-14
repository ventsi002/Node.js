import express from "express";
const app = express();

function houseButtler(req, res, next) {
    console.log("This way ...");
    next();
}
app.use("/room", houseButtler);

import roomRouter from "./routers/roomRouter.js"
app.use(roomRouter);

function guard(req, res, next) {
    if (req.query.name === "Ventsi") {
        req.myName = "Ventsi";
        next();
    } else {
        res.send({ message: "You are not allowed to enter" });
    }
};

app.get("/frontdoor", guard, (req, res) => {
    res.send({ message: `Please enter, ${req.myName}` });
});


app.get("*", (req, res) => {
    res.send("<h1>404 - Not Found</h1>")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT))


//middleware on the server
//before the calback of the server rout