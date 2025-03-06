const express = require("express");
const connectDb = require("./config/dbConnection");
// const { connect } = require("./services/vehicles/routes/vehicleRoutes");
const dotenv = require('dotenv').config();

connectDb();
const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use("/api/vehicles", require('./services/vehicles/routes/vehicleRoutes'))
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});
