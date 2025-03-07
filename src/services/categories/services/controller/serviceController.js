const asyncHandler = require('express-async-handler');
const Service = require('../models/services');

// Get all services
// @route GET /api/services
const getServices = asyncHandler(async (req, res) => {
    const services = await Service.find();
    res.status(200).json(services);
});

// Get service by ID
// @route GET /api/services/:id
const getServiceById = asyncHandler(async (req, res) => {
    const service = await Service.findById(req.params.id);

    if (!service) {
        return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json(service);
});

// Create new service
// @route POST /api/services
const createService = asyncHandler(async (req, res) => {
    const service = new Service(req.body);
    await service.save();

    res.status(201).json(service);
});

// Update service by ID
// @route PUT /api/services/:id
const updateService = asyncHandler(async (req, res) => {
    const service = await Service.findById(req.params.id);
    if (!service) {
        return res.status(404).json({ message: 'Service not found' });
    }

    const updatedService = await Service.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedService);
});

// Delete service by ID
// @route DELETE /api/services/:id

const deleteService = asyncHandler(async (req, res) => {
    const service = await Service.findById(req.params.id);
    if (!service) {
        return res.status(404).json({ message: 'Service not found' });
    }

    await Service.findByIdAndDelete(req.params.id);
    res.status(200).json(service);
});

module.exports = {
    getServices,
    getServiceById,
    createService,
    updateService,
    deleteService
};
