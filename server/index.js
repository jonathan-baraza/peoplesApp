const express = require("express");
const app = express();
const colors = require("colors");
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");

// app.use(cors);

const mainRoutes = require("./routes/mainRoutes");
app.use("/api", mainRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.cyan.underline);
});
