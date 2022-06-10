import { Icons } from '../../shared/icons';
import { TextInputComponent } from '../text-input-component';
import {
  CarOptionsContainer,
  CarOptionsTitle,
  EditInfrormationBlock,
  AvailableColorsBlock,
  ColorsInputBlock,
  AddColor,
  CheckboxesBlock,
  CheckboxMark,
  CheckboxTitle,
  ButtonsBlock,
  SaveAndCancelButtonsWrapper,
  SaveCarDataButton,
  CancelButton,
  DeleteCarButton,
  CheckboxItem,
  CarTypeBlock,
  CarTypeListItem,
  CarTypesList,
} from './emotion-components';
import { TCarCardRightBlock } from './types';

export function CarCardRightBlock({
  cancelChangesButtonClickhandler,
  carInputObj,
  colorCheckboxClickhandler,
  deleteCarButtonClickhandler,
  setCarInputObj,
  colorsCheckboxArr,
  carColorObj,
  setCarColorObj,
  setColorClickhandler,
  createOrChangeCar,
  carCategoriesArr,
  isCarTypeDropdownActive,
  setIsCarTypeDropdownActive,
  carDropdownInputRef,
  carTypeInput,
  setCarTypeInput,
  setChoosedCarType,
}: TCarCardRightBlock) {
  return (
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
        <CarTypeBlock>
          <TextInputComponent
            type="text"
            placeholder="Введите тип автомобиля"
            value={carTypeInput}
            setValue={(v: string) => setCarTypeInput(v)}
            title="Тип автомобиля"
            flex="45%"
            onInputClick={setIsCarTypeDropdownActive}
          />
          {isCarTypeDropdownActive && (carCategoriesArr?.length || 0) > 0 && (
            <CarTypesList ref={carDropdownInputRef}>
              {carCategoriesArr?.map((item, index) => (
                <CarTypeListItem
                  key={index + item.id}
                  onClick={() => setChoosedCarType(item)}
                >
                  {item.name}
                </CarTypeListItem>
              ))}
            </CarTypesList>
          )}
        </CarTypeBlock>
        <TextInputComponent
          type="number"
          placeholder="Введите минимальную цену"
          value={String(carInputObj.carMinPrice)}
          setValue={(v: string) =>
            setCarInputObj({ ...carInputObj, carMinPrice: v })
          }
          title="Мин. цена, ₽"
          flex="25%"
        />
        <TextInputComponent
          type="number"
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
        <TextInputComponent
          type="number"
          placeholder="Введите насколько заполнен бак"
          value={carInputObj.carTank}
          setValue={(v: string) =>
            setCarInputObj({ ...carInputObj, carTank: Number(v) })
          }
          title="Бак, %"
          flex="100%"
          maxLength={3}
          errorMessage={
            (carInputObj.carTank || 0) > 100 ? 'Значение не больше 100' : ''
          }
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
          <SaveCarDataButton onClick={() => createOrChangeCar()}>
            Сохранить
          </SaveCarDataButton>
          <CancelButton onClick={() => cancelChangesButtonClickhandler()}>
            Отменить
          </CancelButton>
        </SaveAndCancelButtonsWrapper>
        <DeleteCarButton onClick={() => deleteCarButtonClickhandler()}>
          Удалить
        </DeleteCarButton>
      </ButtonsBlock>
    </CarOptionsContainer>
  );
}
