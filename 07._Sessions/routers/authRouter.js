import { Router } from "express";
const router = Router();

router.get("/auth/logout", (req, res) => {
    res.send({});
});

router.post("/auth/login", (req, res) => {
    res.send({});
});

//passwordPlaygrond


export default router;