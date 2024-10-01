const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/fetchfeedetails", (req,res)=>{
    let classfees = req.body.classfees;

    let sql  = `SELECT * FROM punching_format WHERE class =  ?`;
    let values = [classfees];
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