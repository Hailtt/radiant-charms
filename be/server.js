const express = require("express");
const cors = require("cors");
const ProductsRoutes = require("./routes/products");
const UsersRoutes = require("./routes/auth");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", UsersRoutes);
app.use("/products", ProductsRoutes);

app.listen(PORT, () => {
	console.log(`Connected to Server with PORT: ${PORT} !!!`);
});
