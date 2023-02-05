import React from "react";
import { Box, TextField, Button } from "@mui/material";
import "./AddTodoPopup.css";
import { useState } from "react";

const AddTodoPopup = ({ closePopup, todos, setTodos }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const addNewTodo = () => {
    setTodos([
      ...todos,
      {
        title: todoTitle,
        completed: false,
        date: new Date().toLocaleTimeString(),
      },
    ]);
    closePopup();
  };

  const onChangeInput = e => {
    setTodoTitle(e.target.value);
  };

  return (
    <Box className='popup-wrapper'>
      <Box className='popup' component='form' onSubmit={addNewTodo}>
        <Box component='h2' sx={{ marginBottom: "20px", textAlign: "center" }}>
          Add task
        </Box>
        <TextField required fullWidth label='Name' onChange={onChangeInput} />
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
            Add
          </Button>
          <Button onClick={closePopup}>Cancel</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddTodoPopup;
