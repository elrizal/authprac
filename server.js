const express = require('express');
const session = require("express-session");
//const passport = require("./config/passport");
const PORT = process.env.PORT || 3000;
//const db = require("./models");
// Middleware: 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
app.use("/api", require("./routes/api-routes.js"));
app.use(require("./routes/html-routes"));

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT);
  });
});
