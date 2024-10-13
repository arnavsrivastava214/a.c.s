const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/addmessage", (req, res) => {
    let message_title = req.body.message_title;
    let message_body = req.body.message_body;
    let user_id = req.body.user_id;

    let sql = `INSERT INTO message(message_title, message_body, user_id) VALUES (?, ?, ?)`;
    let values = [message_title, message_body, user_id];
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
    let query = "SELECT * FROM message";
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
    const message_id = req.params.id;
    console.log(message_id)

    con.query('DELETE FROM message WHERE message_id = ?', [message_id], (err, result) => {
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
    const message_id = req.params.id;  // The ID of the message you're updating
    const { message_title, message_body, user_id } = req.body;

    // Use the correct column name for the ID in the WHERE clause (e.g., 'id')
    const sql = `UPDATE message SET message_title = ?, message_body = ?, user_id = ? WHERE message_id = ?`;

    // Pass the messageId as the fourth parameter to match the WHERE clause
    con.query(sql, [message_title, message_body, user_id, message_id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error updating message' });
            return;
        }
        res.json({ message: 'Message updated successfully', status: 200, data: result });
    });
});



module.exports = router;
