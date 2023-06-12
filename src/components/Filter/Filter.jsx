import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterFollowed } from "../../redux/slice";

export const Filter = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const filterValue = event.target.value;
    setValue(filterValue);
    dispatch(filterFollowed(filterValue));
  };
  return (
    <Box style={{ margin: "100px" }} sx={{ minWidth: 120, maxWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Users</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="value"
          value={value}
          onChange={handleChange}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Followed"}>Followed</MenuItem>
          <MenuItem value={"Unfollowed"}>Unfollowed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
