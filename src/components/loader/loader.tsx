import { CircularProgress } from '@mui/material';
import { LoaderContainer } from './emotion-components';

export function Loader() {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
}
