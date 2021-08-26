const mongoose = require('../db');

const carSchema = mongoose.Schema(
  {
    make: {
      type: String,
      trim: true,
      required: true,
    },
    model: {
      type: String,
      trim: true,
      required: true,
    },
    year: {
      type: Number,
      required: true,
      trim: true,
      minLength: [4, 'year should be 4 digit'],
      maxLength: 4,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['Live', 'Sold'],
      default: 'Live',
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('CarsTable', carSchema);
