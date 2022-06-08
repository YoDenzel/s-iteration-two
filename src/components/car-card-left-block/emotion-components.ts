import styled from '@emotion/styled';
import { Box, TextField, Typography } from '@mui/material';

export const CarInfoContainer = styled(Box)`
  display: flex;
  flex: 25%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px rgba(90, 97, 105, 0.12);
  border-radius: 9px;
  margin-right: ${({ theme }) => theme.spacing(3.5)}px;
  flex-direction: column;
  height: fit-content;
  margin-bottom: ${({ theme }) => theme.spacing(3.5)}px;
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
  min-height: 32px;
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

export const DescriptionInput = styled(TextField)`
  font-style: normal;
  font-weight: 400;
  font-size: 13.5px;
  line-height: 20px;
  letter-spacing: -0.408571px;
  color: #5a6169;
  margin-top: ${({ theme }) => theme.spacing(1.75)}px;
  margin-bottom: ${({ theme }) => theme.spacing(6.25)}px;
  border: none;
  outline: none;
  width: 100%;
  flex: 1;
  padding: 0;
  & fieldset {
    border: none;
  }
  & fieldset:hover {
    border: none;
  }
  & div {
    padding: 0;
  }
`;
