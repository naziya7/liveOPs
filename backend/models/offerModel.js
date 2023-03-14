const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  offer_id: {
    type: String,
    unique: true,
    required: true
  },
  offer_title: {
    type: String,
    required: true
  },
  offer_description: {
    type: String,
    required: true
  },
  offer_image: {
    type: String,
    required: true
  },
  offer_sort_order: {
    type: Number,
    required: true
  },
  content: [
    {
      item_id: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  schedule: {
    days_of_week: [Number],
    dates_of_month: [Number],
    months_of_year: [Number]
  },
  target: {
    type: String,
    required: true
  },
  pricing: [
    {
      currency: {
        type: String,
        required: true
      },
      cost: {
        type: Number,
        required: true
      }
    }
  ]
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
