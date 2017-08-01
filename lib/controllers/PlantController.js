const PlantModel = require('../models/PlantModel.js');

/**
 * PlantController.js
 *
 * @description :: Server-side logic for managing Plants.
 */
module.exports = {

  /**
   * PlantController.list()
   */
  list: (req, res) => {
    PlantModel.find(req.query.where, req.query.fields, req.query.sort, (err, Plants) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Plant.',
          error: err
        });
      }
      return res.json(Plants);
    });
  },

  /**
   * PlantController.show()
   */
  show: (req, res) => {
    let id = req.params.id;
    PlantModel.findOne({_id: id}, (err, Plant) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Plant.',
          error: err
        });
      }
      if (!Plant) {
        return res.status(404).json({
          message: 'No such Plant'
        });
      }
      return res.json(Plant);
    });
  },

  /**
   * PlantController.create()
   */
  create: (req, res) => {
    let Plant = new PlantModel({			name : req.body.name,			size : req.body.size,			color : req.body.color,			desc : req.body.desc,			price : req.body.price,			shippingcost : req.body.shippingcost,			country : req.body.country,			category : req.body.category,			medicinal : req.body.medicinal,			posted : req.body.posted,			indoor : req.body.indoor,			available : req.body.available,			owner : req.body.owner,			images : req.body.images
    });

    Plant.save((err, Plant) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Plant',
          error: err
        });
      }
      return res.status(201).json(Plant);
    });
  },

  /**
   * PlantController.update()
   */
  update: (req, res) => {
    let id = req.params.id;
    PlantModel.findOne({_id: id}, (err, Plant) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Plant',
          error: err
        });
      }
      if (!Plant) {
        return res.status(404).json({
          message: 'No such Plant'
        });
      }

      Plant.name = req.body.name ? req.body.name : Plant.name;			Plant.size = req.body.size ? req.body.size : Plant.size;			Plant.color = req.body.color ? req.body.color : Plant.color;			Plant.desc = req.body.desc ? req.body.desc : Plant.desc;			Plant.price = req.body.price ? req.body.price : Plant.price;			Plant.shippingcost = req.body.shippingcost ? req.body.shippingcost : Plant.shippingcost;			Plant.country = req.body.country ? req.body.country : Plant.country;			Plant.category = req.body.category ? req.body.category : Plant.category;			Plant.medicinal = req.body.medicinal ? req.body.medicinal : Plant.medicinal;			Plant.posted = req.body.posted ? req.body.posted : Plant.posted;			Plant.indoor = req.body.indoor ? req.body.indoor : Plant.indoor;			Plant.available = req.body.available ? req.body.available : Plant.available;			Plant.owner = req.body.owner ? req.body.owner : Plant.owner;			Plant.images = req.body.images ? req.body.images : Plant.images;			
      Plant.save( (err, Plant) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Plant.',
            error: err
          });
        }

        return res.json(Plant);
      });
    });
  },

  /**
   * PlantController.remove()
   */
  remove: (req, res) => {
    let id = req.params.id;
    PlantModel.findByIdAndRemove(id, (err, Plant) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Plant.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
