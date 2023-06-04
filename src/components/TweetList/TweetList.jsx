import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FILTERS } from '../../constants';
import { fetchFirst, fetchMore } from '../../redux/operations';
import {
  selectFilter,
  selectPage,
  selectUsers,
  selectIsError,
} from '../../redux/selectors';
import TweetItem from '../TweetItem/TweetItem';
import { CardList } from './TweetList.styled';
import EmptyAnimation from '../EmptyAnimation/EmptyAnimation';
import ErrorAnimation from '../ErrorAnimation/ErrorAnimation';

function TweetList() {
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const filter = useSelector(selectFilter);
  const isError = useSelector(selectIsError);

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

  if (isError) {
    return <ErrorAnimation />;
  }

  if (users.length === 0) {
    return <EmptyAnimation />;
  }

  return (
    <CardList>
      {users.map(user => (
        <TweetItem user={user} key={user.id} />
      ))}
    </CardList>
  );
}

export default TweetList;
