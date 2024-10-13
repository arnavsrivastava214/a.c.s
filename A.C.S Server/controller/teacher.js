const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/createTeacher", async function (req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let address = req.body.address;
    let mobile = req.body.mobile;
    let subject = req.body.subject;
    let assignclass = req.body.assignclass;

    let sql = "INSERT INTO teachers (name, email, address, mobile, subject, assignclass) VALUES (?, ?, ?, ?, ?, ?)";
    let value = [name, email, address, mobile, subject, assignclass];

    con.query(sql, value, async function (err, result) {
        if (err) throw console.log(err);
        res.send({message:"Teacher Data saved in database Succesfully",status:200})
    });
});


router.get("/getTeacher", async function (req, res) {
    let query = "SELECT * FROM teachers";
    con.query(query, async function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})
router.delete('/deleteteacher/:id', (req, res) => {
    const { id } = req.params;

    con.query('DELETE FROM teachers WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Record not found' });
        }

        res.status(200).json({ message: 'Record deleted successfully' });
    });
});





router.put('/editTeacher/:id', (req, res) => {
    const userId = req.params.id;
    console.log("USER ID ", userId);
    const { name, email, address, mobile, subject, assignclass} = req.body;

    const query = `UPDATE teachers SET name = ?, email = ?, address = ?, mobile = ? , subject = ?, assignclass = ? WHERE id =${userId} `;
    const values = [name, email, address, mobile, subject, assignclass, userId];

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