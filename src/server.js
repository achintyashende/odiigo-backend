const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require('dotenv').config();

connectDb();
const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use("/api/vehicles", require('./services/vehicles/routes/vehicleRoutes'))
app.use("/api/services", require('./services/categories/services/routes/serviceRoutes'))
app.use("/api/categories", require('./services/categories/routes/categoryRoutes'))
app.use("/api/servicePricing", require('./services/service-prices/routes/servicePricingRoutes'))
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});
