function TodoItem({ title, description }) {
  return (
    <li>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default TodoItem;
