import { TCarOrderData } from '../../shared/types';

export type TOrderInformation = {
  activeOrderObj?: TCarOrderData;
  dateTo?: string;
  dateFrom?: string;
};

export type TTitleStyle = {
  isBlack: boolean;
  children: string | undefined;
};
