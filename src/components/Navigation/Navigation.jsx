import React from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const Navigation = ({
  popupHandler,
  filter,
  handleChange,
  search,
  setSearch,
}) => {
  const searchHandler = e => {
    setSearch(e.target.value);
  };

  return (
    <nav>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={popupHandler}
          sx={{ minWidth: 220 }}
          variant='contained'>
          Добавить задачу
        </Button>
        <TextField
          sx={{ maxWidth: "50%" }}
          fullWidth
          label='Поиск...'
          type='search'
          onChange={searchHandler}
        />
        <Box sx={{ minWidth: 220 }}>
          <FormControl fullWidth>
            <Select
              labelId='filtering-select'
              value={filter}
              onChange={handleChange}>
              <MenuItem value='all'>Все</MenuItem>
              <MenuItem value='completed'>Выполненные</MenuItem>
              <MenuItem value='not_completed'>Не выполненные</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </nav>
  );
};

export default Navigation;
