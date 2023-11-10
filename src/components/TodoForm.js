import { useRef } from "react";

function TodoForm({ onSubmit }) {
  const formRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const todoObject = {};

    for (const [key, value] of formData) {
      todoObject[key] = value;
    }

    onSubmit(todoObject);
  };
  return (
    <form onSubmit={submitHandler} ref={formRef}>
      <li>
        <label>Title</label>
        <input type='text' name='title' />
      </li>
      <li>
        <label>Description</label>
        <input type='text' name='description' />
      </li>
      <li>
        <button type='submit'>CREATE</button>
      </li>
    </form>
  );
}

export default TodoForm;
