const express = require("express");

const app = express();

const http = require("http").Server(app);
const dbMiddleware = require("./middleware/database");
const UserModel = require("./model/User");
const { server, redis } = require("./config");

app.use(express.json());

app.use(dbMiddleware);

app.get("/users/:id", async (request, response) => {
  const { id } = request.params;
  const user = await UserModel.findOne({ _id: id });
  response.send(user);
});

app.post("/user", async (req, res) => {
  console.log("Here.");
  console.log(req.body);
  const { name, surname, age, email } = req.body;

  const user = await UserModel.create({
    name,
    surname,
    age,
    email,
  });

  res.send(user);
});

app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedUser = await UserModel.updateOne(
    { _id: id },
    { $set: { name } }
  );
  res.send(updatedUser);
});
// Delete operation.
app.delete("/user/:name", async (req, res) => {});

http.listen(server.port, () => {
  console.log(`Server is running on port ${server.port}`);
});
