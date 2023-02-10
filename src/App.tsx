import React, { useState } from "react";
import AddTodoPopup from "./components/AddTodoPopup/AddTodoPopup";
import Header from "./components/Header/Header";
import "./index.css";
import { Container } from "@mui/material";
import Navigation from "./components/Navigation/Navigation";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [filter, setFilter] = useState("all");
  const [popup, setPopup] = useState<boolean>(false);

  const todosFromLocalStorage = localStorage.getItem("todos");
  const parsedTodos = todosFromLocalStorage
    ? JSON.parse(todosFromLocalStorage)
    : [];

  const [todos, setTodos] = useState(parsedTodos);

  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const popupHandler = (): void => {
    setPopup(!popup);
  };

  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <Container>
      <Header />
      <Navigation
        popupHandler={popupHandler}
        filter={filter}
        handleChange={handleChange}
        search={search}
        setSearch={setSearch}
      />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filter={filter}
          search={search}
        />
      ) : null}
      {popup ? (
        <AddTodoPopup
          todos={todos}
          setTodos={setTodos}
          closePopup={popupHandler}
        />
      ) : null}
    </Container>
  );
};

export default App;
