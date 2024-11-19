const express = require("express");
const con = require("../connection.js");
const router = express.Router();



router.post("/signUp", async function (req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let rePassword = req.body.rePassword;
    let image = req.body.image;
    let timeStamp = req.body.timeStamp;


    let sql = "INSERT INTO 	user (name, email, password, rePassword, image, timeStamp) VALUES (?, ?, ?, ?, ?, ?)";
    let value = [name, email, password, rePassword, image, timeStamp];
    con.query(sql, value, async function (err, result) {
        if (!err) {
            res.send({ message: "User Registered Success", status: 200 });
        } else {
            res.send({ message: "Invalid Credential", status: 404,error:err.sqlMessage });
        }
    })
});

router.post("/login", async function (req, res) {
    let email = req.body.email;
    let password = req.body.password;

    let query = "SELECT * FROM 	user WHERE email = ? ";
    const value = [email];

    con.query(query, value, (err, result) => {
        if (!err && result.length > 0) {
            result.forEach((data) => {
                if (data.password == password) {
                    createSessionTable()
                    res.send({ message: "Login Success", status: 200, data: data });
                } else {
                    res.send({ message: "Invalid Credential", status: 404 });
                }
            });
        } else {
            res.send({ message: "Invalid Credentail", status: 404 });
        };
    });
});



