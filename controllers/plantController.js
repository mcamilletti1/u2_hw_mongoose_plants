const { Plant } = require('../models');


const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find({})
        return res.status(200).json(plants)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPlantById = async (req, res) => {
    try {
        const { id } = req.params;
        const plant = await Plant.findById(id)
        if (plant) {
            return res.status(200).json({ plant });
        }
        return res.status(404).send('Plant with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllPlants,
    getPlantById
}