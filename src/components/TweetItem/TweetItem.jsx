import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleFollowing } from '../../redux/operations';
import { toast } from 'react-toastify';
import Tooltip from '@mui/joy/Tooltip';
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
import { useState } from 'react';

function TweetItem({ user }) {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);

  const cancelLoading = () => setLoading(false);

  const handleToggleFollowing = async () => {
    const payload = {
      id: user.id,
      isFollowing: !user.isFollowing,
      followers: user.isFollowing ? user.followers - 1 : user.followers + 1,
    };
    setLoading(true);
    dispatch(toggleFollowing(payload))
      .then(() =>
        user.isFollowing
          ? toast.info(`You have unfollowed ${user.user} successfully.`)
          : toast.success(`Congrats!  You're now following ${user.user}.`)
      )
      .catch(() => toast.error('Something went wrong. Try to reload the page'))
      .finally(cancelLoading);
  };

  return (
    <li>
      <UserCard>
        <Logo src={logo} alt="logo" />
        <Tooltip
          size="lg"
          placement="top"
          arrow
          title={user.user}
          variant="solid"
        >
          <AvatarFrame>
            <AvatarThumb>
              <Avatar
                src={user.avatar ? user.avatar : avatar}
                alt="User avatar"
              />
            </AvatarThumb>
          </AvatarFrame>
        </Tooltip>
        <Description>{user.tweets.toLocaleString('en-US')} tweets</Description>
        <Description>
          {user.followers.toLocaleString('en-US')} followers
        </Description>
        <FollowButton
          color="info"
          loading={isLoading}
          following={user.isFollowing.toString()}
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