function createSessionTable(err, res) {

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`;
    if (err) {
        console.log(err);
    } else {
        let createTableSQL = `CREATE TABLE IF NOT EXISTS punching_format${sessionString} (
    admission_number VARCHAR(50) PRIMARY KEY,
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    father_name VARCHAR(100),
    mother_name VARCHAR(100),
    guardian_name VARCHAR(100),
    date_of_birth DATE,
    father_occupation VARCHAR(100),
    gender VARCHAR(10),
    student_aadhar_no VARCHAR(20),
    mother_aadhar_no VARCHAR(20),
    father_aadhar_no VARCHAR(20),
    assign_class VARCHAR(50),
    present_address TEXT,
    permanent_address TEXT,
    academic_records TEXT,
    profileImage VARCHAR(255),
    pin VARCHAR(10),
    category VARCHAR(50),
    nationality VARCHAR(50),
    religion VARCHAR(50),
    period_of_residence_in_up VARCHAR(50),
    previous_school VARCHAR(100),
    mobile_email VARCHAR(100),
    phone_number VARCHAR(15),
    whatsapp_number VARCHAR(15),
    password VARCHAR(255),
    fee DECIMAL(10, 2),
    admission_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    session VARCHAR(50),
    fee_date_january DATE,
    fee_date_april DATE,
    fee_date_may DATE,
    fee_date_june DATE,
    fee_date_july DATE,
    fee_date_august DATE,
    fee_date_sep DATE,
    fee_date_oct DATE,
    fee_date_nov DATE,
    fee_date_dec DATE,
    fee_date_february DATE,
    fee_date_march DATE,
    promote BOOLEAN DEFAULT 0,
    tc_issue BOOLEAN DEFAULT 0,
    msg_flg BOOLEAN DEFAULT 0,
    birth_certificate_form BOOLEAN DEFAULT 0,
    tc_form BOOLEAN DEFAULT 0,
    admission_form BOOLEAN DEFAULT 0,
    caste VARCHAR(50),
    pay_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_id (id)
)`;

        con.query(createTableSQL, async function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("Table created", result);
                let insertSQL = `INSERT INTO punching_format${sessionString} (
                    admission_number, id, name, father_name, mother_name, guardian_name, 
                    date_of_birth, father_occupation, gender, student_aadhar_no, mother_aadhar_no, 
                    father_aadhar_no, assign_class, present_address, permanent_address, 
                    academic_records, profileImage, pin, category, nationality, religion, 
                    period_of_residence_in_up, previous_school, mobile_email, phone_number, 
                    whatsapp_number, password, fee, session, 
                    fee_date_january, fee_date_april, fee_date_may, fee_date_june, 
                    fee_date_july, fee_date_august, fee_date_sep, fee_date_oct, 
                    fee_date_nov, fee_date_dec, fee_date_february, fee_date_march, 
                    promote, tc_issue, msg_flg, birth_certificate_form, 
                    tc_form, admission_form, caste, pay_timestamp
                ) VALUES ?`;



                let values = [
                    [
                        '01', 1, 'Arnav Singh', 'Rajesh Singh', 'Sita Singh', 'Amit Singh',
                        '2005-05-15', 'Engineer', 'Male', '123456789012', '098765432109',
                        '567890123456', '10th Grade', '123 Main St, City', '456 Elm St, City',
                        'Good Grades', 'path/to/image1.jpg', '123456', 'General', 'Indian',
                        'Hindu', '10 years', 'City High School', 'arnav@example.com',
                        '1234567890', '9876543210', 'securepassword1', 5000.00,
                        '2024_2025', '2024-01-01', '2024-04-01', '2024-05-01',
                        '2024-06-01', '2024-07-01', '2024-08-01', '2024-09-01',
                        '2024-10-01', '2024-11-01', '2024-12-01', '2024-02-01',
                        '2024-03-01', 0, 0, 0, 0, 0, 0, 'General', new Date()
                    ],
                    [
                        '02', 2, 'Priya Sharma', 'Ramesh Sharma', 'Geeta Sharma', 'Rahul Sharma',
                        '2006-06-20', 'Doctor', 'Female', '123456789013', '098765432108',
                        '567890123457', '9th Grade', '789 Pine St, City', '321 Oak St, City',
                        'Average Grades', 'path/to/image2.jpg', '654321', 'OBC', 'Indian',
                        'Hindu', '5 years', 'Town High School', 'priya@example.com',
                        '2345678901', '8765432109', 'securepassword2', 4500.00,
                        '2024_2025', '2024-01-02', '2024-04-02', '2024-05-02',
                        '2024-06-02', '2024-07-02', '2024-08-02', '2024-09-02',
                        '2024-10-02', '2024-11-02', '2024-12-02', '2024-02-02',
                        '2024-03-02', 1, 0, 1, 0, 1, 0, 'OBC', new Date()
                    ],
                    [
                        '03', 3, 'Rahul Gupta', 'Suresh Gupta', 'Nina Gupta', 'Ravi Gupta',
                        '2004-07-10', 'Businessman', 'Male', '123456789014', '098765432107',
                        '567890123458', '11th Grade', '111 Maple St, City', '222 Cedar St, City',
                        'Excellent Grades', 'path/to/image3.jpg', '789012', 'SC', 'Indian',
                        'Sikh', '8 years', 'Village High School', 'rahul@example.com',
                        '3456789012', '7654321098', 'securepassword3', 6000.00,
                        '2024_2025', '2024-01-03', '2024-04-03', '2024-05-03',
                        '2024-06-03', '2024-07-03', '2024-08-03', '2024-09-03',
                        '2024-10-03', '2024-11-03', '2024-12-03', '2024-02-03',
                        '2024-03-03', 0, 1, 0, 1, 0, 1, 'SC', new Date()
                    ],
                    [
                        '04', 4, 'Sneha Mehta', 'Vikram Mehta', 'Pooja Mehta', 'Riya Mehta',
                        '2005-12-25', 'Teacher', 'Female', '123456789015', '098765432106',
                        '567890123459', '10th Grade', '444 Birch St, City', '555 Spruce St, City',
                        'Good Grades', 'path/to/image4.jpg', '456789', 'General', 'Indian',
                        'Christian', '6 years', 'City High School', 'sneha@example.com',
                        '4567890123', '6543210987', 'securepassword4', 5500.00,
                        '2024_2025', '2024-01-04', '2024-04-04', '2024-05-04',
                        '2024-06-04', '2024-07-04', '2024-08-04', '2024-09-04',
                        '2024-10-04', '2024-11-04', '2024-12-04', '2024-02-04',
                        '2024-03-04', 0, 0, 1, 1, 0, 1, 'General', new Date()
                    ],
                    [
                        '05', 5, 'Karan Joshi', 'Manoj Joshi', 'Suman Joshi', 'Neha Joshi',
                        '2003-03-30', 'Engineer', 'Male', '123456789016', '098765432105',
                        '567890123460', '12th Grade', '888 Ash St, City', '999 Cherry St, City',
                        'Outstanding Grades', 'path/to/image5.jpg', '321654', 'General', 'Indian',
                        'Hindu', '7 years', 'Metro High School', 'karan@example.com',
                        '5678901234', '5432109876', 'securepassword5', 7000.00,
                        '2024_2025', '2024-01-05', '2024-04-05', '2024-05-05',
                        '2024-06-05', '2024-07-05', '2024-08-05', '2024-09-05',
                        '2024-10-05', '2024-11-05', '2024-12-05', '2024-02-05',
                        '2024-03-05', 1, 0, 0, 0, 1, 0, 'General', new Date()
                    ]
                ];



                con.query(insertSQL, [values], async function (err, result) {
                    if (err) {
                        console.log("Error inserting:", err);
                    } else {
                        console.log("Data inserted: ");
                    }
                });
            }
        });
    }
}



router.post("/recoverpassword", async function (req, res) {
    let email = req.body.email;
    let query = "SELECT * FROM 	user WHERE email = ? ";
    const value = [email];
    
    con.query(query, value, (err, result) => {
        if(result.length>0 && !err){
        console.log(result,"beti");
        result.forEach((el)=>{
            
            if (!err && result.length > 0) {
                res.send({ message: "Password Matched", status: 200 });
            } else {
                res.send({ message: "Email Does Not Exist !", status: 404, error:err });
            }
        })
    }else{
        res.send({ message: "Email Does Not Exist !", status: 404, error:err });


    }
    })
});
router.post("/checkpassword",  ((req,res)=>{
    let oldpassword = req.body.oldpassword;
    let email = req.body.email;

    let query = "SELECT * FROM user WHERE email = ?";
    const value = [email, oldpassword];

    con.query(query, value, async (err,result)=>{
        
            if(!err && result.length>0){
                result.forEach((el)=>{
                    if(el.password == oldpassword){
                    res.send({ message: "Password Matched", status: 200 });
                    console.log(result);
                    }else{
                        res.send({ message: "Password Not Matched !", status: 404, error:err });
                        
                    }
                })
            }else{
                res.send({ message: "Password Not Matched !", status: 404, error:err });


            }
                
                
            })
        }))
router.post("/newPassword", async function (req, res) {
    let password = req.body.password;
    let rePassword = req.body.rePassword;
    let lastUpdate = req.body.lastUpdate;
    let email = req.body.email;


    let query = "UPDATE user SET password = ?, rePassword = ?, lastUpdate = ? WHERE email = ?"

    const values = [password,rePassword, lastUpdate,email];

    con.query(query, values, (err, result) => {
        if (err) {
            res.status(500).send({ message: "Invalid Credential", status: 400 , error:err});
        } else {
            res.status(200).send({ message: "Succes", status: 200, data: result });
        }
    });
});


router.get("/fetchusercredential", async function (req, res) {
    let query = "SELECT * FROM user";
    con.query(query, async function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})




module.exports = router;
