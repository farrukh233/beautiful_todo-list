import React from "react";
import { Box, TextField, Button } from "@mui/material";
import "./RenameTodo.css";
import { useState } from "react";

const RenameTodo = ({ closePopup, todos, setTodos, date }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const renameTodo = () => {
    setTodos(
      todos.map(todo => {
        if (todo.date === date) {
          return { ...todo, title: todoTitle };
        } else {
          return todo;
        }
      })
    );
    closePopup();
  };

  const onChangeInput = e => {
    setTodoTitle(e.target.value);
  };

  return (
    <Box className='popup-wrapper'>
      <Box className='popup' component='form' onSubmit={renameTodo}>
        <Box component='h2' sx={{ marginBottom: "20px", textAlign: "center" }}>
          Переименовать задачу
        </Box>
        <TextField
          required
          fullWidth
          label='Название'
          onChange={onChangeInput}
        />
        <Box>
          <Button
            variant='contained'
            type='submit'
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
              marginBottom: "10px",
            }}>
            Сохранить
          </Button>
          <Button onClick={closePopup}>Отмена</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RenameTodo;
