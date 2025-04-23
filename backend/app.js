const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const todoRoutes = require("./routes/todo");
const cors= require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/todo", todoRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found", url: req.originalUrl });
});

mongoose
  .connect(
    "mongodb+srv://geeksshashank:<password>@cluster0.0bxwz.mongodb.net/todo"
  )
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
