const express = require("express");
const connection = require("../connection.js");
const router = express.Router();

router.post("/fetchbillamendment", (req, res) => {
    let {enter_receipt} = req.body;
    
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`; // 2024_2025

    let query =   `SELECT admission_number , assign_class, name, father_name, fee FROM punching_format${sessionString} WHERE admission_number  = ?`;
    let value = [enter_receipt];

    connection.query(query, value, (error, result) => {
        if (!error) {
            res.send({ message: "data fetched", status: 200, data: result });
        }
        else {
            res.send({ message: "Error", status: 400, error:error });
        }
    })
});

router.post("/printbillamendment", (req, res) => {
    let {enter_receipt} = req.body;

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`; // 2024_2025

    let query =   `SELECT admission_number , assign_class, name, father_name, fee FROM punching_format${sessionString} WHERE admission_number  = ?`;
    let value = [enter_receipt];

    connection.query(query, value, (error, result) => {
        if (!error) {
            res.send({ message: "data fetched", status: 200, data: result });
        }
        else {
            res.send({ message: "Error", status: 400, error:error });
        }
    });
});


module.exports = router;