const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require('dotenv').config();

connectDb();
const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use("/api/vehicles", require('./odiigo-modules/vehicles/routes/vehicleRoutes'))
app.use("/api/services", require('./odiigo-modules/categories/services/routes/serviceRoutes'))
app.use("/api/categories", require('./odiigo-modules/categories/routes/categoryRoutes'))
app.use("/api/servicePricing", require('./odiigo-modules/service-prices/routes/servicePricingRoutes'))
app.use("/api/userProfile", require('./odiigo-modules/users/routes/userRoutes'))
app.use('/api/order', require('./odiigo-modules/orders/routes/orderRoutes'))
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});
