const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

let id = '58a061bd3bd4a03739dc74dd';

if ( ! ObjectId.isValid(id) ) {
  console.log('Id not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos)
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by id', todo);
}).catch((e) => {
  console.log(e);
});

