import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoSection = ({ sectionName }) => {
  const todo = useSelector((state) => state.todo);

  const working = todo.filter((eachTodo) => eachTodo.isDone === false);
  const done = todo.filter((eachTodo) => eachTodo.isDone === true);

  return (
    <div style={divSt}>
      <h2>{sectionName}</h2>
      <ul>
        {(sectionName === "working" ? working : done).map((eachTodo) => (
          <li key={eachTodo.id}>
            <Todo eachTodo={eachTodo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoSection;

const divSt = {
  border: "1px solid #000",
};
