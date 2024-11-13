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
app.use("/api/academicrecords", require("./controller/academic_records.js"))
app.use("/api/studentrecords", require("./controller/certificate.js"))
app.use("/api/enquiry", require("./controller/enquiry.js"));
app.use("/api/punchingformat", require("./controller/punchingformat.js"));
app.use("/api/feepayment", require("./controller/feepaymnet.js"));
app.use("/api/bookrecords", require("./controller/punch_saler_rate.js"));
app.use("/api/booksales", require("./controller/stalk_out_book_sale.js"));
app.use("/api/studentreports", require("./controller/student.js"));
app.use("/api/tcissue", require("./controller/tc_issue.js"));
app.use("/api/profile", require("./controller/side_bar.js"));
app.use("/api/feestatus", require("./controller/fee_status.js"));
app.use("/api/add", require("./controller/add.js"));
app.use("/api/masterreport", require("./controller/master_report.js"));
app.use("/api/academicreports", require("./controller/academic_report.js"));
app.use("/api/tutionfee", require("./controller/tutionFee.js"));
app.use("/api/billamendment", require("./controller/bill_amendment.js"));
app.use("/api/reportsGroup", require("./controller/reportsGroup.js"));
app.use("/api/message", require("./controller/message.js"));




app.listen(3000);