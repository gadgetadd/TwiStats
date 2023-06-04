import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/joy/Button';
import { incrementPage } from '../../redux/usersSlice';
import { selectIsLoading, selectIsMore } from '../../redux/selectors';

function LoadMoreButton() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isMore = useSelector(selectIsMore);

  return (
    isMore && (
      <Button
        sx={{
          textTransform: 'uppercase',
          width: 380,
          mb: 4,
        }}
        color="info"
        size="lg"
        variant="soft"
        loading={isLoading}
        onClick={() => {
          dispatch(incrementPage());
        }}
      >
        Load More
      </Button>
    )
  );
}

export default LoadMoreButton;
