import { createContext, ReactNode, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { AdvertsContextProps, AdvertsContextType, IAdvert } from "./interfaces";

const initialValue = {
  advertsList: [],
  advertData: {
    id: "",
    advertsType: "",
    title: "",
    year: "",
    mileage: "",
    price: "",
    description: "",
    vehicleType: "",
    coverImage: "",
    galleryImages: [""],
    isActive: true,
    isPublished: true,
    user: null,
  },
  isFetching: false,
  isEmpty: false,
  isLoaded: false,
  getAdvertList: () => {},
  createAdvert: () => {},
  setAdvertsList: () => {},
  setAdvertData: () => {},
  findCarById: () => {},
};

export const AdvertsContext = createContext<AdvertsContextType>(initialValue);

export const AdvertsContextProvider = ({ children }: AdvertsContextProps) => {
  const [advertData, setAdvertData] = useState(initialValue.advertData);
  const [advertsList, setAdvertsList] = useState(initialValue.advertsList);
  const [isEmpty, setIsEmpty] = useState(initialValue.isEmpty);
  const [isLoaded, setIsLoaded] = useState(initialValue.isLoaded);
  const [isFetching, setIsFetching] = useState(initialValue.isFetching);

  const getAdvertList = async () => {
    setIsFetching(true);
    await api
      .get(`/adverts`)
      .then(async (res) => {
        await setAdvertsList(res.data.common);
        setIsEmpty(res.data.common.length === 0 ? true : false);

        return res.data;
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        setIsLoaded(true);
        setIsFetching(false);
      });
  };

  const createAdvert = async (data: IAdvert) => {
    await api
      .post(`adverts`, data)
      .then(async (res) => {
        console.log(res.data);

        return res.data;
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {});
  };

  const findCarById = async (id: string) => {
    setIsFetching(true);
    await api
      .get(`/adverts/${id}`)
      .then(async (res) => {
        setAdvertData(res.data);
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return (
    <AdvertsContext.Provider
      value={{
        advertsList,
        advertData,
        isEmpty,
        isLoaded,
        isFetching,
        getAdvertList,
        createAdvert,
        findCarById,
      }}
    >
      {children}
    </AdvertsContext.Provider>
  );
};
