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
}

export interface AdvertsContextProps {
  children: ReactNode;
}

export interface AdvertsContextType {
  advertData: IAdvert;
  advertsList: IAdvert[];
  isEmpty: boolean;
  isLoaded: boolean;
  isFetching: boolean;

  getAdvertList: () => void;
  createAdvert: (data: IAdvert) => void;
  findCarById: (id: string) => void;
}
