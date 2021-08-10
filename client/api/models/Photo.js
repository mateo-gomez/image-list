const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
	url: String,
	label: String,
});

const Photo = new mongoose.model("Photo", photoSchema);

module.exports = Photo;
