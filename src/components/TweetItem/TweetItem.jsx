import PropTypes from 'prop-types';

function TweetItem({ user }) {
  return (
    <>
      <p>{user.user}</p>
      <p>{user.followers}</p>
      <p>{user.tweets}</p>
    </>
  );
}

TweetItem.propTypes = {
  followers: PropTypes.any,
  tweets: PropTypes.any,
  user: PropTypes.any,
};

export default TweetItem;
