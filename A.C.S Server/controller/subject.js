const express = require("express");
const con = require("../connection.js");
const router = express.Router();




router.post("/savesubjectcredential", async function (req,res){

    let assign_class = req.body.assign_class;
    let subject = req.body.subject;
    let Ist_unit_min_marks = req.body.Ist_unit_min_marks;
    let Ist_unit_max_marks = req.body.Ist_unit_max_marks;
    let IInd_unit_min_marks= req.body.IInd_unit_min_marks;
    let IInd_unit_max_marks= req.body.IInd_unit_max_marks;

    let query = "INSERT INTO subject (assign_class, subject, Ist_unit_min_marks, Ist_unit_max_marks, IInd_unit_min_marks, IInd_unit_max_marks) VALUES (?, ?, ?, ?, ?, ?)"
    let value =[assign_class, subject, Ist_unit_min_marks, Ist_unit_max_marks, IInd_unit_min_marks, IInd_unit_max_marks];
    con.query(query, value, async function (err, result) {
        if (err) throw console.log(err);
        res.send({message:"subject Data saved in database Succesfully",status:200})
    });
})

router.get("/fetchSubjectcredential", async function (req,res){
    let query = "SELECT * FROM subject";
    con.query(query , async function (err, result){
        if(err) throw err;
        res.send(result);
    })
})

router.get('/deleteSubjectcredential/:id', (req, res) => {
    const { id } = req.params;

    con.query('DELETE FROM subject WHERE id = ?', [id], (err, result) => {
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

router.put('/editSubjectcredential/:id', (req, res) => {
    const userId = req.params.id;
    console.log("USER ID ", userId);
    const { assign_class, subject, Ist_unit_min_marks, Ist_unit_max_marks, IInd_unit_min_marks, IInd_unit_max_marks } = req.body;

    const query = `UPDATE subject SET assign_class = ?, subject = ?, Ist_unit_min_marks = ?, Ist_unit_max_marks = ?, IInd_unit_min_marks = ?, IInd_unit_max_marks  = ?  WHERE id = ${userId} `;
    const values = [assign_class, subject, Ist_unit_min_marks, Ist_unit_max_marks, IInd_unit_min_marks, IInd_unit_max_marks];

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

