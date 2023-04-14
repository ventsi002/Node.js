import { Router } from "express";
const router = Router();

router.get("/api/guards", (req, res) => {
    if (req.query.passport === "theskyisblue") {
        return res.redirect("/api/tanks");
    } else {
        res.send({ message: "qj hui" });
    }
});

export default router;