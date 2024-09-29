const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/fetchsstudentcred", (req,res)=>{
    let StudentAdmId = req.body.StudentAdmId;

    let sql  = `SELECT * FROM punching_format WHERE admission_number =  ?`;
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

module.exports = router;