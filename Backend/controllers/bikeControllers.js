const Bike = require("../models/bikeModel");

exports.createBike = async (req, res) => {

    try {
        const { bikeName, bikePrice, bikeDescription, bikePhoto } = req.body;

        if (!bikeName || !bikePrice || !bikeDescription || !bikePhoto) {
            return res.status(400).json({
                message: 'Please fill all data',
                success: false,
            });
        }

        const bike = await Bike.create({ ...req.body, createdBy: req.userId });

        res.status(201).json({
            message: "Bike added successfully ",
            success: true,
            bike
        });


    } catch (error) {
        res.status(500).json({
            message:error.message,
            success:false ,
        });
    }
}