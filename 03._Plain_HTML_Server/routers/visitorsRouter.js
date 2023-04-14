import { Router } from "express";
const router = Router();

router.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html");
});

router.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount });
});

export default router;