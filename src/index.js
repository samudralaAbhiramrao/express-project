import express from "express";

const app = express();
const port = process.env.port || 3000;

const mockuser = [
  {
    id: 1,
    Name: "Abhiram",
    Age: 20,
  },
  {
    id: 2,
    Name: "Bindu",
    Age: 18,
  },
  {
    id: 3,
    Name: "Venkat",
    Age: 50,
  },
  {
    id: 4,
    Name: "Srikala",
    Age: 40,
  },
];

app.get("/", (req, res) => {
  console.log("something happening");
  res.send({ msg: "Hello" }).status(200);
});
app.get("/api/users", (req, res) => {
  res.send([{ name: "Abhiram" }, { Name: "Bindu" }]).status(200);
});

app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.status(400).send("Invalid Code");
  }

  const searcheduser = mockuser.find((user) => user.id == id);

  if (!searcheduser) return res.status(404).send("User not found");
  else return res.status(200).send(searcheduser);
});
app.listen(port, () => {
  console.log(`port started at ${port}`);
});
