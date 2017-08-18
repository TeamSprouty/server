const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    //certain categories were ommited due to mofo 
  main: {
    type: String,
    enum: ['Annuals', 'Bonsai', 'Bulbs',
    'Gardens', 'Fruits & Berries',
    'Grasses & Bamboo', 'Groundcovers', 'Houseplants',
    'Perennials', 'Plant Combos',
    'Roses', 'Seeds', 'Shrubs', 'Vines', 'Trees',
    'Vegetables & Herbs', 'Water Plants'
    ],
    default: 'none'
  },
  description: {
      type: String, 
  },
  sub: {
      type: String, 
      enum: [//TODO: look at portland nursery website for sub categories, might not be enum actually
        ],
      default: 'none'
  },
  subdescription: {
      type: String
  }
});

module.exports = mongoose.model('Category', schema);