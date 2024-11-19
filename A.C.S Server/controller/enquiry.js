const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/insertenquiry", (req, res) => {
    let studentName = req.body.studentName;
    let fname = req.body.fname;
    let contactNo = req.body.contactNo;
    let email = req.body.email;
    let session = req.body.session;
    let timestamp = req.body.timestamp;
    console.log(req.body);

    let sql = `INSERT INTO enquiry (studentName, fname, contactNo, email, session, timestamp) VALUES (?, ?, ?, ?, ?, ?)`;
    let values = [studentName, fname, contactNo, email, session, timestamp];
    con.query(sql, values, (error, result) => {
        if (!error) {
            res.send({ message: "data Saved", status: 200, data: result });
        }
        else {
            res.send({ message: "Error", status: 400 , error:error.sqlMessage});
        }
    })
})

module.exports = router;