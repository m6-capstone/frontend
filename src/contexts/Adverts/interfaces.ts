import { ReactNode } from "react";
import { IUser } from "../User/interfaces";

export interface IAdvert {
  id: string;
  advertsType: string;
  title: string;
  year: string;
  mileage: string;
  price: string;
  description: string;
  vehicleType: string;
  coverImage: string;
  galleryImages: string[];
  isActive: boolean;
  isPublished: boolean;
  user: IUser | null;
  comments: IComment[];
}

export interface IAdvertCreate {
  advertsType: string;
  title: string;
  year: string;
  mileage: string;
  price: string;
  description: string;
  vehicleType: string;
  coverImage: string;
  galleryImage: string;
  isPublished: boolean;
}

export interface IComment {
  text: string;
}

export interface AdvertsContextProps {
  children: ReactNode;
}

export interface AdvertsContextType {
  advertData: IAdvert;
  advertsList: IAdvert[];
  isEmpty: boolean;
  isLoaded: boolean;
  isSuccess: boolean;
  isFetching: boolean;
  commentsList: IComment[];

  getAdvertList: () => void;
  createAdvert: (data: IAdvertCreate) => void;
  findCarById: (id: string) => void;
  createComment: (id: string, data: IComment) => void;
  refreshComments: () => void;
}
