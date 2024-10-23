const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/addmessage", (req, res) => {
    let type = req.body.type;
    let name = req.body.name;
    let contact = req.body.contact;

    let sql = `INSERT INTO others(type, name, contact) VALUES (?, ?, ?)`;
    let values = [type, name, contact];
    con.query(sql, values, (error, result) => {
        if (!error) {
            res.send({ message: "data Saved", status: 200, data: result });
        }
        else {
            console.log(error);
            res.send({ message: "Error", status: 400 });
        }
    })
})




router.get("/fetchmessage", async function (req, res) {
    let query = "SELECT * FROM others";
    con.query(query, async function (error, result) {
        if (!error) {
            res.send({ message: "data Saved", status: 200, data: result });
        }
        else {
            console.log(error);
            res.send({ message: "Error", status: 400 });
        }
    })
})

router.delete('/deletemessage/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)

    con.query('DELETE FROM others WHERE id = ?', [id], (err, result) => {
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

router.put('/editmessage/:id', (req, res) => {
    const id = req.params.id;  // The ID of the message you're updating
    const {type, name, contact } = req.body;

    // Use the correct column name for the ID in the WHERE clause (e.g., 'id')
    const sql = `UPDATE others SET type = ?, name= ?, contact= ? WHERE id = ?`;

    // Pass the messageId as the fourth parameter to match the WHERE clause
    con.query(sql, [type, name, contact, id ], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error updating message' });
            return;
        }
        res.json({ message: 'Message updated successfully', status: 200, data: result });
    });
});



module.exports = router;
