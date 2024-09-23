let con = require("mysql");

let connect = con.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"a.c.s schoolmanagementsystem"
});
connect.connect(()=>{
    console.log("my sql connected succesfully");
})

module.exports = connect;