import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useAppSelector } from '../../shared/custom-hooks';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { TSingleCar } from '../../shared/types';
import { CarCardLeftBlock } from '../car-card-left-block';

export const Wrapper = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing(4)}px;
  margin-right: ${({ theme }) => theme.spacing(6.3)}px;
  border-radius: 9px;
  overflow: auto;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: ${({ theme }) => theme.spacing(1.5)}px;
    margin-right: ${({ theme }) => theme.spacing(1.5)}px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    overflow: unset;
  }
`;

export const Title = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 33px;
  letter-spacing: -0.725px;
  color: ${({ theme }) => theme.colors.titleFont};
  margin-top: ${({ theme }) => theme.spacing(3.5)}px;
`;

export const CarWrapper = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(3.75)}px;
`;

export const CarOptionsContainer = styled(Box)`
  display: flex;
  flex: 70%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px rgba(90, 97, 105, 0.12);
  border-radius: 9px;
`;

export function CarCard() {
  const [cookie] = useCookies(['access']);
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const carId = useAppSelector(state => state.carId.carId);
  const { data, isLoading, isError } = useGetData<TSingleCar>({
    QUERY_KEY: 'cars',
    url: `car/${carId}`,
    token: cookie.access,
  });

  useEffect(() => {
    if (!image) return;
    const newImages = URL.createObjectURL(image);
    setImageUrl(newImages);
  }, [image]);

  console.log(image?.name);
  return (
    <Wrapper component="main">
      <Title variant="h1">Карточка автомобиля</Title>
      <CarWrapper>
        <CarCardLeftBlock
          image={image}
          imageUrl={imageUrl}
          onImageChange={e => setImage(e.target.files && e.target.files[0])}
          data={data?.data}
        />
        <CarOptionsContainer component="section"></CarOptionsContainer>
      </CarWrapper>
    </Wrapper>
  );
}
