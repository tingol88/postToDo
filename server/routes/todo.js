const router = require('express').Router();
// const User = require('../db/models/user');
const Task = require('../db/models/task');

router.get('/', async (req, res) => {
  const todoArr = await Task.find().populate('users');
  res.json(todoArr);
});

module.exports = router;
