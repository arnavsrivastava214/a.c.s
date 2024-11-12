const express = require("express");
const connection = require("../connection.js");
const router = express.Router();


router.get("/getMessage", (req, res) => {
    let sql = "SELECT * FROM message";
    connection.query(sql, (error, result) => {
        if (!error) {
            res.send({ message: "data fetched", status: 200, data: result });
        }
        else {
            res.send({ message: "Error", status: 400 });
        }
    })
})

router.post("/addMessage",(req,res)=>{
    const {user_id, message_title,message_body} = req.body;
    let sql = `INSERT INTO message(user_id, message_title, message_body) VALUES(?, ?, ?)`;
    let values = [user_id ? user_id : 26, message_title, message_body];    //user_id 26 is admin

    connection.query(sql, values, (error, result) => {
        if (!error) {
            res.send({ message: "data saved", status: 200, data: result });
        }
        else{
            console.log(error);
            res.send({ message: "Error", status: 400 });
        }
    })
}) ;     

router.put("/editMessage", (req, res) => {
    const { message_title, message_body,message_id } = req.body;
    let sql = `UPDATE message SET message_title = ?, message_body = ? WHERE message_id = ?`;
    let values = [message_title, message_body, message_id];
    connection.query(sql, values, (error, result) => {
        if (!error) {
            res.send({ message: "data updated", status: 200, data: result });
        }
        else {
            console.log(error);
            res.send({ message: "Error", status: 400 });
        }
    })
});

router.delete("/deleteMessage/:id", (req, res) => {
    const { id } = req.params;
    let sql = `DELETE FROM message WHERE message_id = ?`;
    let values = [id];
    connection.query(sql, values, (error, result) => {
        if (!error) {
            res.send({ message: "data deleted", status: 200, data: result });
        }
        else {
            console.log(error);
            res.send({ message: "Error", status: 400 });
        }
    })
});

module.exports = router;