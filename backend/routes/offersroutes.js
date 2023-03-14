const express = require('express');
const router = express.Router();
const offersController = require('../controllers/offersController');

// Routes related to offers
router.get('/',(req,res) => { 
    offersController.getAllOffers
});
router.post('/',(req,res) => { 
     offersController.createOffer
    });
router.get('/:id',(req,res) => { 
     offersController.getOfferById
    });
router.put('/:id',(req,res) => { 
     offersController.updateOffer
    });
router.delete('/:id',(req,res) => { 
     offersController.deleteOffer
    });

module.exports = router;
