import { createContext, ReactNode, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import {
  AdvertsContextProps,
  AdvertsContextType,
  IAdvert,
  IAdvertCreate,
  IAdvertUpdate,
  IComment,
} from "./interfaces";

const initialValue = {
  advertsList: { cars: [], motorcycles: [] },
  advertData: null,
  auctionList: { cars: [], motorcycles: [] },
  isFetching: false,
  isEmpty: false,
  isLoaded: false,
  isSuccess: false,
  commentsList: [],

  getAdvertList: () => {},
  createAdvert: () => {},
  updateAdvert: () => {},
  setAdvertsList: () => {},
  setAdvertData: () => {},
  findCarById: () => {},
  createComment: () => {},
  refreshComments: () => {},
  getAuctionList: () => {},
  getAdvertsByUser: () => {},
};

export const AdvertsContext = createContext<AdvertsContextType>(initialValue);

export const AdvertsContextProvider = ({ children }: AdvertsContextProps) => {
  const [advertData, setAdvertData] = useState(initialValue.advertData);
  const [advertsList, setAdvertsList] = useState(initialValue.advertsList);
  const [isEmpty, setIsEmpty] = useState(initialValue.isEmpty);
  const [isLoaded, setIsLoaded] = useState(initialValue.isLoaded);
  const [isSuccess, setIsSuccess] = useState(initialValue.isSuccess);
  const [isFetching, setIsFetching] = useState(initialValue.isFetching);

  const [auctionList, setAuctionList] = useState(initialValue.auctionList);

  const [commentsList, setCommentsList] = useState(initialValue.commentsList);

  const token = localStorage.getItem("userToken");

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

  const createAdvert = async (data: IAdvertCreate) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await api
      .post(
        `adverts`,
        {
          ...data,
          galleryImages: [data.galleryImage],
        },
        config
      )
      .then(async (res) => {
        console.log(res.data);

        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      })
      .finally(() => {});
  };

  const updateAdvert = async (data: IAdvertUpdate, id: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await api.patch(`adverts/${id}`,{...data,galleryImages: [data.galleryImage],},config)
      .then(async (res) => {
        console.log(res.data);

        return res.data;
      })
      .catch((err) => {
        console.log(err);
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
        setAdvertData(null);
        return err;
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  const getAuctionList = async () => {
    setIsFetching(true);
    await api
      .get(`/adverts`)
      .then(async (res) => {
        await setAdvertsList(res.data.auction);
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

  const createComment = async (id: string, data: IComment) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await api
      .post(`/comments/${id}`, data, config)
      .then(async (res) => {
        return res;
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        findCarById(id);
      });
  };

  const refreshComments = () => {
    setCommentsList(advertData?.comments);
  };

  const getAdvertsByUser = async (id: string) => {
    setIsFetching(true);
    await api
      .get(`/adverts/user/${id}`)
      .then(async (res) => {
        await setAdvertsList(res.data.common);
        return res;
      })
      .catch((err) => {
        setAdvertData(null);
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
        isSuccess,
        isFetching,
        getAdvertList,
        createAdvert,
        updateAdvert,
        findCarById,
        createComment,
        getAuctionList,
        commentsList,
        auctionList,
        refreshComments,
        getAdvertsByUser,
      }}
    >
      {children}
    </AdvertsContext.Provider>
  );
};
