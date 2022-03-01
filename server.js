// This is the absolute bare bones to get your server running in a browser
const express = require("express");

// Init express
const app = express();
const PORT = process.env.PORT || 5000;

// Create your endpoints/route handlers
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// Listen on a port
app.listen(PORT, () => console.log(`Server running on: ${PORT}`));
