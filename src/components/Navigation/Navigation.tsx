import React from "react";
import { FC } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

interface INavigationProps {
  popupHandler: () => void;
  filter: string;
  handleChange: any;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const Navigation: FC<INavigationProps> = ({
  popupHandler,
  filter,
  handleChange,
  search,
  setSearch,
}) => {
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <nav>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={popupHandler}
          sx={{
            width: {
              xs: 50,
              sm: 150,
              md: 200,
              lg: 200,
              xl: 200,
            },
            fontSize: {
              xs: 10,
              sm: 12,
              md: 14,
              lg: 16,
              xl: 16,
            },
          }}
          variant='contained'>
          Add task
        </Button>
        <TextField
          sx={{
            width: {
              xs: 150,
              sm: 300,
              md: 500,
              lg: 500,
              xl: 500,
            },
          }}
          fullWidth
          label='Search...'
          type='search'
          onChange={searchHandler}
        />
        <Box
          sx={{
            width: {
              xs: 50,
              sm: 150,
              md: 200,
              lg: 200,
              xl: 200,
            },
          }}>
          <FormControl fullWidth>
            <Select
              sx={{
                fontSize: {
                  xs: 10,
                  sm: 12,
                  md: 14,
                  lg: 16,
                  xl: 16,
                },
              }}
              labelId='filtering-select'
              value={filter}
              /*
              sx:any={{
                paddingRight: {
                  xs: 8,
                },
                
              }}
              */
              onChange={handleChange}>
              <MenuItem value='all'>All</MenuItem>
              <MenuItem value='completed'>Completed</MenuItem>
              <MenuItem value='not_completed'>Unfulfilled</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </nav>
  );
};

export default Navigation;
