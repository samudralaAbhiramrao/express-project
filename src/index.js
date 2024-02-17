import express from "express";

const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  console.log("something happening");
  res.send({ msg: "Hello" }).status(200);
});

app.listen(port, () => {
  console.log(`port started at ${port}`);
});
