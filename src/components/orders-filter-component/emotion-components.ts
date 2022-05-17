import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

export const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  padding: 16px 0px 14px 0px;
  box-shadow: 0px -0.5px 0px #e0e2e8, 0px 0.5px 0px #e0e2e8;
  justify-content: space-between;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const FilterButtonContainer = styled(Box)`
  display: flex;
  gap: 15px;
  &:first-of-type {
    margin-left: 21px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-left: 0;
    flex-wrap: wrap;
    align-items: center;
    &:first-of-type {
      margin-left: ${({ theme }) => theme.spacing(3.7)}px;
    }
  }
  @media (max-width: 300px) {
    flex-direction: column;
    flex-wrap: unset;
    &:first-of-type {
      margin-left: 0;
    }
  }
`;

export const ApplyFilterButton = styled(Button)`
  font-family: 'Helvetica';
  font-style: normal;
  background: #007bff;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #ffffff;
  text-transform: none;
  &:hover {
    background: #007bff;
  }
  margin-right: 21px;
  padding: 8px 15px 8.5px 15px;
  border-radius: 4px;
  height: max-content;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-right: 0;
    border-radius: 0;
    padding: 10px;
  }
`;
