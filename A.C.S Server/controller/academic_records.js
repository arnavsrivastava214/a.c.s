const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/academicrecords", (req, res) => {
    let student_id = req.body.student_id;
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;


    let sql = `SELECT name , assign_class , admission_number FROM punching_format${sessionString} WHERE id = ?`;
    let values = [student_id];
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