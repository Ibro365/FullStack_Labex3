const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    address: {
        type: Object,
        required: true,
        building: {
            type: String,
            trim: true,
        },
        street: {
            type: String,
            required: true,
            trim: true,
        },
        zipcode: {
            type: String,
            required: true,
            trim: true,
        }
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    cuisine: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    restaurant_id: {
        type: String,
        required: true,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    },
});


  
  const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
  module.exports = Restaurant;