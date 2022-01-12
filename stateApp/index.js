const express = require("express");
const app = express();
const cors = require("cors");
const api = require('./Routes/api');

//middleware
app.use(cors());
app.use(express.json()); //req.body


app.use('/api', api);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is running on port 3000")
});
