const express = require("express");
const app = express();
const cors = require("cors");
const port = 3003;
const path = require("path");
const photoRouter = require("./routes/PhotoRouter.js");
require("./database.js");

app.use(cors());
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "..", "build")));

app.use("/api", photoRouter);

app.listen(port, () => {
	console.log(`Listening at port http://localhost:${port}`);
});
