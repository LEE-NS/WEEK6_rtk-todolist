import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();

  const todoTitle = useRef("");
  const todoTask = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: todoTitle.current.value,
      task: todoTask.current.value,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    todoTitle.current.value = "";
    todoTask.current.value = "";
  };

  return (
    <form style={formSt} onSubmit={handleSubmit}>
      <div>
        <label>제목</label>
        <input type="text" ref={todoTitle} />
      </div>
      <div>
        <label>내용</label>
        <input type="text" ref={todoTask} />
      </div>
      <button>추가</button>
    </form>
  );
};

export default TodoForm;

const formSt = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};
