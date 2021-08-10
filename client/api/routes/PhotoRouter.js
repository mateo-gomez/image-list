const express = require("express");
const router = express.Router();
const PhotoModel = require("../models/Photo.js");

router
	.route("/photos")
	.get(async (req, res) => {
		// const data = [
		// 	{
		// 		id: 0,
		// 		url: "https://images.unsplash.com/photo-1542641734-3b824eaabad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		// 		label: "playa",
		// 	},
		// 	{
		// 		id: 1,
		// 		url: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		// 		label: "paisaje",
		// 	},
		// 	{
		// 		id: 2,
		// 		url: "https://images.unsplash.com/photo-1542480118439-cbba7870f6f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		// 		label: "asia",
		// 	},
		// ];

		try {
			const data = await PhotoModel.find();

			res.json({ data: data });
		} catch (error) {
			console.error(error);

			res.json({ message: "error" });
		}
	})
	.post((req, res) => {
		const photo = new PhotoModel(req.body);
		photo.save((err, photo) => {
			if (err) {
				res.json({ message: "Error guardando photo" });

				return console.log(err);
			}

			res.json({ message: "Photo agregada exitosamente." });
		});
	});

router.route("/photos/:id").delete(async (req, res) => {
	console.log(req.params);
	try {
		const algo = await PhotoModel.deleteOne({_id: req.params.id});
		console.log(algo)
	} catch (error) {
		return res.status(500).json({ message: "Error al eliminar photo." });
	}

	res.json({ message: "Photo eliminada exitosamente." });
});

module.exports = router;
