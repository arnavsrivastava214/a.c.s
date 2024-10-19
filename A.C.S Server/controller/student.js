const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/fetchstudentreports", (req,res)=>{
    let StudentAdmId = req.body.StudentAdmId;

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;

    let sql  = `SELECT * FROM punching_format${sessionString} WHERE assign_class =  ?`;
    let values = [StudentAdmId];
    con.query(sql, values,(error,result)=>{
        if(!error){
            res.send({message:"data fetched",status:200,data:result});
        }
        else{
            res.send({message:"Error", status:400});
        }
    })
})

router.put('/studentenable/:id', (req, res) => {
    const id = req.params.id;
    const { msg_flg } = req.body;
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;

    const query = `UPDATE punching_format${sessionString} SET msg_flg = ? WHERE id =${id} `;
    const values = [msg_flg, id];

    con.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error updating user');
        } else {
            res.status(200).send({ message: "Succes", status: 200 });
        }
    });
});


router.put('/studentdisable/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const { msg_flg } = req.body;
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;

    const query = `UPDATE punching_format${sessionString} SET msg_flg = ? WHERE id = ? `;
    const values = [msg_flg, id];

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