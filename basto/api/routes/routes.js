var express = require('express');
var router = express.Router();
var Livestock = require("../models/livestock.js");

router.post('/', async function (req, res, next) {

  const reg = await Livestock.findOne({id:req.body.id});
  console.log(reg)
  if(reg) {
    res.status(400).send('this code already exist')
  } else {
    try{
      const livestock = new Livestock({
        id: req.body.id,
        _id: req.body.id,
        type: req.body.type,
        weight: req.body.weight,
        origin: req.body.origin,
        device: req.body.device,
        code: req.body.code
      });
      await livestock.save();
      res.status(200).send(livestock);
    }
    catch (err){
      next(err);
    }
  }
  });
  
  router.get('/', async function (req, res) {
  try{
    const livestock = await Livestock.find();
    res.send(livestock);
  }
  catch(err){
    res.send(err)
  }
});

router.get('/:id', async function (req, res) {
  try {
    const livestock = await Livestock.findById(req.params.id);
    res.send(livestock);
  }
  catch(err){
    res.send(err)
  }
  });
  
  router.put('/', async function (req, res) {
  try{
    await Livestock.findOneAndUpdate({
      id: req.body.id,
    }, {
      id: req.body.id,
      _id: req.body.id,
      type: req.body.type,
      weight: req.body.weight,
      origin: req.body.origin,
      device: req.body.device,
      code: req.body.code
    });
    res.send(true);
  }
  catch(err){
    res.send(err)
  }
  });
  
  router.delete('/:id', async function (req, res) {
  try{
    await Livestock.findOneAndDelete({id: req.params.id });
    res.send(true);
  }
  catch(err){
    res.send(err)
  }
});

module.exports = router;