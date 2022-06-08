import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  setColorCheckboxIsActive,
  setInitialColorsCheckboxArr,
  addColor,
} from '../../redux/colors-checkbox-arr/colors-checkbox-arr';
import { useAppDispatch, useAppSelector } from '../../shared/custom-hooks';
import { useGetData } from '../../shared/custom-hooks/use-get-data/use-get-data';
import { Icons } from '../../shared/icons';
import { TSingleCar } from '../../shared/types';
import { CarCardLeftBlock } from '../car-card-left-block';
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

export const CarOptionsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 75%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px rgba(90, 97, 105, 0.12);
  border-radius: 9px;
  padding: ${({ theme }) => theme.spacing(2.5)}px;
  min-height: 80%;
  margin-bottom: ${({ theme }) => theme.spacing(2.5)}px;
`;

export const CarOptionsTitle = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  font-size: 17.5px;
  line-height: 21px;
  letter-spacing: -0.4375px;
  color: ${({ theme }) => theme.colors.titleFont};
`;

export const EditInfrormationBlock = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2.625)}px;
`;

export const AvailableColorsBlock = styled(Box)`
  flex: 100%;
`;

export const ColorsInputBlock = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)}px;
  align-items: flex-end;
`;
export const AddColor = styled(Box)`
  padding: ${({ theme }) => theme.spacing(1.375)}px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 4px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 1px;
  cursor: pointer;
`;

export const CheckboxesBlock = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)}px;
  margin-top: ${({ theme }) => theme.spacing(1.75)}px;
  padding: 0;
  flex: 1;
`;

export const CheckboxItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)}px;
  cursor: pointer;
  width: fit-content;
  padding: 0;
  text-transform: none;
  min-width: unset;
  padding-right: ${({ theme }) => theme.spacing(1.25)}px;
`;

export const CheckboxMark = styled(Box)<{ isactive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ isactive }) => (isactive ? '#007bff' : '#ffffff')};
  border: 1px solid #007bff;
  border-radius: 2px;
  width: 12px;
  height: 12px;
`;

export const CheckboxTitle = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.175439px;
  color: #495057;
`;

export const ButtonsBlock = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const SaveAndCancelButtonsWrapper = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1.5)}px;
`;

export const SaveCarDataButton = styled(Button)`
  text-transform: none;
  background: #007bff;
  border-radius: 4px;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 11.5px;
  line-height: 13px;
  text-align: center;
  letter-spacing: -0.0821429px;
  color: #ffffff;
  &:hover {
    background: #1567be;
  }
  padding: 8px 15px 8.5px 15px;
  border-radius: 4px;
  height: max-content;
`;

export const CancelButton = styled(Button)`
  text-transform: none;
  background: #e9ecef;
  border-radius: 4px;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 11.5px;
  line-height: 13px;
  text-align: center;
  letter-spacing: -0.0821429px;
  color: #3d5170;
  &:hover {
    background: #cad0d8;
  }
  padding: 8px 15px 8.5px 15px;
  border-radius: 4px;
  height: max-content;
