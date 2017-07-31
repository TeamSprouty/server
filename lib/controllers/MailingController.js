const MailingModel = require('../models/MailingModel.js');

/**
 * MailingController.js
 *
 * @description :: Server-side logic for managing Mailings.
 */
module.exports = {

  /**
   * MailingController.list()
   */
  list: (req, res) => {
    MailingModel.find(req.query.where, req.query.fields, req.query.sort, (err, Mailings) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Mailing.',
          error: err
        });
      }
      return res.json(Mailings);
    });
  },

  /**
   * MailingController.show()
   */
  show: (req, res) => {
    let id = req.params.id;
    MailingModel.findOne({_id: id}, (err, Mailing) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Mailing.',
          error: err
        });
      }
      if (!Mailing) {
        return res.status(404).json({
          message: 'No such Mailing'
        });
      }
      return res.json(Mailing);
    });
  },

  /**
   * MailingController.create()
   */
  create: (req, res) => {
    let Mailing = new MailingModel({			street : req.body.street,			zip : req.body.zip,			city : req.body.city,			country : req.body.country,			instructions : req.body.instructions,			owner : req.body.owner
    });

    Mailing.save((err, Mailing) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Mailing',
          error: err
        });
      }
      return res.status(201).json(Mailing);
    });
  },

  /**
   * MailingController.update()
   */
  update: (req, res) => {
    let id = req.params.id;
    MailingModel.findOne({_id: id}, (err, Mailing) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Mailing',
          error: err
        });
      }
      if (!Mailing) {
        return res.status(404).json({
          message: 'No such Mailing'
        });
      }

      Mailing.street = req.body.street ? req.body.street : Mailing.street;			Mailing.zip = req.body.zip ? req.body.zip : Mailing.zip;			Mailing.city = req.body.city ? req.body.city : Mailing.city;			Mailing.country = req.body.country ? req.body.country : Mailing.country;			Mailing.instructions = req.body.instructions ? req.body.instructions : Mailing.instructions;			Mailing.owner = req.body.owner ? req.body.owner : Mailing.owner;			
      Mailing.save( (err, Mailing) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Mailing.',
            error: err
          });
        }

        return res.json(Mailing);
      });
    });
  },

  /**
   * MailingController.remove()
   */
  remove: (req, res) => {
    let id = req.params.id;
    MailingModel.findByIdAndRemove(id, (err, Mailing) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Mailing.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
