const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const cors = require("cors");

const app = express();

// Initialize middleware
app.use(logger);
app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set a static folder
// public/index.html will be served by default
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/games", require("./routes/api/games"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
 