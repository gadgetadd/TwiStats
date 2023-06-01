import TweetItem from '../TweetItem/TweetItem';
import { users } from '../../data';

function TweetList() {
  return users.map(user => <TweetItem user={user} key={user.id} />);
}

export default TweetList;
