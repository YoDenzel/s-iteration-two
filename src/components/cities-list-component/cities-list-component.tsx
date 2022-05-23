import { Box } from '@mui/system';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { TCities } from '../../shared/types';

export const Wrapper = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing(4)}px;
  margin-right: ${({ theme }) => theme.spacing(6.3)}px;
  border-radius: 9px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: ${({ theme }) => theme.spacing(1.5)}px;
    margin-right: ${({ theme }) => theme.spacing(1.5)}px;
  }
`;

export const Container = styled(Box)`
  width: 100%;
  min-height: 70%;
  border-radius: 9px;
  margin-top: ${({ theme }) => theme.spacing(3.8)}px;
  margin-bottom: ${({ theme }) => theme.spacing(2.5)}px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 0px rgba(90, 97, 105, 0.11),
    0px 4px 8px rgba(90, 97, 105, 0.12), 0px 10px 10px rgba(90, 97, 105, 0.06),
    0px 7px 70px rgba(90, 97, 105, 0.1);
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 33px;
  letter-spacing: -0.725px;
  color: #3d5170;
  margin-top: ${({ theme }) => theme.spacing(3.5)}px;
`;

export const CitiesCountBlock = styled(Box)``;

export const CitiesCount = styled(Typography)``;

const PAGE_LIMIT = 4;

export function CitiesListComponent() {
  const [cookie] = useCookies(['access']);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  const { data, isLoading } = useGetData<TCities>({
    QUERY_KEY: 'cars',
    url: `city?${filter}&page=${currentPage - 1}&limit=${PAGE_LIMIT}`,
    token: cookie.access,
  });
  console.log(data);
  return (
    <Wrapper component="main">
      <Title>Список городов</Title>
      <Container component="section">
        <CitiesCountBlock>
          <CitiesCount>{data?.count}</CitiesCount>
        </CitiesCountBlock>
      </Container>
    </Wrapper>
  );
}
