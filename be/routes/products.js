const express = require("express");

const router = express.Router();
const DB_RC = require("../database/radiant-charms");

router.get("/", (req, res) => {
	const sql = "select * from warehouse";
	DB_RC.query(sql, (err, data) => {
		if (err) {
			return res.json(err);
		}
		res
			.status(200)
			.json({ message: "Handling GET requests to /products", data: data });
	});
});

router.post("/", (req, res) => {
	res.status(200).json({ message: "Handling POST requests to /products" });
});

router.get("/:productsId", (req, res) => {
	const id = req.params.productsId;
	const sql = `select * from warehouse where ID_warehouse = ${id}`;
	DB_RC.query(sql, (err, data) => {
		if (err) {
			return res.json({ message: "Không tìm thấy sản phẩmsas" });
		}
		res.status(200).json({ message: "Đã tìm được sản phẩm", data: data });
	});
});

module.exports = router;
