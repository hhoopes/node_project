const bcrypt = require('bcrypt');
const {User, validate} = require('../models/user');
const mongoose = require ('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(401).send(error.details[0].message);

  let {name, email, password} = req.body;
  let user = await User.findOne({ email: email });
  if (user) return res.status(400).send('User already registered');

  user = new User({name: name, email: email, password: password});
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  await user.save();

  // const token = user.generateAuthToken();
  res.header('x-auth-token', 'hi').send({_id, name, email} = user);
});

module.exports = router;