import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useAppSelector } from '../../shared/custom-hooks';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { TSingleCar } from '../../shared/types';

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
`;

export const CarInfoContainer = styled(Box)`
  display: flex;
  flex: 25%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px rgba(90, 97, 105, 0.12);
  border-radius: 9px;
  margin-right: ${({ theme }) => theme.spacing(3.5)}px;
  flex-direction: column;
`;

export const CarOptionsContainer = styled(Box)`
  display: flex;
  flex: 75%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px rgba(90, 97, 105, 0.12);
  border-radius: 9px;
`;

export const CarImageBlock = styled(Box)`
  margin-top: 25px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const CarImage = styled.img`
  width: 175px;
  height: auto;
`;

export const CarTitle = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 24.5px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.6125px;
  color: #3d5170;
  margin-top: ${({ theme }) => theme.spacing(1.25)}px;
`;

export const CarType = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 12.5px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.3125px;
  color: #818ea3;
  margin-top: ${({ theme }) => theme.spacing(0.5)}px;
`;

export const ImgInput = styled.input``;

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

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files && e.target.files[0]);
  };

  useEffect(() => {
    if (!image) return;
    const newImages = URL.createObjectURL(image);
    setImageUrl(newImages);
  }, [image]);

  console.log(imageUrl);
  return (
    <Wrapper component="main">
      <Title variant="h1">Карточка автомобиля</Title>
      <CarWrapper component="section">
        <CarInfoContainer>
          <CarImageBlock>
            <CarImage src={imageUrl || data?.data.thumbnail.path} />
          </CarImageBlock>
          <CarTitle variant="h2">
            {data?.data?.name || 'Нет информации'}
          </CarTitle>
          <CarType variant="caption">
            {data?.data.categoryId?.name || 'Нет информации'}
          </CarType>
          <ImgInput
            type="file"
            accept="image/*"
            onChange={e => onImageChange(e)}
          />
        </CarInfoContainer>
        <CarOptionsContainer></CarOptionsContainer>
      </CarWrapper>
    </Wrapper>
  );
}
