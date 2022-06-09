import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";

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
