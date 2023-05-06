const express = require('express');
const mongoose = require("mongoose");
const app = express();

const routes = require("./src/Routes/index");


app.use(express.json());
app.use(require('cors')());
app.use("/api/v1", require("./src/Routes/index")); 

const dbURI = 'mongodb+srv://root:root123@data.iw4nv.mongodb.net/myFirstDatabase?retryWrites=true';
mongoose.connect(dbURI, {useNewUrlParser: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// Start the server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});