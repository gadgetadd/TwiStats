import { useDispatch, useSelector } from 'react-redux';
import TweetList from '../components/TweetList/TweetList';
import { incrementPage } from '../redux/usersSlice';

import DropDown from '../components/DropDown/DropDown';
import { selectIsOver } from '../redux/selectors';

function Tweets() {
  const dispatch = useDispatch();
  const isOver = useSelector(selectIsOver);

  return (
    <>
      <DropDown />
      <TweetList />
      <button
        onClick={() => {
          dispatch(incrementPage());
        }}
        type="button"
      >
        {isOver ? 'End' : 'LoadMore'}
      </button>
    </>
  );
}

export default Tweets;