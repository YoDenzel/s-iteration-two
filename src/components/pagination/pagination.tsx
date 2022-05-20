import { Icons } from '../../shared/icons';
import {
  PrevPage,
  Dots,
  NextPage,
  Container,
  PaginationItem,
} from './emotion-components';
import { TPagination } from './types';

export function Pagination({
  currentPage,
  nextPageClickhandler,
  paginationRange,
  prevPageClickhandler,
  setCurrentPage,
  isNextPage,
  isPrevPage,
}: TPagination) {
  return (
    <Container component="nav">
      <PrevPage
        disabled={isPrevPage()}
        onClick={() => prevPageClickhandler()}
        isactive={!isPrevPage() ? 1 : 0}
        disableRipple
      >
        <Icons.ChangePage color={!isPrevPage() ? '#007BFF' : '#868E96'} />
      </PrevPage>
      {paginationRange?.map((item, index) => {
        if (item === 'DOTS') {
          return (
            <Dots component="span" key={item + index}>
              &#8230;
            </Dots>
          );
        }
        return (
          <PaginationItem
            key={Number(item) + index}
            onClick={() => setCurrentPage(Number(item))}
            isactive={currentPage === Number(item) ? 1 : 0}
            disableRipple
          >
            {item}
          </PaginationItem>
        );
      })}
      <NextPage
        onClick={() => nextPageClickhandler()}
        disabled={isNextPage()}
        isactive={!isNextPage() ? 1 : 0}
        disableRipple
      >
        <Icons.ChangePage color={!isNextPage() ? '#007BFF' : '#868E96'} />
      </NextPage>
    </Container>
  );
}
