const mysql = require("mysql");

const DB_RC = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "radiant_charms",
});

module.exports = DB_RC;
