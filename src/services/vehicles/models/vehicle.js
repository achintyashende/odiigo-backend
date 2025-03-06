const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema(
    {
        request_id: { type: String, default: "" },
        license_plate: { type: String, default: "" },
        owner_name: { type: String, default: "" },
        father_name: { type: String, default: "" },
        is_financed: { type: String, default: "" },
        financer: { type: String, default: "" },
        present_address: { type: String, default: "" },
        permanent_address: { type: String, default: "" },
        insurance_company: { type: String, default: "" },
        insurance_policy: { type: String, default: "" },
        insurance_expiry: { type: String, default: "" },
        class: { type: String, default: "" },
        registration_date: { type: String, default: "" },
        vehicle_age: { type: String, default: "" },
        pucc_upto: { type: String, default: "" },
        pucc_number: { type: String, default: "" },
        chassis_number: { type: String, default: "" },
        engine_number: { type: String, default: "" },
        fuel_type: { type: String, default: "" },
        brand_name: { type: String, default: "" },
        brand_model: { type: String, default: "" },
        cubic_capacity: { type: String, default: "" },
        gross_weight: { type: String, default: "" },
        cylinders: { type: String, default: "" },
        color: { type: String, default: "" },
        norms: { type: String, default: "" },
        noc_details: { type: String, default: "" },
        seating_capacity: { type: String, default: "" },
        owner_count: { type: String, default: "" },
        tax_upto: { type: String, default: "" },
        tax_paid_upto: { type: String, default: "" },
        permit_number: { type: String, default: "" },
        permit_issue_date: { type: String, default: "" },
        permit_valid_from: { type: String, default: "" },
        permit_valid_upto: { type: String, default: "" },
        permit_type: { type: String, default: "" },
        national_permit_number: { type: String, default: "" },
        national_permit_upto: { type: String, default: "" },
        national_permit_issued_by: { type: String, default: "" },
        rc_status: { type: String, default: "" },
        // User-provided fields if API data is missing
        transmission: { type: String, default: "" },
        registration_number: { type: String, default: "" },
        make: { type: String, default: "" }, // Maps to brand_name
        model: { type: String, default: "" } // Maps to brand_model
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('Vehicle', VehicleSchema);
