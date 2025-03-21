const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require('dotenv').config();
const { redisClient } = require("./odiigo-modules/auth/config/redis");

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
app.use('/api/auth', require('./odiigo-modules/auth/routes/auth'));
app.use('/api/pincode', require('./odiigo-modules/service-pincode/routes/pincodeRoutes'));
app.use('/api/serviceBuddy', require('./odiigo-modules/service-buddies/routes/serviceBuddyRoutes'));


// Connect to Redis
redisClient.connect().then(() => console.log("Redis connected successfully")).catch(console.error);

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});
