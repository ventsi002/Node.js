import { Router } from "express";
const router = Router();
import db from "../databases/connection.js"

router.get("/planets", async (req, res) => {
    const planets = await db.all("SELECT * FROM planets");
    console.log(planets);
    res.send({ data: planets });
});

//router.post("/planets", (req, res) => {

//})

export default router;