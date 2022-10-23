import React, { useState } from "react";
import * as material from "@mui/material";
import * as iconsMaterial from "@mui/icons-material";
import RenameTodo from "../RenameTodo/RenameTodo";

const TodoItem = ({ title, completed, todos, date, setTodos }) => {
  const [renamePopup, setRenamePopup] = useState(false);
  const deleteHandler = () => {
    setTodos(todos.filter(todo => todo.date !== date));
  };

  const completeHandler = () => {
    setTodos(
      todos.map(todo => {
        if (todo.date === date) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const renameHandler = () => {
    setRenamePopup(!renamePopup);
  };
  return (
    <material.Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "15px",
        padding: "10px",
        marginTop: "20px",
      }}>
      <material.Box className='left'>
        <material.Checkbox
          сhecked={completed}
          onChange={completeHandler}
          icon={<iconsMaterial.CheckCircleOutline />}
          checkedIcon={<iconsMaterial.CheckCircle color='succes' />}
        />
      </material.Box>

      <material.Box
        sx={{
          flex: 1,
          padding: "0 10px",
          textDecoration: completed ? "line-through" : "none",
          opacity: completed ? 0.7 : 1,
        }}>
        <h3 className='todo-name'>{title}</h3>
      </material.Box>
      <material.Box
        component='p'
        sx={{ flex: 1, fontSize: "14px", opacity: "0.7" }}>
        {date}
      </material.Box>

      <div className='right'>
        <span>
          <material.Button
            onClick={renameHandler}
            sx={{
              minWidth: 20,
              marginRight: "20px",
              ":hover": { backgroundColor: "green" },
            }}
            variant='contained'>
            Переимеиновать
          </material.Button>
        </span>
        <span>
          <material.Button
            onClick={deleteHandler}
            sx={{
              minWidth: 50,
              backgroundColor: "red",
              ":hover": { backgroundColor: "#8B0000" },
            }}
            variant='contained'>
            Удалить
          </material.Button>
        </span>
      </div>
      {renamePopup ? (
        <RenameTodo
          closePopup={renameHandler}
          date={date}
          todos={todos}
          setTodos={setTodos}
        />
      ) : null}
    </material.Box>
  );
};

export default TodoItem;
