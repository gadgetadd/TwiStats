import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Tooltip from '@mui/joy/Tooltip';
import { toggleFollowing } from '../../redux/operations';
import logo from '../../images/logo.png';
import reserveAvatar from '../../images/avatar.png';
import {
  Avatar,
  AvatarFrame,
  AvatarThumb,
  Description,
  FollowButton,
  Logo,
  UserCard,
} from './TweetItem.styled';

function TweetItem({
  user: { avatar, user, tweets, followers, isFollowing, id },
}) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const cancelLoading = () => setLoading(false);

  const handleToggleFollowing = async () => {
    const payload = {
      id: id,
      isFollowing: !isFollowing,
      followers: isFollowing ? followers - 1 : followers + 1,
    };
    setLoading(true);
    dispatch(toggleFollowing(payload))
      .then(() =>
        isFollowing
          ? toast.info(`You have unfollowed ${user} successfully.`)
          : toast.success(`Congrats!  You're now following ${user}.`)
      )
      .catch(() => toast.error('Something went wrong. Try to reload the page'))
      .finally(cancelLoading);
  };

  return (
    <li>
      <UserCard>
        <Logo src={logo} alt="logo" />
        <Tooltip size="lg" placement="top" arrow title={user} variant="solid">
          <AvatarFrame>
            <AvatarThumb>
              <Avatar src={avatar ? avatar : reserveAvatar} alt="User avatar" />
            </AvatarThumb>
          </AvatarFrame>
        </Tooltip>
        <Description>{tweets.toLocaleString('en-US')} tweets</Description>
        <Description>{followers.toLocaleString('en-US')} followers</Description>
        <FollowButton
          color="info"
          loading={isLoading}
          following={isFollowing.toString()}
          onClick={handleToggleFollowing}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </FollowButton>
      </UserCard>
    </li>
  );
}

TweetItem.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    isFollowing: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default TweetItem;
