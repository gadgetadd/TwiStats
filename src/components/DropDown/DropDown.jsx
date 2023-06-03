import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useDispatch } from 'react-redux';
import { FILTERS } from '../../constants';
import { setFilter } from '../../redux/usersSlice';


function DropDown() {
  
  const dispatch = useDispatch();
  const handleChange = (_, newValue) => {
    dispatch(setFilter(newValue));
  };
  return (
    <Select defaultValue={FILTERS.all} onChange={handleChange}>
      <Option value={FILTERS.all}>Show All</Option>
      <Option value={FILTERS.follow}>Follow</Option>
      <Option value={FILTERS.following}>Followings</Option>
    </Select>
  );
}

export default DropDown;
