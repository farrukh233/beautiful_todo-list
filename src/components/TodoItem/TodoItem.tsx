import React, { useState } from "react";
import * as material from "@mui/material";
import * as iconsMaterial from "@mui/icons-material";
import RenameTodo from "../RenameTodo/RenameTodo";
import { FC } from "react";

interface Todo {
  title: string;
  completed: boolean;
  date: number;
}
interface TodoItemProps {
  title: string;
  completed: boolean;
  todos: Todo[];
  date: number;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: FC<TodoItemProps> = ({
  title,
  completed,
  todos,
  date,
  setTodos,
}) => {
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
          checked={completed}
          onChange={completeHandler}
          icon={<iconsMaterial.CheckCircleOutline />}
          checkedIcon={<iconsMaterial.CheckCircle color='success' />}
        />
      </material.Box>

      <material.Box
        sx={{
          flex: 1,
          textDecoration: completed ? "line-through" : "none",
          opacity: completed ? 0.7 : 1,
        }}>
        <h3 className='todo-name'>{title}</h3>
      </material.Box>
      <material.Box
        component='p'
        sx={{
          flex: 1,
          fontSize: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 14,
            xl: 14,
          },
          opacity: "0.7",
          position: "relative",
        }}>
        {date}
      </material.Box>

      <div className='right'>
        <span className='rename'>
          <material.Button
            onClick={renameHandler}
            sx={{
              width: {
                xs: 50,
                sm: 120,
                md: 120,
                lg: 150,
                xl: 150,
              },
              fontSize: {
                xs: 10,
                sm: 11,
                md: 11,
                lg: 14,
                xl: 14,
              },
              marginRight: "20px",
              padding: "2px",
              marginLeft: {
                xs: 1,
              },
              ":hover": { backgroundColor: "green" },
            }}
            variant='contained'>
            Rename
          </material.Button>
        </span>
        <span className='delete'>
          <material.Button
            onClick={deleteHandler}
            sx={{
              width: {
                xs: 10,
                sm: 50,
                md: 50,
                lg: 100,
                xl: 100,
              },
              fontSize: {
                xs: 10,
                sm: 11,
                md: 11,
                lg: 14,
                xl: 14,
              },
              backgroundColor: "red",
              padding: "2px",
              marginTop: {
                xs: 0.5,
                sm: 0,
                md: 0,
                lg: 0,
                xl: 0,
              },
              marginLeft: {
                xs: 1,
              },

              ":hover": { backgroundColor: "#8B0000" },
            }}
            variant='contained'>
            Delete
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
