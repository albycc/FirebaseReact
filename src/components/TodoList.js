import TodoItem from "./TodoItem";

function TodoList({ list }) {
  return (
    <ul>
      {list.map((todo, index) => (
        <TodoItem {...todo} key={index} />
      ))}
    </ul>
  );
}

export default TodoList;
