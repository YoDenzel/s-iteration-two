import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import { Icons } from '../../shared/icons';

type TPagination = {
  currentPage: number;
  setCurrentPage: (v: number) => void;
  paginationRange: (string | number)[] | undefined;
  nextPageClickhandler: () => void;
  prevPageClickhandler: () => void;
  isPrevPage: () => boolean;
  isNextPage: () => boolean;
};

export const Container = styled(Box)`
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const PrevPage = styled(Button)<{ isactive: number }>`
  font-family: 'Helvetica';
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;
  margin: 0 3px;
  color: var(--black);
  text-align: center;
  display: inline-flex;
  border: 1px solid transparent;
  padding: 0px 6px;
  cursor: ${({ isactive }) => (isactive ? 'pointer' : 'default')};
  min-width: unset;
  &:hover {
    border-radius: 16px;
    border: ${({ isactive }) => (isactive ? '1px solid var(--gray)' : '0px')};
  }
`;

export const Dots = styled(Box)``;

export const PaginationItem = styled(Button)<{ isactive: number }>`
  min-width: unset;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 3px;
  color: ${({ isactive }) => (isactive ? '#ffffff' : ' #007BFF')};
  text-align: center;
  display: inline-flex;
  width: 40px;
  height: 40px;
  padding: 0px 6px;
  background-color: ${({ isactive }) => (isactive ? ' #007BFF' : 'none')};
  border-radius: 50%;
  &:hover {
    background-color: ${({ isactive }) => (isactive ? '#007BFF' : 'none')};
  }
`;

export const NextPage = styled(Button)<{ isactive: number }>`
  font-family: 'Helvetica';
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 3px;
  color: var(--black);
  text-align: center;
  display: inline-flex;
  width: 40px;
  height: 40px;
  border: 1px solid transparent;
  padding: 0px 10px;
  cursor: ${({ isactive }) => (isactive ? 'pointer' : 'default')};
  &:hover {
    border-radius: 16px;
    border: ${({ isactive }) => (isactive ? '1px solid var(--gray)' : '0px')};
  }
  transform: rotate(180deg);
  min-width: unset;
`;

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
      >
        <Icons.ChangePage />
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
        isactive={isNextPage() ? 1 : 0}
      >
        <Icons.ChangePage />
      </NextPage>
    </Container>
  );
}