`;

export const DeleteWrapper = styled(Box)``;

export const DeleteCarButton = styled(Button)`
  text-transform: none;
  background: #cb3656;
  border-radius: 4px;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 11.5px;
  line-height: 13px;
  text-align: center;
  letter-spacing: -0.0821429px;
  color: #ffffff;
  &:hover {
    background: #a0233e;
  }
  padding: 8px 15px 8.5px 15px;
  border-radius: 4px;
  height: max-content;
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
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [carInputObj, setCarInputObj] = useState({
    carModelInput: data?.data?.name || '',
    carTypeInput: data?.data.categoryId?.name || '',
    carMinPrice: data?.data?.priceMin || '',
    carMaxPrice: data?.data?.priceMax || '',
    carNumber: data?.data?.number || '',
    carDescription: data?.data?.description || '',
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
    if (data?.data.colors)
      dispatch(
        setInitialColorsCheckboxArr({
          titles: [...data.data.colors],
        }),
      );
  }, [data]);

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

  useEffect(() => {
    progressBarFunc();
  }, [carInputObj, carColorObj]);

  return (
    <Wrapper component="main">
      <Title variant="h1">Карточка автомобиля</Title>
      <CarWrapper>
        <CarCardLeftBlock
          image={image}
          imageUrl={imageUrl}
          onImageChange={e => setImage(e.target.files && e.target.files[0])}
          data={data?.data}
          descriptionInputValue={carInputObj.carDescription}
          setDescriptionInputValue={(v: string) =>
            setCarInputObj({ ...carInputObj, carDescription: v })
          }
          progressBarPercent={fillingCarPercent}
        />
        <CarOptionsContainer component="section">
          <CarOptionsTitle>Настройки автомобиля</CarOptionsTitle>
          <EditInfrormationBlock>
            <TextInputComponent
              type="text"
              placeholder="Введите модель"
              setValue={(v: string) => {
                setCarInputObj({ ...carInputObj, carModelInput: v });
              }}
              value={carInputObj.carModelInput}
              title="Модель автомобиля"
              flex="45%"
            />
            <TextInputComponent
              type="text"
              placeholder="Введите тип автомобиля"
              value={carInputObj.carTypeInput}
              setValue={(v: string) =>
                setCarInputObj({ ...carInputObj, carTypeInput: v })
              }
              title="Тип автомобиля"
              flex="45%"
            />
            <TextInputComponent
              type="text"
              placeholder="Введите минимальную цену"
              value={String(carInputObj.carMinPrice)}
              setValue={(v: string) =>
                setCarInputObj({ ...carInputObj, carMinPrice: v })
              }
              title="Мин. цена, ₽"
              flex="25%"
            />
            <TextInputComponent
              type="text"
              placeholder="Введите максимальную цену"
              value={String(carInputObj.carMaxPrice)}
              setValue={(v: string) =>
                setCarInputObj({ ...carInputObj, carMaxPrice: v })
              }
              title="Макс. цена, ₽"
              flex="25%"
            />
            <TextInputComponent
              type="text"
              placeholder="Введите номер машины"
              value={String(carInputObj.carNumber)}
              setValue={(v: string) =>
                setCarInputObj({ ...carInputObj, carNumber: v })
              }
              title="Номер машины"
              flex="25%"
              maxLength={9}
            />
            <AvailableColorsBlock>
              <ColorsInputBlock>
                <TextInputComponent
                  value={carColorObj.carColorInput}
                  setValue={(v: string) =>
                    setCarColorObj({ ...carColorObj, carColorInput: v })
                  }
                  placeholder="Введите цвет"
                  title="Доступные цвета"
                  type="text"
                />
                <AddColor onClick={() => setColorClickhandler()}>
                  <Icons.PlusIcon />
                </AddColor>
              </ColorsInputBlock>
            </AvailableColorsBlock>
          </EditInfrormationBlock>
          <CheckboxesBlock>
            {colorsCheckboxArr.map((item, id) => (
              <CheckboxItem
                key={item.title + id}
                onClick={() => colorCheckboxClickhandler(item.title)}
              >
                <CheckboxMark isactive={item.isActive}>
                  {item.isActive && <Icons.CheckMark color="#ffffff" />}
                </CheckboxMark>
                <CheckboxTitle variant="body1">{item.title}</CheckboxTitle>
              </CheckboxItem>
            ))}
          </CheckboxesBlock>
          <ButtonsBlock>
            <SaveAndCancelButtonsWrapper>
              <SaveCarDataButton>Сохранить</SaveCarDataButton>
              <CancelButton>Отменить</CancelButton>
            </SaveAndCancelButtonsWrapper>
            <DeleteCarButton>Удалить</DeleteCarButton>
          </ButtonsBlock>
        </CarOptionsContainer>
      </CarWrapper>
    </Wrapper>
  );
}
