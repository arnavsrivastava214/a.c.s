let con = require("./connection.js");
let express = require("express");
let cors = require("cors");
let bodyParser  = require("body-parser");
let app = express();
app.use(cors());
app.use(bodyParser.json());



app.use("/api/admin",require("./controller/dashboard.js"));
app.use("/api/teacher",require("./controller/teacher.js"));
app.use("/api/auth",require("./controller/auth.js"));
app.use("/api/bookrecords",require("./controller/StockInBookRecord.js"));
app.use("/api/subjectdetails", require("./controller/subject.js"))







app.listen(3000);