const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/fetchbooksaledetails", (req, res) => {
    let admissiomId = req.body.admissiomId;

    let sql = `SELECT * FROM punching_format WHERE admission_number =  ?`;
    let values = [admissiomId];
    con.query(sql, values, (error, result) => {
        if (!error) {
            res.send({ message: "data fetched", status: 200, data: result });
        }
        else {
            res.send({ message: "Error", status: 400 });
        }
    })
})

module.exports = router;