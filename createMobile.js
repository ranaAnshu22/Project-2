import express from 'express';
import Mobile from '../models/mobile.js';  // Import the Mobile model instead of Car
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const { mobile_name, price, description, category, stock, brand, features, model } = req.body;
        // Check if required fields are provided
        if (!mobile_name || !price || !description || !category || !stock || !brand || !model) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create a new mobile instance
        const newMobile = new Mobile({
            mobile_name,
            price,
            description,
            category,
            stock,
            brand,
            features,
            model
        });

        // Save the mobile to the database
        const savedMobile = await newMobile.save();
        res.status(201).json(savedMobile);  // Return the saved mobile object as response

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
