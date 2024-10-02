const express = require("express")
const router = express.Router();

router.post("/", (req, res) => {
    const { nickName } = req.body;
    if (nickName === "non-existent") {
        res.send("non-existent");
    } else {
        res.send("exists");
    }
});

module.exports = router