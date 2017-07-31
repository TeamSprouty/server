const OrderModel = require('../models/OrderModel.js');

/**
 * OrderController.js
 *
 * @description :: Server-side logic for managing Orders.
 */
module.exports = {

  /**
   * OrderController.list()
   */
  list: (req, res) => {
    OrderModel.find(req.query.where, req.query.fields, req.query.sort, (err, Orders) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Order.',
          error: err
        });
      }
      return res.json(Orders);
    });
  },

  /**
   * OrderController.show()
   */
  show: (req, res) => {
    let id = req.params.id;
    OrderModel.findOne({_id: id}, (err, Order) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Order.',
          error: err
        });
      }
      if (!Order) {
        return res.status(404).json({
          message: 'No such Order'
        });
      }
      return res.json(Order);
    });
  },

  /**
   * OrderController.create()
   */
  create: (req, res) => {
    let Order = new OrderModel({			offer : req.body.offer,			seller : req.body.seller,			buyer : req.body.buyer,			accepted : req.body.accepted,			duedate : req.body.duedate,			sold : req.body.sold
    });

    Order.save((err, Order) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Order',
          error: err
        });
      }
      return res.status(201).json(Order);
    });
  },

  /**
   * OrderController.update()
   */
  update: (req, res) => {
    let id = req.params.id;
    OrderModel.findOne({_id: id}, (err, Order) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Order',
          error: err
        });
      }
      if (!Order) {
        return res.status(404).json({
          message: 'No such Order'
        });
      }

      Order.offer = req.body.offer ? req.body.offer : Order.offer;			Order.seller = req.body.seller ? req.body.seller : Order.seller;			Order.buyer = req.body.buyer ? req.body.buyer : Order.buyer;			Order.accepted = req.body.accepted ? req.body.accepted : Order.accepted;			Order.duedate = req.body.duedate ? req.body.duedate : Order.duedate;			Order.sold = req.body.sold ? req.body.sold : Order.sold;			
      Order.save( (err, Order) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Order.',
            error: err
          });
        }

        return res.json(Order);
      });
    });
  },

  /**
   * OrderController.remove()
   */
  remove: (req, res) => {
    let id = req.params.id;
    OrderModel.findByIdAndRemove(id, (err, Order) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Order.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
