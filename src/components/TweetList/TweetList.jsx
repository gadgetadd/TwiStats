import { useSelector } from 'react-redux';
import TweetItem from '../TweetItem/TweetItem';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFirst, fetchMore } from '../../redux/operations';
import { FILTERS } from '../../constants';

function TweetList() {
  const page = useSelector(state => state.users.page);
  const filter = useSelector(state => state.users.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('filter', filter);
    const fetchParams = { page };
    switch (filter) {
      case FILTERS.follow:
        fetchParams.isFollowing = false;
        break;
      case FILTERS.following:
        fetchParams.isFollowing = true;
        break;
      default:
        break;
    }
    if (page === 1) {
      dispatch(fetchFirst(fetchParams));
    } else {
      dispatch(fetchMore(fetchParams));
    }
  }, [dispatch, filter, page]);

  const users = useSelector(state => state.users.items);

  return users.map(user => <TweetItem user={user} key={user.id} />);
}

export default TweetList;
