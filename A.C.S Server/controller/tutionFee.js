const express = require("express");
const connection = require("../connection.js");
const router = express.Router();


router.post("/fetchtutionfee", (req, res) => {

  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const sessionString = `${currentYear}_${nextYear}`; // 2024_2025


  const { stdate, enddate, assign_class } = req.body;

  if (!stdate || !enddate) {
    return res.status(400).send("startDate, endDate, and sessionString are required.");
  }

  const start = new Date(stdate);
  const end = new Date(enddate);

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
                    assign_class = ?`;

  const params = [];
  for (let i = 0; i < months.length; i++) {
    params.push(formattedStart, formattedEnd);
  }
  params.push(assign_class);

  console.log(params);
  connection.query(query, params, (err, results) => {
    if (err) {
      console.error("Error querying the database:", err);
      return res.status(500).send("Database error.");
    }

    res.send({ data: results, message: "Data Fetched", status: 200 });
  });
});









module.exports = router;