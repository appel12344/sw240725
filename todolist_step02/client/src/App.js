import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Input";
import Output from "./Output";

const App = () => {
  const [name, setName] = useState("Todo List");
  const [todoList, setTodoLilst] = useState([]);

  useEffect(() => {
    // Fetch todos from server on component mount
    axios.get("http://localhost:5000/api/todos").then((response) => {
      setTodoLilst(response.data);
    });
  }, []);

  const onClickEvent = (inputTitle) => {
    axios.post("http://localhost:5000/api/todos", { title: inputTitle }).then((response) => {
      setTodoLilst([...todoList, response.data]);
    });
  };

  const onDelete = ({ no }) => {
    axios.delete(`http://localhost:5000/api/todos/${no}`).then(() => {
      setTodoLilst(todoList.filter((todo) => todo.no !== no));
    });
  };

  const onDoneFlag = ({ no, title, done }) => {
    axios
      .put(`http://localhost:5000/api/todos/${no}`, { done: !done })
      .then((response) => {
        setTodoLilst(
          todoList.map((item) => (item.no === no ? response.data : item))
        );
      });
  };

  const onEdit = ({ no, title, done }) => {
    axios.put(`http://localhost:5000/api/todos/${no}`, { title, done }).then((response) => {
      setTodoLilst(
        todoList.map((item) => (item.no === no ? response.data : item))
      );
    });
  };

  return (
    <div className="todoList">
      <div className="App-header">
        <h1>{name} App</h1>
      </div>
      <Input onClickEvent={onClickEvent} />
      <Output
        todoList={todoList}
        onDelete={onDelete}
        onDoneFlag={onDoneFlag}
        onEdit={onEdit}
      />
    </div>
  );
};

export default App;
