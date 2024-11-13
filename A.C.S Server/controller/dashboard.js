const express = require("express");
const connection = require("../connection.js");
const router = express.Router();


router.get("/dashboard",async (req,res)=>{
    res.send({msg:"Hello babu"})
})



module.exports = router;