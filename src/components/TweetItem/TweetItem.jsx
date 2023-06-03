import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFollowing } from '../../redux/operations';
import { toast } from 'react-toastify';
import { selectIsToggling } from '../../redux/selectors';
import logo from '../../images/logo.png';
import avatar from '../../images/avatar.png';
import {
  Avatar,
  AvatarFrame,
  AvatarThumb,
  Description,
  FollowButton,
  Logo,
  UserCard,
} from './TweetItem.styled';

function TweetItem({ user }) {
  const dispatch = useDispatch();
  const isToggling = useSelector(selectIsToggling);

  const handleToggleFollowing = async () => {
    const payload = {
      id: user.id,
      isFollowing: !user.isFollowing,
      followers: user.isFollowing ? user.followers - 1 : user.followers + 1,
    };

    toast.promise(() => dispatch(toggleFollowing(payload)), {
      pending: 'Just a moment, please.',
      success: user.isFollowing
        ? `You have unfollowed ${user.user} successfully.`
        : `Congrats!  You're now following ${user.user}.`,
      error: 'Please, try again',
    });
  };

  return (
    <li>
      <UserCard>
        <Logo src={logo} alt="logo" />
        <AvatarFrame>
          <AvatarThumb>
            <Avatar
              src={user.avatar ? user.avatar : avatar}
              alt="User avatar"
              title={user.user}
            />
          </AvatarThumb>
        </AvatarFrame>
        <Description>{user.tweets.toLocaleString('en-US')} tweets</Description>
        <Description>
          {user.followers.toLocaleString('en-US')} followers
        </Description>
        <FollowButton
          type="button"
          disabled={isToggling}
          isFollowing={user.isFollowing}
          onClick={handleToggleFollowing}
        >
          {user.isFollowing ? 'Following' : 'Follow'}
        </FollowButton>
      </UserCard>
    </li>
  );
}

TweetItem.propTypes = {
  followers: PropTypes.any,
  tweets: PropTypes.any,
  user: PropTypes.any,
};

export default TweetItem;
