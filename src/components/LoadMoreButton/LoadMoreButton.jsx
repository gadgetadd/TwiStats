import { incrementPage } from '../../redux/usersSlice';
import Button from '@mui/joy/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectIsMore } from '../../redux/selectors';

function LoadMoreButton() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isMore = useSelector(selectIsMore);

  return (
    isMore && (
      <Button
        sx={{
          width: 380,
          mb: 4,
        }}
        color="info"
        variant="outlined"
        loading={isLoading}
        onClick={() => {
          dispatch(incrementPage());
        }}
        type="button"
      >
        Load More
      </Button>
    )
  );
}

export default LoadMoreButton;
