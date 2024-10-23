const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demo");
  console.log("db connected");
}
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  comment: String,
});

const User = mongoose.model("User", userSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post("/demo", async (req, res) => {
  let user = new User();
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.comment = req.body.comment;
  const doc = await user.save();

  console.log(doc);
  res.json(doc);
});

server.get("/demo", async (req, res) => {
  const docs = await User.find({});
  res.json(docs);
});

const port = 8080;

server.listen(port, () => {
  console.log("server started");
});

//to install backend server create one
//folder then create one file called "index.js"

//npm init -y  any node will intiallize

//for express: npm install express

//CORS := cross orgin means(server)
//which is to allow the request
//to install cors: npm install cors


//to resolve the issue of live update
//npm install -g nodemon

//to connect mangodb
//npm install mongoose --save

//start mongod
//mongod
//mongod -dbpath ./Database