import { Router } from "express";
const router = Router();

router.get("/room", (req, res) => {
    //next();
    res.send({ message: "I am in room 1" })
});


router.get("/room", (req, res) => (
    res.send({ message: "I am in room 2" })
));

export default router;