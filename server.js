const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/signmeup");

// ********************************************************************************
// Get it working top level first before trying to debug the controllers and routes!

// const db = require("./models");

// // Add routes, both API and view
// app.post("/api/users", (req, res) => {
//   console.log(req.body);
//   console.log("db", db);

//   db.Users.create(req.body)
//     .then((dbModel) => res.json(dbModel))
//     .catch((err) => res.status(422).json(err));

//   // res.send(
//   //   `I received your POST request. This is what you sent me: ${req.body.post}`
//   // );
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

app.use(routes);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


