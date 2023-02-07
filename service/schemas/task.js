const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const task = Schema(
  {
    title: {
      type: String,
      minlength: 3,
      maxlength: 170,
    },
    text: {
      type: String,
      minlength: 3,
      maxlength: 170,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
);

task.methods.content = function () {
  console.log(`${this.title}\n${this.text} `);
};

const Task = mongoose.model('task', task);

module.exports = Task;
