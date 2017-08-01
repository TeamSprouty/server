const Router = require('express').Router;
const router = Router();
const User = require('../models/user');
const Plant = require('../models/PlantModel');
const Banking = require('../models/BankingModel');
const Mailing = require('../models/MailingModel');

router
  .get('/', (req, res, next) => {
    User.find()
      .select('-__v')
      .then(users => res.send(users))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    new User(req.body)
      .save()
      .then(user => res.send(user))
      .catch(next);
  })


  .get('/:id', (req, res, next) => {
    const id = req.params.id;
    User.findById(id).lean()
      .then(user => res.send(user))
      .catch(next);
  })

  .get('/plants/:id', (req, res, next) => {
    const id = req.params.id;
    Plant.find({ owner: id })
      .then(plants => res.send(plants))
      .catch(next);
  })

  .get('/mailing/:id', (req, res, next) => {
    const id = req.params.id;
    Mailing.find({ owner: id })
      .then(mailing => res.send(mailing))
      .catch(next);
  })

  .get('/banking/:id', (req, res, next) => {
    const id = req.params.id;
    Banking.find({ owner: id })
      .then(banking => res.send(banking))
      .catch(next);
  })

  .get('/full/:id', (req, res, next) => {
    const id = req.params.id;
    Promise.all([
      User.findById(id),
      Plant.find({ owner: id }),
      Banking.find({ owner: id }),
      Mailing.find({ owner: id })
    ])
      .then(results => {
        const user = results[0];
        const plants = results[1];
        const banking = results[2];
        const mailing = results[3];
        user.plants = plants;
        user.bankcards = banking;
        user.addresses = mailing;
        res.send(user);
      })
      .catch(next);
  });

module.exports = router;