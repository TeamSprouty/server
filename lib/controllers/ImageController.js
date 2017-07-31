const ImageModel = require('../models/ImageModel.js');

/**
 * ImageController.js
 *
 * @description :: Server-side logic for managing Images.
 */
module.exports = {

  /**
   * ImageController.list()
   */
  list: (req, res) => {
    ImageModel.find(req.query.where, req.query.fields, req.query.sort, (err, Images) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Image.',
          error: err
        });
      }
      return res.json(Images);
    });
  },

  /**
   * ImageController.show()
   */
  show: (req, res) => {
    let id = req.params.id;
    ImageModel.findOne({_id: id}, (err, Image) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Image.',
          error: err
        });
      }
      if (!Image) {
        return res.status(404).json({
          message: 'No such Image'
        });
      }
      return res.json(Image);
    });
  },

  /**
   * ImageController.create()
   */
  create: (req, res) => {
    let Image = new ImageModel({			url : req.body.url,			title : req.body.title,			caption : req.body.caption,			owner : req.body.owner
    });

    Image.save((err, Image) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Image',
          error: err
        });
      }
      return res.status(201).json(Image);
    });
  },

  /**
   * ImageController.update()
   */
  update: (req, res) => {
    let id = req.params.id;
    ImageModel.findOne({_id: id}, (err, Image) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Image',
          error: err
        });
      }
      if (!Image) {
        return res.status(404).json({
          message: 'No such Image'
        });
      }

      Image.url = req.body.url ? req.body.url : Image.url;			Image.title = req.body.title ? req.body.title : Image.title;			Image.caption = req.body.caption ? req.body.caption : Image.caption;			Image.owner = req.body.owner ? req.body.owner : Image.owner;			
      Image.save( (err, Image) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Image.',
            error: err
          });
        }

        return res.json(Image);
      });
    });
  },

  /**
   * ImageController.remove()
   */
  remove: (req, res) => {
    let id = req.params.id;
    ImageModel.findByIdAndRemove(id, (err, Image) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Image.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
