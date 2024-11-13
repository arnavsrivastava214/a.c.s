let con = require("mysql");

let connect = con.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"a_c_s_schoolmanagementsystem (2)"
});
connect.connect(()=>{
    console.log("my sql connected succesfully");
})

module.exports = connect;