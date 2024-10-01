const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/fetchbookdetails", (req, res) => {
    let bookCode = req.body.bookCode;

    let sql = `SELECT * FROM order_books WHERE bookCode =  ?`;
    let values = [bookCode];
    con.query(sql, values, (error, result) => {
        if (!error) {
            res.send({ message: "data fetched", status: 200, data: result });
        }
        else {
            res.send({ message: "Error", status: 400 });
        }
    })
})
router.get("/fetchallbookdetails", (req, res) => {

    let sql = `SELECT * FROM order_books`;
    con.query(sql, (error, result) => {
        if (!error) {
            res.send({ message: "data fetched", status: 200, data: result });
        }
        else {
            res.send({ message: "Error", status: 400 });
        }
    })
})

module.exports = router;