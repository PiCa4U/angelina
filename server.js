const express = require("express");
const path = require("path");
const app = express();


app.use(express.static(path.join(__dirname)));
// Serve the index.html file at the root endpoint
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Set the app to listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
