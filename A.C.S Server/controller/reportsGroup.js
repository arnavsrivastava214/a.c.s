const express = require("express");
const connection = require("../connection.js");
const router = express.Router();

router.post("/fetchCompleteReport", (req, res) => {
    console.log(req.body);
    let { startDate, endDate, assign_class } = req.body;

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`; // 2024_2025


    const start = new Date(startDate);
    const end = new Date(endDate);

    const formattedStart = start.toISOString().split('T')[0];
    const formattedEnd = end.toISOString().split('T')[0];

    const months = [
        'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'sep', 'oct', 'nov', 'dec'
    ];

    const condition = months.map(month => {
        return `DATE(fee_date_${month}) BETWEEN ? AND ?`;
    }).join(' OR ');

    const query = `SELECT 
                    admission_number, 
                    name, 
                    father_name, 
                    assign_class, 
                    phone_number AS contact_number, 
                    fee
                 FROM 
                    punching_format${sessionString}
                 WHERE 
                    ${condition}  AND 
                    assign_class = ? 
                    ORDER BY pay_timestamp ASC`;

    const params = [];
    for (let i = 0; i < months.length; i++) {
        params.push(formattedStart, formattedEnd);
    }
    params.push(assign_class);

    connection.query(query, params, (error, result) => {
        if (!error) {
            res.send({ message: "data fetched", status: 200, data: result.map((item) => { return { ...item, fee: JSON.parse(item.fee) } }) });
        }
        else {
            res.send({ message: "Error", status: 400, error: error });
        }
    });
});

router.post("/fetchCollectionReport", (req, res) => {
    let { startDate, endDate, assign_class } = req.body;

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`; // 2024_2025

    const start = new Date(startDate);
    const end = new Date(endDate);

    const formattedStart = start.toISOString().split('T')[0];
    const formattedEnd = end.toISOString().split('T')[0];

    const months = [
        'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'sep', 'oct', 'nov', 'dec'
    ];

    const condition = months.map(month => {
        return `DATE(fee_date_${month}) BETWEEN ? AND ?`;
    }).join(' OR ');

    const query = `SELECT 
                    admission_number, 
                    name, 
                    father_name, 
                    assign_class, 
                    phone_number AS contact_number, 
                    fee
                 FROM 
                    punching_format${sessionString}
                 ORDER BY pay_timestamp ASC`;

    const params = [];
    for (let i = 0; i < months.length; i++) {
        params.push(formattedStart, formattedEnd);
    }
    params.push(assign_class);

    connection.query(query, params, (error, result) => {
        if (!error) {
            res.send({ message: "data fetched", status: 200, data: result.map((item) => { return { ...item, fee: JSON.parse(item.fee) } }) });
        }
        else {
            res.send({ message: "Error", status: 400, error: error });
        }
    });
});

router.post("/fetchCollectionAdmission", (req, res) => {
    let { admission_number } = req.body;

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`; // 2024_2025

    const query = `SELECT 
                    admission_number, 
                    name, 
                    father_name, 
                    assign_class, 
                    phone_number AS contact_number, 
                    fee
                 FROM 
                    punching_format${sessionString}
                 WHERE 
                    admission_number = ?`;

    const value = [admission_number];
    connection.query(query, value, (error, result) => {
        if (!error) {
            res.send({ message: "data fetched", status: 200, data: result.map((item) => { return { ...item, fee: JSON.parse(item.fee) } }) });
        }
        else {
            res.send({ message: "Error", status: 400, error: error });
        }
    });
});

router.post("/fetchCollectionStartEndDate", (req, res) => {
    let { startDate, endDate } = req.body;

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const sessionString = `${currentYear}_${nextYear}`; // 2024_2025


    const start = new Date(startDate);
    const end = new Date(endDate);

    const formattedStart = start.toISOString().split('T')[0];
    const formattedEnd = end.toISOString().split('T')[0];

    const months = [
        'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'sep', 'oct', 'nov', 'dec'
    ];

    const condition = months.map(month => {
        return `DATE(fee_date_${month}) BETWEEN ? AND ?`;
    }).join(' OR ');

    const query = `SELECT 
                    admission_number, 
                    name, 
                    father_name, 
                    assign_class, 
                    phone_number AS contact_number, 
                    fee
                 FROM 
                    punching_format${sessionString}
                 WHERE 
                    ${condition}`;

    const params = [];
    for (let i = 0; i < months.length; i++) {
        params.push(formattedStart, formattedEnd);
    }

    connection.query(query, params, (error, result) => {
        if (!error) {
            res.send({ message: "data fetched", status: 200, data: result.map((item) => { return { ...item, fee: JSON.parse(item.fee) } }) });
        }
        else {
            res.send({ message: "Error", status: 400, error: error });
        }
    });
});


module.exports = router;