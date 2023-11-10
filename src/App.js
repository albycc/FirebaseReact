import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, todoList] = useState([]);

  const createTodo = (todo) => {
    console.log(todo);
    todoList([...todos, todo]);
  };

  return (
    <div className='App'>
      <TodoForm onSubmit={createTodo} />
      <TodoList list={todos} />
    </div>
  );
}

export default App;
