import { Router } from "express";
const router = Router();

router.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html");
});

export default router