const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/fetchsstudentcred", (req,res)=>{
    let StudentAdmId = req.body.StudentAdmId;
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;

    console.log(sessionString);
    

    let sql  = `SELECT * FROM punching_format${sessionString} WHERE admission_number =  ?`;
    let values = [StudentAdmId];
    con.query(sql, values,(error,result)=>{
        if(!error){
            res.send({message:"data fetched",status:200,data:result});
        }
        else{
            res.send({message:"Error", status:400,error});
        }
    })
})

module.exports = router;