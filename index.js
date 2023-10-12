const express = require("express");
const users = require("./data.json");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("this my node server");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  console.log("data tirggered");
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`My server running on port ${port}`);
});
