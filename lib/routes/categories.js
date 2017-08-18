const Router = require('express').Router;
const router = Router();
const User = require('../models/user');
const Category = require('../models/CategoryModel');

router
  .get('/', (req, res, next) => {
    Category.find()
      .select('-__v')
      .then(categories => res.send(categories))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    //TODO: fix this route
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(user => res.send(user))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const id = req.params.id;
    User.findById(id).lean()
      .then(user => res.send(user))
      .catch(next);
  })


   //TODO: fix this route
  .patch('/:userId/:songId', (req, res, next) => {
    User.findByIdAndUpdate(req.params.userId,
        { $pull: { 'category': { '_id': req.params.songId } } }, { new: true })
        .then(playlist => res.send(playlist))
        .catch(next);
    })

    //TODO: fix this route
    .post('/', (req, res, next) => {
    new Song(req.body)
        .save()
        .then(song => res.send(song))
        .catch(next);
    })

    //TODO: idk if we need this route but its here 
    .delete('/:id', (req, res, next) => {
        Playlist.findByIdAndRemove(req.params.id)
            .then(response => {
                res.send({ removed: response ? true : false });
            })
            .catch(next);
    });

module.exports = router;