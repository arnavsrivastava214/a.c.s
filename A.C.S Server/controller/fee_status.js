const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/fetchfeestatus", (req,res)=>{
    let class_assign = req.body.class_assign;

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;

    let sql  = `SELECT * FROM punching_format${sessionString} WHERE assign_class =  ?`;
    let values = [class_assign];
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