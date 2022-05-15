import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  padding-left: ${({ theme }) => theme.spacing(2.625)}px;
  padding-right: ${({ theme }) => theme.spacing(2.625)}px;
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.spacing(2.5)}px;
    gap: ${({ theme }) => theme.spacing(2.5)}px;
    align-items: center;
  }
`;

export const CarInfoWrapper = styled(Box)`
  display: flex;
  flex: 40%;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2.5)}px;
    align-items: center;
  }
`;

export const CarInfoBlock = styled(Box)`
  display: flex;
  width: 230px;
  flex-wrap: wrap;
  text-align: left;
  justify-content: center;
`;

export const CarImg = styled.img`
  width: 138px;
  height: auto;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
`;

export const CheckboxBlock = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)}px;
  flex: 20%;
`;

export const Title = styled(Typography)<{ isblack: number }>`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.408571px;
  color: ${({ isblack }) => (isblack ? '#121212' : '#889098')};
  padding-right: 5px;
`;

export const Price = styled(Typography)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.754286px;
  color: ${({ theme }) => theme.colors.black};
  padding-top: ${({ theme }) => theme.spacing(1.5)}px;
  flex: 20%;
`;

export const ChangeStatusBlock = styled(Box)`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(1.5)}px;
  align-items: flex-start;
  border: 0.5px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.spacing(0.5)}px;
  height: fit-content;
  @media (max-width: 1200px) {
    margin-top: 0;
    flex-direction: column;
  }
`;

export const ChangeStatusButton = styled(Button)<{ activeindex: number }>`
  border: none;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: left;
  letter-spacing: -0.345714px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  text-transform: none;
  border-left: ${({ activeindex }) =>
    activeindex === 1 ? '0.5px solid #BECAD6' : 'none'};
  border-right: ${({ activeindex }) =>
    activeindex === 1 ? '0.5px solid #BECAD6' : 'none'};
  border-radius: 0;
  margin: 0;
  padding: 6px 15px;
  &:hover {
    background: none;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.desktopMin}) {
    border: none;
  }
`;
