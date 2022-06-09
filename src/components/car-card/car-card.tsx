import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  setColorCheckboxIsActive,
  setInitialColorsCheckboxArr,
  addColor,
} from '../../redux/colors-checkbox-arr/colors-checkbox-arr';
import {
  useAppDispatch,
  useAppSelector,
  useDeleteCarData,
} from '../../shared/custom-hooks';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { Icons } from '../../shared/icons';
import { TSingleCar } from '../../shared/types';
import { CarCardLeftBlock } from '../car-card-left-block';
import { CarCardRightBlock } from '../car-card-right-block';
import { TextInputComponent } from '../text-input-component';

export const Wrapper = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(6.3)}px;
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
  height: 100%;
`;

export function CarCard() {
  const [cookie] = useCookies(['access']);
  const { carId, colorsCheckboxArr } = useAppSelector(state => ({
    carId: state.carId.carId,
    colorsCheckboxArr: state.colorsCheckboxArr.colorsArr,
  }));
  const { data, isLoading, isError } = useGetData<TSingleCar>({
    QUERY_KEY: 'cars',
    url: `car/${carId}`,
    token: cookie.access,
  });
  const {
    mutateAsync,
    data: deleteResponseData,
    isLoading: isDeleteLoading,
  } = useDeleteCarData();
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [carInputObj, setCarInputObj] = useState({
    carModelInput: '',
    carTypeInput: '',
    carMinPrice: '' as number | string,
    carMaxPrice: '' as number | string,
    carNumber: '',
    carDescription: '',
  });
  const [carColorObj, setCarColorObj] = useState({
    carColorInput: '',
    wrongColorErr: false,
  });
  const [fillingCarPercent, setFillingtCarPercent] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!image) return;
    const newImages = URL.createObjectURL(image);
    setImageUrl(newImages);
  }, [image]);

  useEffect(() => {
    if (data?.data) {
      dispatch(
        setInitialColorsCheckboxArr({
          titles: [...data.data.colors],
        }),
      );
      setCarInputObj({
        carModelInput: data?.data.name || '',
        carTypeInput: data?.data.categoryId.name || '',
        carMinPrice: data?.data.priceMin || '',
        carMaxPrice: data?.data.priceMax || '',
        carNumber: data?.data.number || '',
        carDescription: data?.data.description || '',
      });
    }
  }, [data?.data]);

  const colorCheckboxClickhandler = (title: string) => {
    dispatch(
      setColorCheckboxIsActive({
        activeTitle: title,
      }),
    );
  };

  useEffect(() => {
    for (let i = 0; i < colorsCheckboxArr.length; i++) {
      if (
        colorsCheckboxArr[i].title.toLowerCase().replace(/\s/g, '') ===
        carColorObj.carColorInput.toLowerCase().replace(/\s/g, '')
      ) {
        setCarColorObj({ ...carColorObj, wrongColorErr: true });
        break;
      } else setCarColorObj({ ...carColorObj, wrongColorErr: false });
    }
  }, [carColorObj]);

  const setColorClickhandler = () => {
    if (!carColorObj.wrongColorErr && carColorObj.carColorInput) {
      dispatch(
        addColor({
          colorObj: {
            title: carColorObj.carColorInput,
            isActive: true,
          },
        }),
      );
      setCarColorObj({ ...carColorObj, carColorInput: '' });
    }
  };

  const progressBarFunc = () => {
    let acc = 0;
    Object.entries(carInputObj).forEach(item => item[1] && acc++);
    for (let i = 0; i < colorsCheckboxArr.length; i++) {
      if (colorsCheckboxArr[i].isActive) {
        acc++;
        break;
      }
    }
    acc === 7 ? setFillingtCarPercent(100) : setFillingtCarPercent(acc * 14);
  };

  const cancelChangesButtonClickhandler = () => {
    setCarInputObj({
      carDescription: data?.data?.description || 'Нет информации',
      carMaxPrice: data?.data?.priceMax || 'Нет информации',
      carMinPrice: data?.data?.priceMin || 'Нет информации',
      carModelInput: data?.data?.name || 'Нет информации',
      carNumber: data?.data?.number || 'Нет информации',
      carTypeInput: data?.data?.categoryId?.name || 'Нет информации',
    });
    setImage(null);
    setImageUrl('');
    data &&
      dispatch(
        setInitialColorsCheckboxArr({
          titles: [...data.data.colors],
        }),
      );
  };

  const deleteCarButtonClickhandler = () => {
    mutateAsync(carId || '');
  };

  useEffect(() => {
    progressBarFunc();
  }, [carInputObj, carColorObj]);

  console.log(deleteResponseData, isDeleteLoading);

  return (
    <Wrapper component="main">
      <Title variant="h1">Карточка автомобиля</Title>
      <CarWrapper>
        <CarCardLeftBlock
          image={image}
          imageUrl={imageUrl}
          onImageChange={e => setImage(e.target.files && e.target.files[0])}
          data={data?.data}
          carInputObj={carInputObj}
          setDescriptionInputValue={(v: string) =>
            setCarInputObj({ ...carInputObj, carDescription: v })
          }
          progressBarPercent={fillingCarPercent}
        />
        <CarCardRightBlock
          cancelChangesButtonClickhandler={() =>
            cancelChangesButtonClickhandler()
          }
          carColorObj={carColorObj}
          carInputObj={carInputObj}
          colorCheckboxClickhandler={colorCheckboxClickhandler}
          colorsCheckboxArr={colorsCheckboxArr}
          deleteCarButtonClickhandler={() => deleteCarButtonClickhandler()}
          setCarColorObj={setCarColorObj}
          setCarInputObj={setCarInputObj}
          setColorClickhandler={() => setColorClickhandler()}
        />
      </CarWrapper>
    </Wrapper>
  );
}
