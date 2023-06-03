import { useDispatch, useSelector } from 'react-redux';
import TweetList from '../components/TweetList/TweetList';
import { incrementPage } from '../redux/usersSlice';

import DropDown from '../components/DropDown/DropDown';
import { selectIsLoading, selectIsMore } from '../redux/selectors';

function Tweets() {
  const dispatch = useDispatch();
  const isMore = useSelector(selectIsMore);
  const isLoading = useSelector(selectIsLoading);
  console.log(isMore);
  return (
    <>
      <DropDown />
      <TweetList />
      {isMore && (
        <button
          disabled={isLoading}
          onClick={() => {
            dispatch(incrementPage());
          }}
          type="button"
        >
          LoadMore
        </button>
      )}
    </>
  );
}

export default Tweets;
