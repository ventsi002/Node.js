import express from "express";
const app = express();

import cors from "cors"
app.use(cors({
    credentials: true,
    origin: true
}));
//app.use(express.static("../client/dist"))
app.use(express.json());

import planetRouter from "./routers/planetsRoute.js";
app.use(planetRouter);

import peopleRouter from "./routers/peopleRouter.js";
app.use(peopleRouter);


const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));






















// app.use() sets up the middleware