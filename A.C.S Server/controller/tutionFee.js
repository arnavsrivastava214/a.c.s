const express = require("express");
const con = require("../connection.js");
const router = express.Router();


router.post("/tutionfee", (req, res) => {

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`; // 2024_2025


    let sql = `SELECT admission_number, name, father_name, assign_class, phone_number AS contact_number, fee FROM punching_format${sessionString} WHERE `;
})









module.exports = router;