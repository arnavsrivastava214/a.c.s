const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/fetchstudentscredentials", (req, res) => {
    let assign_class = req.body.assign_class;
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;

    let sql = `SELECT * FROM punching_format${sessionString} WHERE assign_class =  ?`;
    let values = [assign_class];
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
