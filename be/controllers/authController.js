const bcrypt = require("bcrypt");
const DB_RC = require("../database/radiant-charms");
const authController = {
	//register
	register: async (req, res) => {
		// console.log(req.body);
		try {
			const hashedPassword = await bcrypt.hash(req.body.password, 10);
			querySQL = `INSERT INTO users(
                name,
                username,
                password,
                phone
            ) VALUES (?, ?, ?, ?)`;

			const user = [
				req.body.name,
				req.body.username,
				hashedPassword,
				req.body.phone,
			];

			DB_RC.query(querySQL, user, (err, result) => {
				if (err) {
					console.log(err.message);
					res.status(500).send("Username đã tồn tại hoặc có lỗi xảy ra.");
					return;
				}
				console.log("Result2");
				console.log(result);
				// Trả về kết quả thành công
				res.status(200).send({
					success: true,
					message: "Đăng ký thành công.",
				});
			});
		} catch (err) {
			res.status(500).json(err);
		}
	},

	//Login
	loginUser: async (req, res) => {
		console.log(req.body);
		try {
			// Truy vấn database để tìm kiếm người dùng
			let querySql = `SELECT * FROM users WHERE username = "${req.body.username}"`;
			let invalidPassword = {};
			DB_RC.query(querySql, async (err, results) => {
				if (err) {
					res.status(500).send("Có lỗi xảy ra.");
					return;
				}

				// Nếu không tìm thấy người dùng, trả về lỗi
				if (results.length === 0) {
					res.status(401).send("Tên người dùng hoặc mật khẩu không chính xác.");
					return;
				}

				// Nếu tìm thấy người dùng, trả về thông tin người dùng
				const user = results[0];
				const invalidPassword = await bcrypt.compare(
					req.body.password,
					user.password
				);
				console.log("invalidPassword");
				console.log(invalidPassword);
				if (invalidPassword) {
					res.status(200).json({
						message: "Đăng nhập thành công.",
						user,
					});
				} else {
					res.status(401).json({
						message: "Tên người dùng hoặc mật khẩu không chính xác.",
					});
				}
			});
		} catch (err) {
			res.status(500).json(err);
		}
	},
};

module.exports = authController;
