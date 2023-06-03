import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleFollowing } from '../../redux/operations';

function TweetItem({ user }) {
  const dispatch = useDispatch();

  const handleToggleFollowing = () => {
    dispatch(
      toggleFollowing({
        id: user.id,
        isFollowing: !user.isFollowing,
        followers: user.isFollowing ? user.followers - 1 : user.followers + 1,
      })
    );
  };

  return (
    <div
      style={{ display: 'flex', width: 300, justifyContent: 'space-between' }}
    >
      <p>{user.user}</p>
      <p>{user.followers}</p>
      <button onClick={handleToggleFollowing} type="button">
        {user.isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}

TweetItem.propTypes = {
  followers: PropTypes.any,
  tweets: PropTypes.any,
  user: PropTypes.any,
};

export default TweetItem;
