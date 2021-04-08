const { Schema, model, pluralize } = require('mongoose');

pluralize(null);

const taskSchema = Schema({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  deadLine: Date,
  isDone: {
    type: Boolean,
    default: false,
  },
});

module.exports = model('tasks', taskSchema);
