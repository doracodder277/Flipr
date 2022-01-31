const express = require("express")

const router = express.Router()

router.route("/customer")
    .get((req, res) => {
    console.log(req.query.name)
    res.send('Hellooooooooooooooooo!'+ req.query.name);
});

module.exports = router;