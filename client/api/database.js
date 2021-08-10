const mongoose = require("mongoose");

const server = "mongodb://localhost";
const port = 27017;
const database = "photo-list";

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose.connect(`${server}:${port}/${database}`, options);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
	console.log("Database connected.");
});
