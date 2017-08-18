const OfferModel = require('../models/OfferModel.js');

/**
 * OfferController.js
 *
 * @description :: Server-side logic for managing Offers.
 */
module.exports = {

  /**
   * OfferController.list()
   */
  list: (req, res) => {
    OfferModel.find(req.query.where, req.query.fields, req.query.sort, (err, Offers) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Offer.',
          error: err
        });
      }
      return res.json(Offers);
    });
  },

  /**
   * OfferController.show()
   */
  show: (req, res) => {
    let id = req.params.id;
    OfferModel.findOne({_id: id}, (err, Offer) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Offer.',
          error: err
        });
      }
      if (!Offer) {
        return res.status(404).json({
          message: 'No such Offer'
        });
      }
      return res.json(Offer);
    });
  },

  /**
   * OfferController.create()
   */
  create: (req, res) => {
    let Offer = new OfferModel({			swapper : req.body.swapper,			swapperplants : req.body.swapperplants,			swappee : req.body.swappee,			swappeeplants : req.body.swappeeplants,			dateoffered : req.body.dateoffered,			expired : req.body.expired,			accepted : req.body.accepted
    });

    Offer.save((err, Offer) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Offer',
          error: err
        });
      }
      return res.status(201).json(Offer);
    });
  },

  /**
   * OfferController.update()
   */
  update: (req, res) => {
    let id = req.params.id;
    OfferModel.findOne({_id: id}, (err, Offer) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Offer',
          error: err
        });
      }
      if (!Offer) {
        return res.status(404).json({
          message: 'No such Offer'
        });
      }

      Offer.swapper = req.body.swapper ? req.body.swapper : Offer.swapper;			Offer.swapperplants = req.body.swapperplants ? req.body.swapperplants : Offer.swapperplants;			Offer.swappee = req.body.swappee ? req.body.swappee : Offer.swappee;			Offer.swappeeplants = req.body.swappeeplants ? req.body.swappeeplants : Offer.swappeeplants;			Offer.dateoffered = req.body.dateoffered ? req.body.dateoffered : Offer.dateoffered;			Offer.expired = req.body.expired ? req.body.expired : Offer.expired;			Offer.accepted = req.body.accepted ? req.body.accepted : Offer.accepted;			
      Offer.save( (err, Offer) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Offer.',
            error: err
          });
        }

        return res.json(Offer);
      });
    });
  },

  /**
   * OfferController.remove()
   */
  remove: (req, res) => {
    let id = req.params.id;
    OfferModel.findByIdAndRemove(id, (err, Offer) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Offer.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
