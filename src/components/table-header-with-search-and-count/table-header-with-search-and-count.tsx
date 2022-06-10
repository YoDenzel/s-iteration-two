import styled from '@emotion/styled';
import { Box, Typography, TextField } from '@mui/material';
import { Icons } from '../../shared/icons';
import { TTableHeaderWithSearchAndCount } from './types';

export const TableHeader = styled(Box)`
  width: 100%;
  display: flex;
  padding: 16px 0px 14px 0px;
  box-shadow: 0px -0.5px 0px #e0e2e8, 0px 0.5px 0px #e0e2e8;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const CitiesCountBlock = styled(Box)`
  display: flex;
`;

export const CitiesCountTitle = styled(Typography)`
  padding-left: ${({ theme }) => theme.spacing(1.5)}px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.titleFont};
`;

export const CitiesCountNumber = styled(Typography)`
  padding-left: ${({ theme }) => theme.spacing(0.4)}px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const SearchBlock = styled(Box)`
  display: flex;
`;

export const SearchInput = styled(TextField)`
  padding-right: ${({ theme }) => theme.spacing(1.5)}px;
  border-radius: 8px;
  & input {
    padding: 0;
    border-radius: 8px;
    padding-left: ${({ theme }) => theme.spacing(3.5)}px;
    padding-right: ${({ theme }) => theme.spacing(1)}px;
    padding-top: ${({ theme }) => theme.spacing(0.8)}px;
    padding-bottom: ${({ theme }) => theme.spacing(0.8)}px;
  }
  & div {
    border-radius: 20px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Loop = styled(Box)`
  position: relative;
  top: 11px;
  left: 23px;
`;

export function TableHeaderWithSearchAndCount({
  count,
  inputValue,
  placeholder,
  setInputValue,
  title
}: TTableHeaderWithSearchAndCount) {
  return (
    <TableHeader>
      <CitiesCountBlock component="article">
        <CitiesCountTitle variant="h2">{title}:</CitiesCountTitle>
        <CitiesCountNumber variant="h2">{count}</CitiesCountNumber>
      </CitiesCountBlock>
      <SearchBlock>
        <Loop>
          <Icons.SearchLoop />
        </Loop>
        <SearchInput
          placeholder={placeholder}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          variant="filled"
          InputProps={{ disableUnderline: true }}
        />
      </SearchBlock>
    </TableHeader>
  );
}
