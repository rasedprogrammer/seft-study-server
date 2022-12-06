const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const categories = require("./data/categories.json");

app.use(cors());

app.get("/", (req, res) => {
	res.send("Server Is Running");
});

app.get("/categories", (req, res) => {
	res.send(categories);
});

app.get("/categories/:id", (req, res) => {
	const categories_course = categories.filter((c) => c.id === req.params.id);
	res.send(categories_course);
});

app.get("/courses", (req, res) => {
	res.send(categories);
});

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
