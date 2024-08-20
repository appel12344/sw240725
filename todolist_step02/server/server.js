const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let todoList = [
  { no: 101, title: '공부하기', done: false },
  { no: 102, title: '자바하기', done: true },
  { no: 103, title: '리액트하기', done: false },
  { no: 104, title: '스프링하기', done: false },
];

let noCnt = 105;

// GET all todos
app.get('/api/todos', (req, res) => {
  res.json(todoList);
});

// POST new todo
app.post('/api/todos', (req, res) => {
  const newTodo = { no: noCnt++, ...req.body, done: false };
  todoList.push(newTodo);
  res.json(newTodo);
});

// DELETE a todo
app.delete('/api/todos/:no', (req, res) => {
  const no = parseInt(req.params.no);
  todoList = todoList.filter((todo) => todo.no !== no);
  res.json({ message: 'Todo deleted' });
});

// PUT to update a todo
app.put('/api/todos/:no', (req, res) => {
  const no = parseInt(req.params.no);
  todoList = todoList.map((todo) =>
    todo.no === no ? { ...todo, ...req.body } : todo
  );
  res.json(todoList.find((todo) => todo.no === no));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
