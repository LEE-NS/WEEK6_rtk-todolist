import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";

const Todo = ({ eachTodo }) => {
  const dispatch = useDispatch();

  return (
    <div style={divSt}>
      <h3>{eachTodo.title}</h3>
      <p>{eachTodo.task}</p>
      <div>
        <button
          onClick={() => {
            dispatch(deleteTodo(eachTodo.id));
          }}
        >
          삭제
        </button>
        <button
          onClick={() => {
            dispatch(updateTodo(eachTodo.id));
          }}
        >
          {eachTodo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Todo;

const divSt = {
  border: "1px solid #000",
};
