const express = require("express");
const con = require("../connection.js");
const router = express.Router();

router.post("/savebookrecords", async function (req, res) {
    let vendorId = req.body.vendorId
    let invoiceNo = req.body.invoiceNo
    let invoiceDate = req.body.invoiceDate
    let bookCode = req.body.bookCode
    let bookName = req.body.bookName
    let bookPublisher = req.body.bookPublisher
    let class_Assign = req.body.class_Assign;
    let quantity = req.body.quantity
    let mrpRate = req.body.mrpRate
    let discount = req.body.discount
    let totalPurchasingAmount = req.body.totalPurchasingAmount
    let totalAmount = req.body.totalAmount

    let query = "INSERT INTO book_mangemement_stalk_in_book_record (vendorId, invoiceNo, invoiceDate, bookCode, bookName, bookPublisher, class_Assign, quantity, mrpRate, discount, totalPurchasingAmount, totalAmount) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const value = [vendorId, invoiceNo, invoiceDate, bookCode, bookName, bookPublisher, class_Assign, quantity, mrpRate, discount, totalPurchasingAmount, totalAmount];

    con.query(query, value, async (err, result) => {
        if (err) throw err;
        console.log("Book Record Saved");
        res.send({ massage: "succes", status: 200 })
    })

})

router.get("/savebookrecords", async function (req, res) {
    let query = "SELECT * FROM book_mangemement_stalk_in_book_record";
    con.query(query, async function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})

router.delete('/deletebookrecords/:id', (req, res) => {
    const { id } = req.params;

    con.query('DELETE FROM book_mangemement_stalk_in_book_record WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Record not found' });
        }

        res.status(200).json({ message: 'Record deleted successfully' });
    });
});





router.put('/editbookrecords/:id', (req, res) => {
    const userId = req.params.id;
    console.log("USER ID ", userId);
    const { vendorId, invoiceNo, invoiceDate, bookCode, bookName, bookPublisher, class_Assign, quantity, mrpRate, discount, totalPurchasingAmount, totalAmount } = req.body;

    const query = `UPDATE book_mangemement_stalk_in_book_record SET vendorId = ?, invoiceNo = ?, invoiceDate = ?, bookCode = ?, bookName = ?, bookPublisher = ?, class_Assign = ?, quantity = ?, mrpRate = ?, discount = ?, totalPurchasingAmount = ?, totalAmount = ? WHERE id =${userId} `;
    const values = [vendorId, invoiceNo, invoiceDate, bookCode, bookName, bookPublisher, class_Assign, quantity, mrpRate, discount, totalPurchasingAmount, totalAmount];

    con.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error updating user');
        } else {
            res.status(200).send({ message: "Succes", status: 200 });
        }
    });
});
module.exports = router;
