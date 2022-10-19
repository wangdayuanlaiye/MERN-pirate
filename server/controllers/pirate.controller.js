const Pirate = require("../models/pirates.model");

const createNewPirate = (req, res) => {
  Pirate.create(req.body)
    .then((newPirate) => {
      res.json({ newPirate });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const getAllPirates = (req, res) => {
  Pirate.find()
    .then((allPirates) => {
      res.json(allPirates);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const getOnePirate = (req, res) => {
   Pirate.findOne({ _id: req.params.id })
    .then((queriedPirate) => {
      res.json(queriedPirate);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const updatePirate = (req, res) => {
  Pirate.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPirate) => {
      res.json({ updatedPirate });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const deleteExistingUser = (req, res) => {
  Pirate.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
      res.json({ deletedResponse });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

module.exports = {
  createNewPirate,
  getOnePirate,
  getAllPirates,
  updatePirate,
  deleteExistingUser,
};