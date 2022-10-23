import React from "react";
import { Box } from "@mui/material";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, setTodos, filter, search }) => {
  return (
    <Box className='app-container'>
      <Box
        sx={{
          backgroundColor: "rgb(236, 237, 245)",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          rowGrap: "25px",
          borderRadius: "15px",
          marginTop: "30px",
        }}>
        {todos
          .filter(todo => {
            switch (filter) {
              case "completed":
                return todo.completed === true;
              case "not_completed":
                return todo.completed === false;
              default:
                return todo;
            }
          })
          .filter(todo => todo?.title?.includes(search))
          .map(todo => {
            return (
              <TodoItem
                key={todo.date}
                title={todo.title}
                completed={todo.completed}
                date={todo.date}
                todos={todos}
                setTodos={setTodos}
              />
            );
          })}
      </Box>
    </Box>
  );
};

export default TodoList;
