const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Home page of barebell bros");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running on localhost:${PORT}`);
  } else {
    console.log(`Error occured , server can start ${error}`);
  }
});
