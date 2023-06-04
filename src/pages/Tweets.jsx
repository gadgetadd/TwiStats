import TweetList from '../components/TweetList/TweetList';
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton';
import DropDown from '../components/DropDown/DropDown';
import ScrollUpButton from '../components/ScrollUpButton/ScrollUpButton';

function Tweets() {
  return (
    <>
      <DropDown />
      <TweetList />
      <LoadMoreButton />
      <ScrollUpButton />
    </>
  );
}

export default Tweets;
