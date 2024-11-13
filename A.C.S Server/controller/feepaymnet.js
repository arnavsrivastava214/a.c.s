const express = require("express");
const con = require("../connection.js");
const { json } = require("body-parser");
const router = express.Router();

router.post("/fetchfeedetails", (req,res)=>{
    let classfees = req.body.classfees;
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;

    let sql  = `SELECT * FROM punching_format${sessionString} WHERE assign_class =  ?`;
    let values = [classfees];
    con.query(sql, values,(error,result)=>{
        if(!error){
            let parsedResult = result.map((item)=>{
                return { ...item, fee: JSON.parse(item.fee) };
            })
            res.send({message:"data fetched",status:200,data:parsedResult});
        }
        else{
            res.send({message:"Error", status:400});
        }
    })
})
router.put('/updatefeedetails/:id', (req, res) => {

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;

    const id = req.params.id;
    let  wholeObj  = req.body;
    wholeObj = JSON.stringify(wholeObj);

    const sql = `UPDATE punching_format${sessionString} SET fee = ? WHERE id = ?`;
    con.query(sql, [wholeObj,  id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error updating message' });
            return;
        }
        res.json({ message: 'Message updated successfully', status: 200, data: result });
    });
});

module.exports = router;