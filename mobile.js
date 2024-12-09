import mongoose from 'mongoose';

// BSON
const MobileSchema = new mongoose.Schema({
    mobile_name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be at least 2 characters long"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price must be a positive number"],
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    brand: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    features: {
      type: [String], // Array of features such as "5G", "AMOLED", etc.
    },
    category: {
      type: String,
      required: true,
      enum: ["smartphone", "tablet", "feature phone"],
    },
    model: {
      type: String,
      required: true,
    }
});

const Mobile = mongoose.model('Mobile', MobileSchema);

export default Mobile;
