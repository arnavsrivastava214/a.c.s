

const express = require("express");
const con = require("../connection.js");
const router = express.Router();

// router.get("/fetchprofileurl", async function (req, res) {
//     let query = "SELECT * FROM user";
//     con.query(query, async function (err, result) {
//         if (err) throw err;
//         res.send(result);
//     })
// })

module.exports = router;