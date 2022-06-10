export type TIcons = Partial<{
  width: number;
  height: number;
  color: string;
}>;

export type TPostAuth = {
  username: string;
  password: string;
};

export type TPostAuthResponse = {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  user_id: string;
};

export type TCarRate = {
  count: number;
  data: TCarRateData[];
  fields: {};
};

export type TCarRateData = {
  createdAt: number;
  id: string;
  price: number;
  rateTypeId: TCarRateTypeId;
  updatedAt: number;
};

type TCarRateTypeId = {
  id: string;
  name: string;
  unit: string;
};

export type TOptionsArr = { name: string; id: string };

export type TCities = {
  fields: {};
  count: number;
  data: TCitiesData[];
};

export type TCitiesData = {
  updatedAt: string;
  createdAt: string;
  name: string;
  id: string;
};

export type TOrderStatus = {
  fields: {};
  count: number;
  data: TOptionsArr[];
};

export type TCars = {
  fields: {};
  count: number;
  data: TCarsData[];
};

export type TCarsData = {
  categoryId: TCarCategoryId;
  colors: string[];
  createdAt: number;
  description: string;
  id: string;
  name: string;
  number: string;
  priceMax: number;
  priceMin: number;
  tank: number;
  thumbnail: TCarThumbnail;
  updatedAt: number;
};

export type TCarCategoryId = {
  name: string;
  id: string;
  description: string;
};

export type TCarThumbnail = {
  mimetype: string;
  originalname: string;
  path: string;
  size: number;
};

export type TCarOrder = {
  fields: {};
  count: number;
  data: TCarOrderData[];
};

export type TCarOrderData = {
  orderStatusId?: TOptionsArr | null;
  cityId: TOptionsArr | null;
  pointId: TPointId | null;
  carId: TCarId;
  color: string;
  dateFrom: number;
  dateTo: number;
  rateId: string | null;
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
};

type TCarId = {
  categoryId: TCarCategoryId;
  colors: string[];
  description: string;
  id: string;
  name: string;
  number: string;
  priceMax: number;
  priceMin: number;
  tank: number;
  thumbnail: TCarThumbnail;
};

type TPointId = {
  address: string;
  id: string;
  name: string;
};

export type TCarCategory = {
  count: number;
  fields: {};
  data: TCarCategoryData[];
};

export type TCarCategoryData = {
  updatedAt: number;
  createdAt: number;
  name: string;
  description: string;
  id: string;
};

export type TPoint = {
  count: number;
  fields: {};
  data: TPointData[];
};

export type TPointData = {
  address: string;
  id: string;
  name: string;
  cityId: TOptionsArr;
};

export type TCarRateTypes = {
  count: number;
  fields: {};
  data: TCarRateTypesData[];
};

export type TCarRateTypesData = {
  name: string;
  unit: string;
  id: string;
};

export type TSingleCar = {
  fields: {};
  data: TCarsData;
};

export type TCarInputObj = {
  carModelInput: string;
  carChoosedType: TCarCategoryId | null;
  carMinPrice: string | number;
  carMaxPrice: string | number;
  carNumber: string;
  carDescription: string;
  carTank: string | number;
};
