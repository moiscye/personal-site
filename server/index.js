const keys = require("./config/dev");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();

//cross origin decl
app.use(cors());
//handles incoming data
app.use(bodyParser.json());

require("./routes/contactRoutes")(app);

//setting up the PORT to be used
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening in port ${PORT}`));
