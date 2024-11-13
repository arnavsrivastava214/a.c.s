const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/fetchsstudentcred", (req, res) => {
    let StudentAdmId = req.body.StudentAdmId;
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;

    console.log(sessionString);


    let sql = `SELECT * FROM punching_format${sessionString} WHERE admission_number =  ?`;
    let values = [StudentAdmId];
    con.query(sql, values, (error, result) => {
        if (!error) {
            let parsedResult = result.map((item) => {
                return { ...item, fee: JSON.parse(item.fee) };
            })
            res.send({ message: "data fetched", status: 200, data: parsedResult });
        }
        else {
            res.send({ message: "Error", status: 400, error });
        }
    })
});

router.put('/payFee/:id', (req, res) => {

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;

    const id = req.params.id;
    let wholeObj = req.body;
    wholeObj = JSON.stringify(wholeObj);

    const sql = `UPDATE punching_format${sessionString} SET fee = ? WHERE id = ?`;
    con.query(sql, [wholeObj, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error updating message' });
            return;
        }
        res.json({ message: 'Message updated successfully', status: 200, data: result });
    });
});

router.put('/updateStdDetails/:id', (req, res) => {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;

    const id = req.params.id;
    const {
        admission_number,
        name,
        father_name,
        assign_class,
        permanent_address,
        phone_number,
        mother_name,
        guardian_name,
        date_of_birth,
        father_occupation,
        gender,
        student_aadhar_no,
        mother_aadhar_no,
        father_aadhar_no,
        academic_records,
        profileImage,
        pin,
        category,
        nationality,
        religion,
        period_of_residence_in_up,
        previous_school,
        mobile_email,
        whatsapp_number,
        password,
        fee,
        admission_timestamp,
        session,
        fee_date_january,
        fee_date_april,
        fee_date_may,
        fee_date_june,
        fee_date_july,
        fee_date_august,
        fee_date_sep,
        fee_date_oct,
        fee_date_nov,
        fee_date_dec,
        fee_date_february,
        fee_date_march,
        promote,
        tc_issue,
        msg_flg,
        birth_certificate_form,
        tc_form,
        admission_form,
        caste,
        pay_timestamp,
    } = req.body;

    const sql = `UPDATE punching_format${sessionString} SET
     admission_number = ?, 
     name = ?, 
     father_name = ?,
      assign_class = ? , 
      permanent_address = ?, 
      phone_number = ?,
      mother_name = ?,
    guardian_name = ?,
    date_of_birth = ?,
    father_occupation = ?,
    gender = ?,
    student_aadhar_no = ?,
    mother_aadhar_no = ?,
    father_aadhar_no = ?,
     academic_records = ?,
    profileImage = ?,
    pin = ?,
    category = ?,
    nationality = ?,
    religion = ?,
      period_of_residence_in_up = ?,
     previous_school = ?,
     mobile_email = ?,
   whatsapp_number = ?,
   password = ?,
     fee = ?,
   admission_timestamp = ?,
    session = ?,
  fee_date_january = ?,
  fee_date_april = ?,
     fee_date_may = ?,
    fee_date_june = ?,
    fee_date_july = ?,
    fee_date_august = ?,
    fee_date_sep = ?,
     fee_date_oct = ?,
     fee_date_nov = ?,
     fee_date_dec = ?,
     fee_date_february = ?,
    fee_date_march = ?,
    promote = ?,
    tc_issue = ?,
  msg_flg = ?,
    birth_certificate_form = ?,
    tc_form = ?,
    admission_form = ?,
  caste = ?,
     pay_timestamp = ?
      WHERE id = ?`;

    const value = [
        admission_number,
        name,
        father_name,
        assign_class,
        permanent_address,
        phone_number,
        mother_name,
        guardian_name,
        date_of_birth,
        father_occupation,
        gender,
        student_aadhar_no,
        mother_aadhar_no,
        father_aadhar_no,
        academic_records,
        profileImage,
        pin,
        category,
        nationality,
        religion,
        period_of_residence_in_up,
        previous_school,
        mobile_email,
        whatsapp_number,
        password,
        JSON.stringify(fee),
        admission_timestamp,
        session,
        fee_date_january,
        fee_date_april,
        fee_date_may,
        fee_date_june,
        fee_date_july,
        fee_date_august,
        fee_date_sep,
        fee_date_oct,
        fee_date_nov,
        fee_date_dec,
        fee_date_february,
        fee_date_march,
        promote,
        tc_issue,
        msg_flg,
        birth_certificate_form,
        tc_form,
        admission_form,
        caste,
        pay_timestamp,
        id];

    con.query(sql, value, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error updating message' ,error:err });
            return;
        }
        res.json({ message: 'Details updated successfully', status: 200, data: result });
    });
})

module.exports = router;