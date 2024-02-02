const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const dbConfig = require("./configs/db.config");
const port = 3000;
console.clear();

const app = express();
app.use(cors());

function requestTime(req, res, next) {
  process.stdout.write(`Request-Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} IST, ${req.method} ${req.url} \n`);
  next();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestTime);

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);



 // logs request time 

mongoose
  .connect(dbConfig.DB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.log(err.message);
  });

