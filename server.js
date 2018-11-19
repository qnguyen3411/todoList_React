const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/reactTodo', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const TodoSchema = new mongoose.Schema({
  text: { type: String, required: true, minlength: 1 },
  finished: { type: Boolean, default: false }
})

const Todo = mongoose.model('Todo', TodoSchema);


app.get('/api/todos', (req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch((err) => res.status(500).json({ error: "Server error" }))
})

app.post('/api/todos', (req, res) => {
  Todo.create(req.body)
    .then(todo => res.json(todo))
    .catch((err) => res.status(500).json({ error: "Server error" }))
})

app.put('/api/todos/:id', (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, { finished: true }, { new: true })
    .then(todo => res.json(todo))
    .catch((err) => res.status(500).json({ error: "Server error" }))

})

app.delete('/api/todos/:id', (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(todo => res.json(todo))
    .catch((err) => res.status(500).json({ error: "Server error" }))
})

app.listen(8000, () => {
  console.log("LISTENING")
})