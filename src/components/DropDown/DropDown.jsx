import { useDispatch } from 'react-redux';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { FILTERS } from '../../constants';
import { setFilter } from '../../redux/usersSlice';

function DropDown() {
  const dispatch = useDispatch();

  const handleChange = (_, newValue) => {
    dispatch(setFilter(newValue));
  };

  return (
    <Select
      sx={{
        width: 380,
        my: 4,
      }}
      color="info"
      size="lg"
      defaultValue={FILTERS.all}
      onChange={handleChange}
    >
      <Option color="info" value={FILTERS.all}>
        Show All
      </Option>
      <Option color="info" value={FILTERS.follow}>
        Follow
      </Option>
      <Option color="info" value={FILTERS.following}>
        Followings
      </Option>
    </Select>
  );
}

export default DropDown;
