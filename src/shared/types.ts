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
