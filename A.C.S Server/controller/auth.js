const express = require("express");
const con = require("../connection.js");
const router = express.Router();


router.post("/signUp", async function (req,res){
    let name  = req.body.name;
    let email  = req.body.email;
    let password  = req.body.password;
    let rePassword  = req.body.rePassword;


    let sql = "INSERT INTO 	user (name, email, password, rePassword) VALUES (?, ?, ?, ?)";
    let value = [name, email, password, rePassword];
    con.query(sql, value, async function (err, result){
        if(err) throw console.log(err);
        console.log("Data saved in database");
    });
});

router.post("/login", async function (req,res){
    let email = req.body.email;
    let password = req.body.password;

    let query = "SELECT * FROM 	user WHERE email = ? ";
    const value = [email];

    con.query(query,value,(err,result)=>{
        if(!err && result.length>0){
            result.forEach((data)=>{
                if(data.password == password){
                        res.send({message:"Login Success",status:200,data:data});
                    }else{
                        res.send({message:"Invalid Credential",status:404});
                }
        });
        }else{
            res.send({message:"Invalid Credentail",status:404});
        };
    });
});


router.post("/recoverpassword", async function (req,res){
    let email = req.body.email;

    let query = "SELECT * FROM 	user WHERE email = ? ";
    const value = [email];

    con.query(query,value,(err,result)=>{
        if(!err && result.length>0){
                        res.send({message:"Login Success",status:200});
        } else {
                        res.send({message:"Invalid Credential",status:404});
                }
        })
    });
router.post("/newPassword", async function (req,res){
    let password = req.body.password;
    let email = req.body.email;

    let query = "UPDATE user SET password = ? WHERE email = ?"
    
    const values = [password, email];

    con.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error updating user password');
        } else {
            res.status(200).send({ message: "Succes", status: 200 });
        }
    });
    });

    

module.exports= router;