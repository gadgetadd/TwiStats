import { useSelector } from 'react-redux';
import TweetItem from '../TweetItem/TweetItem';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFirst, fetchMore } from '../../redux/operations';
import { FILTERS } from '../../constants';
import { selectFilter, selectPage, selectUsers } from '../../redux/selectors';
import { CardList } from './TweetList.styled';

function TweetList() {
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
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

  return (
    <CardList>
      {users.map(user => (
        <TweetItem user={user} key={user.id} />
      ))}
    </CardList>
  );
}

export default TweetList;
