import { createContext, ReactNode, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { ILogin, UserContextProps, UserContextType } from "./interfaces";

const initialValue = {
  userData: {
    name: "",
    email: "",
    cpf: "",
    cellphone: "",
    birthdate: "",
    description: "",
    isSeller: false,
  },
  userToken: "",
  isLoggedIn: false,
  isFetching: false,
  isSuccess: false,
  isError: false,
  setUserData: () => {},
  setUserToken: () => {},
  saveToken: () => {},
  userLogin: () => {},
  userLogout: () => {},
  getUser: () => {},
  autoLogin: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(initialValue.userData);
  const [userToken, setUserToken] = useState(initialValue.userToken);
  const [isLoggedIn, setIsLoggedIn] = useState(initialValue.isLoggedIn);

  const [isFetching, setIsFetching] = useState(initialValue.isFetching);
  const [isSuccess, setIsSuccess] = useState(initialValue.isSuccess);
  const [isError, setIsError] = useState(initialValue.isError);

  const saveToken = async (token: string) => {
    await setUserToken(token);
    localStorage.setItem("userToken", token);
  };

  const userLogin = async ({ email, password }: ILogin) => {
    setIsFetching(true);

    await api
      .post(`login`, { email, password })
      .then(async (res) => {
        console.log(res.data)
        await saveToken(res.data.token);
        await getUser(res.data.token);

        setIsSuccess(true);
        setIsLoggedIn(true);
        setIsError(false);

        return res.data;
      })
      .catch((err) => {
        setIsError(true);
        setIsSuccess(false);
        setIsLoggedIn(false);

        return err;
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  const getUser = async (token: string) => {
    await api
      .get(`/users/profile`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(async (res) => {
        await setUserData(res.data);
        return res.data;
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {});
  };

  const autoLogin = async () => {
    const localToken = localStorage.getItem("userToken");

    if (localToken) {
      await getUser(localToken);
      setIsLoggedIn(true);
    }
  };

  const userLogout = async () => {
    localStorage.removeItem("userToken");
    setUserData(initialValue.userData);
    setUserToken(initialValue.userToken);
    setIsLoggedIn(initialValue.isLoggedIn);
    setIsFetching(initialValue.isFetching);
    setIsSuccess(initialValue.isSuccess);
    setIsError(initialValue.isError);

    toast.info("Usuário deslogado");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        userToken,
        isFetching,
        isError,
        isSuccess,
        isLoggedIn,
        setUserData,
        setUserToken,
        saveToken,
        userLogin,
        userLogout,
        getUser,
        autoLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
