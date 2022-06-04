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
  DescriptionText,
  InputLabel,
} from './emotion-components';
import { TCarCardLeftBlock } from './types';

export function CarCardLeftBlock({
  data,
  onImageChange,
  image,
  imageUrl,
}: TCarCardLeftBlock) {
  return (
    <CarInfoContainer component="section">
      <CarImageBlock>
        <CarImage src={imageUrl || data?.thumbnail?.path} />
      </CarImageBlock>
      <CarTitle variant="h2">{data?.name || 'Нет информации'}</CarTitle>
      <CarType variant="caption">
        {data?.categoryId?.name || 'Нет информации'}
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
        <DescriptionText>{data?.description}</DescriptionText>
      </DescriptionBlock>
    </CarInfoContainer>
  );
}
