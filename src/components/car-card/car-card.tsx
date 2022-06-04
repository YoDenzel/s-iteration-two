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
  margin-top: ${({ theme }) => theme.spacing(3.75)}px;
`;

export const CarInfoContainer = styled(Box)`
  display: flex;
  flex: 30%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px rgba(90, 97, 105, 0.12);
  border-radius: 9px;
  margin-right: ${({ theme }) => theme.spacing(3.5)}px;
  flex-direction: column;
`;

export const CarOptionsContainer = styled(Box)`
  display: flex;
  flex: 70%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px rgba(90, 97, 105, 0.12);
  border-radius: 9px;
`;

export const CarImageBlock = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(3.125)}px;
  padding-left: ${({ theme }) => theme.spacing(3.75)}px;
  padding-right: ${({ theme }) => theme.spacing(3.75)}px;
`;

export const CarImage = styled.img`
  width: 200px;
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
  color: ${({ theme }) => theme.colors.titleFont};
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
  color: ${({ theme }) => theme.colors.tableTextFont};
  margin-top: ${({ theme }) => theme.spacing(0.5)}px;
`;

export const ImgInputBlock = styled(Box)`
  min-height: 30px;
  display: flex;
  align-items: center;
  border: 0.5px solid #becad6;
  border-radius: 4px;
  margin-left: ${({ theme }) => theme.spacing(4)}px;
  margin-right: ${({ theme }) => theme.spacing(4)}px;
  margin-top: ${({ theme }) => theme.spacing(1.25)}px;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  position: relative;
  overflow: hidden;
`;

export const ImgInput = styled.input`
  position: absolute;
  visibility: hidden;
`;

export const ImgInputPlaceholder = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.175439px;
  color: #495057;
  margin-left: ${({ theme }) => theme.spacing(1.25)}px;
  flex: 1;
`;

export const InputLoadFileBlock = styled(Box)`
  display: flex;
  align-items: center;
  border-left: 0.5px solid ${({ theme }) => theme.colors.inputBorder};
  background: #e9ecef;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.veryLightGray};
  }
`;

export const InputLabel = styled.label`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing(1.5)}px;
  padding-right: ${({ theme }) => theme.spacing(1.5)}px;
  cursor: pointer;
`;

export const InputLabelTile = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.175439px;
  color: #495057;
`;

export const ProgressBarBlock = styled(Box)`
  padding-left: ${({ theme }) => theme.spacing(2.5)}px;
  padding-right: ${({ theme }) => theme.spacing(2.5)}px;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.12), 0px 1px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: ${({ theme }) => theme.spacing(2.75)}px;
`;

export const ProgressBarTextInfoWrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(1.25)}px;
  margin-top: ${({ theme }) => theme.spacing(1.75)}px;
`;

export const ProgressBarTitle = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.408571px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const ProgresstBarPercent = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  letter-spacing: -0.345714px;
  color: ${({ theme }) => theme.colors.secondaryFont};
`;

export const ProgressBarLineContainer = styled(Box)`
  height: 5px;
  width: 100%;
  box-shadow: inset 0px 0.5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

export const ProgressBarLine = styled(Box)<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 4px;
  transition: width 1s ease-in-out;
`;

export const DescriptionBlock = styled(Box)`
  margin-left: ${({ theme }) => theme.spacing(2.75)}px;
  margin-right: ${({ theme }) => theme.spacing(3.625)}px;
`;

export const DescriptionTitle = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.408571px;
  color: #868e96;
`;

export const DescriptionText = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 13.5px;
  line-height: 20px;
  letter-spacing: -0.408571px;
  color: #5a6169;
  margin-top: ${({ theme }) => theme.spacing(1.75)}px;
  margin-bottom: ${({ theme }) => theme.spacing(6.25)}px;
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

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files && e.target.files[0]);
  };

  useEffect(() => {
    if (!image) return;
    const newImages = URL.createObjectURL(image);
    setImageUrl(newImages);
  }, [image]);

  console.log(image?.name);
  return (
    <Wrapper component="main">
      <Title variant="h1">Карточка автомобиля</Title>
      <CarWrapper component="section">
        <CarInfoContainer component="article">
          <CarImageBlock>
            <CarImage src={imageUrl || data?.data.thumbnail.path} />
          </CarImageBlock>
          <CarTitle variant="h2">
            {data?.data?.name || 'Нет информации'}
          </CarTitle>
          <CarType variant="caption">
            {data?.data.categoryId?.name || 'Нет информации'}
          </CarType>
          <ImgInputBlock>
            <ImgInputPlaceholder variant="caption">
              {image?.name || 'Выберите файл...'}
            </ImgInputPlaceholder>
            <InputLoadFileBlock component="article">
              <InputLabel htmlFor="file_input">
                <InputLabelTile variant="body1">Обзор</InputLabelTile>
              </InputLabel>
              <ImgInput
                id="file_input"
                type="file"
                accept="image/*"
                onChange={e => onImageChange(e)}
              />
            </InputLoadFileBlock>
          </ImgInputBlock>
          <ProgressBarBlock component="article">
            <ProgressBarTextInfoWrapper>
              <ProgressBarTitle variant="h2">Заполнено</ProgressBarTitle>
              <ProgresstBarPercent variant="h2">70%</ProgresstBarPercent>
            </ProgressBarTextInfoWrapper>
            <ProgressBarLineContainer>
              <ProgressBarLine width={70} />
            </ProgressBarLineContainer>
          </ProgressBarBlock>
          <DescriptionBlock>
            <DescriptionTitle>Описание</DescriptionTitle>
            <DescriptionText>{data?.data.description}</DescriptionText>
          </DescriptionBlock>
        </CarInfoContainer>
        <CarOptionsContainer></CarOptionsContainer>
      </CarWrapper>
    </Wrapper>
  );
}
