const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/fetchstudentscredential", (req, res) => {
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

router.put('/editstudent/:id', (req, res) => {

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;

    const id = req.params.id;
    console.log(id);
    const { admission_number, assign_class, date_of_birth, father_name, father_occupation, guardian_name, mother_name, name, nationality, period_of_residence_in_up, permanent_address, phone_number, pin, present_address, previous_school, religion } = req.body;

    const sql = `UPDATE punching_format${sessionString} SET admission_number = ?, assign_class = ?, date_of_birth = ?, father_name = ?, father_occupation = ?, guardian_name = ?, mother_name = ?, name = ?, nationality = ?, period_of_residence_in_up = ?, permanent_address = ?, phone_number = ? , pin = ?, present_address = ?, previous_school = ?, religion = ? WHERE id = ?`;
    con.query(sql, [admission_number, assign_class, date_of_birth, father_name, father_occupation, guardian_name, mother_name, name, nationality, period_of_residence_in_up, permanent_address, phone_number, pin, present_address, previous_school, religion, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error updating message' });
            return;
        }
        res.json({ message: 'Message updated successfully', status: 200, data: result });
    });
});

module.exports = router;