import { ReactNode } from "react";

export interface IUser {
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  birthdate: string;
  description: string;
  isSeller: boolean;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IGetUser {
  userToken: string;
}

export interface UserContextProps {
  children: ReactNode;
}

export interface UserContextType {
  userToken: string;
  setUserToken: (newState: string) => void;

  userData: IUser | null;
  // setUserData: (newState: IUser) => void;

  isLoggedIn: boolean;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;

  saveToken: (userToken: string) => void;
  userLogin: ({ email, password }: ILogin) => void;
  getUser: (userToken: string) => void;
  userLogout: () => void;
  autoLogin: () => void;
  getUserById: (id: string) => void;
}
