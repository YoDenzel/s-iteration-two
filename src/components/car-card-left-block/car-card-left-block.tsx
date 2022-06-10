import {
  CarInfoContainer,
  CarImageBlock,
  CarImage,
  CarTitle,
  CarType,
  ImgInputBlock,
  ImgInputPlaceholder,
  InputLoadFileBlock,
  InputLabelTile,
  ImgInput,
  ProgressBarBlock,
  ProgressBarTextInfoWrapper,
  ProgressBarTitle,
  ProgresstBarPercent,
  ProgressBarLineContainer,
  ProgressBarLine,
  DescriptionBlock,
  DescriptionTitle,
  DescriptionInput,
  InputLabel,
} from './emotion-components';
import { TCarCardLeftBlock } from './types';

export function CarCardLeftBlock({
  data,
  onImageChange,
  image,
  imageUrl,
  setDescriptionInputValue,
  progressBarPercent,
  carInputObj,
}: TCarCardLeftBlock) {
  return (
    <CarInfoContainer component="section">
      <CarImageBlock>
        <CarImage src={imageUrl || data?.thumbnail?.path} />
      </CarImageBlock>
      <CarTitle variant="h2">
        {carInputObj.carModelInput || 'Нет информации'}
      </CarTitle>
      <CarType variant="caption">
        {carInputObj.carChoosedType?.name || 'Нет информации'}
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
          <ProgresstBarPercent variant="h2">
            {progressBarPercent}%
          </ProgresstBarPercent>
        </ProgressBarTextInfoWrapper>
        <ProgressBarLineContainer>
          <ProgressBarLine width={progressBarPercent} />
        </ProgressBarLineContainer>
      </ProgressBarBlock>
      <DescriptionBlock>
        <DescriptionTitle>Описание</DescriptionTitle>
        <DescriptionInput
          value={carInputObj.carDescription}
          onChange={e => setDescriptionInputValue(e.target.value)}
          multiline
          placeholder="Введите описание машины"
        />
      </DescriptionBlock>
    </CarInfoContainer>
  );
}
