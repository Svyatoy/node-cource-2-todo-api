const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({});
// Todo.findByIbAndRemove();
Todo.findByIdAndRemove('58a0b7661add37b8cf804340').then((todo) => {
  console.log(todo);
});