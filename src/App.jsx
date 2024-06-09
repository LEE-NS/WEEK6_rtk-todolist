import React from "react";
import TodoForm from "./components/TodoForm";
import TodoSection from "./components/TodoSection";

const App = () => {
  return (
    <>
      <h1>To-do List</h1>
      <TodoForm />
      <TodoSection sectionName="working" />
      <TodoSection sectionName="done" />
    </>
  );
};

export default App;
