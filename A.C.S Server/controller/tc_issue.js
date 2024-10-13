const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/fetchtcissues", (req, res) => {
    let studentclassname = req.body.studentclassname;

    let sql = `SELECT * FROM punching_format WHERE assign_class =  ?`;
    let values = [studentclassname];
    con.query(sql, values, (error, result) => {
        if (!error) {
            res.send({ message: "data fetched", status: 200, data: result });
        }
        else {
            res.send({ message: "Error", status: 400 });
        }
    })
})


router.put('/editStudents/:id', (req, res) => {
    const userId = req.params.id;
    console.log("USER ID ", userId);
    const { admission_number, name, father_name, assign_class, permanent_address, phone_number } = req.body;
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;

    const query = `UPDATE punching_format${sessionString} SET admission_number = ?, name = ?, father_name = ?, assign_class = ? , permanent_address = ?, phone_number = ? WHERE id =${userId} `;
    const values = [admission_number, name, father_name, assign_class, permanent_address, phone_number, userId];

    con.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error updating user');
        } else {
            res.status(200).send({ message: "Succes", status: 200 });
        }
    });
});
module.exports = router;