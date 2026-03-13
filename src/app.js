const express = require("express");

const app = express();

app.use(express.json());

/**
 * require all the routes here
 */
const authRoutes = require("./routes/auth.routes");


/**
 * require all the routes here
 */
app.use("/api/auth", authRoutes)



module.exports = app;
