const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/fetchbooksaledetails", (req, res) => {
    let admissiomId = req.body.admissiomId;
    let StudentAdmId = req.body.StudentAdmId;
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;

    let sql = `SELECT * FROM punching_format${sessionString} WHERE admission_number =  ?`;
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

router.put('/insertbookpurchasedetails/:id', (req, res) => {
    const id = req.params.id;

    for (let i = 0; i < req.body.length; i++) {
        const query = `UPDATE order_books SET amount = ?, bookCode= ?, quantity = ?, rate = ?  WHERE id = ? `;
        const values = [req.body[i].amount, req.body[i].bookCode, req.body[i].quantity, req.body[i].rate, id];

        con.query(query, values, (err, result) => {
            if (err) {
                console.log(err)
                console.error(err);
                res.status(500).send('Error updating user');
            } else {
                res.status(200).send({ message: "Succes", status: 200 });
            }
        });
    }


});


module.exports = router;