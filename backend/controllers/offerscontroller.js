const Offer = require('../models/offerModel');

exports.getOffers = async (req, res) => {
  try {
    const { page = 1, records = 10, attribute, query } = req.query;
    const options = {
      page: parseInt(page),
      limit: parseInt(records),
      sort: { offer_sort_order: 1 },
    };
    const filter = {};
    if (attribute && query) {
      filter[attribute] = new RegExp(query, 'i');
    }
    const offers = await Offer.paginate(filter, options);
    res.status(200).json(offers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createOffer = async (req, res) => {
  try {
    const offer = new Offer(req.body);
    const result = await offer.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateOffer = async (req, res) => {
  try {
    const { offer_id } = req.params;
    const result = await Offer.updateOne({ offer_id }, { $set: req.body });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteOffer = async (req, res) => {
  try {
    const { offer_id } = req.params;
    const result = await Offer.deleteOne({ offer_id });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
