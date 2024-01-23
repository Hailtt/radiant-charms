const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const PORT = 3000;
const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
})

app.get("/", (req, res) => {
	return res.json("From Backend Side");
});

app.listen(PORT, () => {
	console.log("Connected to Server !!!");
});
