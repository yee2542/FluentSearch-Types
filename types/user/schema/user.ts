import { UserRoleEnum, UserPackageEnum, UserZoneEnum, OAuthProviderEnum } from '..';

export type User = {
  _id: string;
  mainEmail: string;
  email: string[];
  password: string;
  oauth: OAuthToken[] | [];
  name: string;
  // logic
  role: UserRoleEnum;
  package: UserPackageEnum;

  //   meta
  zone: UserZoneEnum;
  deactivate?: boolean;

  createDate: Date;
  updateDate: Date;
};

export type OAuthToken = {
  provider: OAuthProviderEnum;
  token: string;
};

export type UserSession = {
  _id: string;
  mainEmail: string;
  name: string;
  role: UserRoleEnum;
  package: UserPackageEnum;
  zone: UserZoneEnum;
};
