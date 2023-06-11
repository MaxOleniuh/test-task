import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import filterFollowed  from "../../redux/slice";
export const Filter = () => {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === 'Followed') {
      dispatch(filterFollowed())
     } 
  };
    return (
        <Box style={{margin: '100px'}} sx={{ m: 1, minWidth: 120 }}>
  <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label='value'
    value={value}
    onChange={handleChange}
  >
    <MenuItem value={'All'}>All</MenuItem>
    <MenuItem value={'Followed'}>Followed</MenuItem>
    <MenuItem value={'Unfollowed'}>Unfollowed</MenuItem>
  </Select>
</FormControl>
        </Box>
      
    )
}