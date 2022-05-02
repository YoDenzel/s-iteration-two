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

export type TOptionsArr = { title: string; optionId: string };
