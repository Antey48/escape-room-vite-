import { AuthStatus } from '../constants';

type UserType = {
    'name': string;
    'avatarUrl': string;
    'isPro': boolean;
  };

type AuthorizationType = {
  id: number;
  'email': string;
  'token': string;
};

type AuthorizedUserType = AuthorizationType & UserType;

 type AuthData = {
  login: string;
  password: string;
};

type AuthorizationStatusType = typeof AuthStatus[keyof typeof AuthStatus]

export type { AuthorizedUserType, UserType, AuthorizationType, AuthData, AuthorizationStatusType };
