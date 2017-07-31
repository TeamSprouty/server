const BankingModel = require('../models/BankingModel.js');

/**
 * BankingController.js
 *
 * @description :: Server-side logic for managing Bankings.
 */
module.exports = {

  /**
   * BankingController.list()
   */
  list: (req, res) => {
    BankingModel.find(req.query.where, req.query.fields, req.query.sort, (err, Bankings) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Banking.',
          error: err
        });
      }
      return res.json(Bankings);
    });
  },

  /**
   * BankingController.show()
   */
  show: (req, res) => {
    let id = req.params.id;
    BankingModel.findOne({_id: id}, (err, Banking) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Banking.',
          error: err
        });
      }
      if (!Banking) {
        return res.status(404).json({
          message: 'No such Banking'
        });
      }
      return res.json(Banking);
    });
  },

  /**
   * BankingController.create()
   */
  create: (req, res) => {
    let Banking = new BankingModel({
    });

    Banking.save((err, Banking) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Banking',
          error: err
        });
      }
      return res.status(201).json(Banking);
    });
  },

  /**
   * BankingController.update()
   */
  update: (req, res) => {
    let id = req.params.id;
    BankingModel.findOne({_id: id}, (err, Banking) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Banking',
          error: err
        });
      }
      if (!Banking) {
        return res.status(404).json({
          message: 'No such Banking'
        });
      }

      Banking.cc = req.body.cc ? req.body.cc : Banking.cc;
      Banking.save( (err, Banking) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Banking.',
            error: err
          });
        }

        return res.json(Banking);
      });
    });
  },

  /**
   * BankingController.remove()
   */
  remove: (req, res) => {
    let id = req.params.id;
    BankingModel.findByIdAndRemove(id, (err, Banking) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Banking.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};