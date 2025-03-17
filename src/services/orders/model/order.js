const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    services: [
        {
            service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
            service_price_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ServicePricing', required: true },
            price: { type: Number, required: true }
        }
    ],

    car_make: { type: String, required: true },
    car_model: { type: String, required: true },
    fuel_type: {
        type: String,
        enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid'],
        required: true
    },
    transmission_type: {
        type: String,
        enum: ['Manual', 'Automatic'],
        required: true
    },

    order_status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'In Progress', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    total_price: { type: Number, required: true },

    order_date: { type: Date, default: Date.now },
    appointment_date: { type: Date, required: true },
    appointment_time: { type: String, required: true },

    pickup_required: { type: Boolean, default: false },
    pickup_address: { type: String },

    payment_status: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],
        default: 'Pending'
    },
    payment_method: {
        type: String,
        enum: ['Cash', 'Card', 'UPI', 'Net Banking'],
        required: true
    },
    transaction_id: { type: String },

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
