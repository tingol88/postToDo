const { Schema, pluralize, model } = require('mongoose');

pluralize(null);

const userSchema = Schema({
  login: String,
  email: String,
  password: String,
  todos: [{
    type: Schema.Types.ObjectId,
    ref: 'tasks',
  }],
});

module.exports = model('users', userSchema);
