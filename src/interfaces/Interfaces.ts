import { CreateParams, FieldProps } from "react-admin";

export interface User {
  UserID: number;
  FirstName: string;
  LastName: string;
  username: string;
  Email: string;
  Phone: string;
  DateOfBirth: Date;
  CreatedDate: Date;
  UpdatedDate: Date;
  disabled: boolean;
  is_verified: boolean;
}

export interface BasePackage {
  PackageID: number;
  PackageName: string;
  Description: string;
  Price: number;
  Duration: Date;
  StartDate: Date;
  EndDate: Date;
  DestinationID: number;
}
export type Package = BasePackage & {
  id: number;
};
export interface BaseDestination {
  DestinationID: number;
  DestinationName: string;
  Country: string;
  Description: string;
  image: {
    title?: string;
    src?: string;
    rawFile: File
  };
}

export type Destination = BaseDestination & {
  id: number;
};

export interface BaseBooking {
  BookingID: number;
  UserID: number;
  PackageID: number;
  BookingDate: Date;
  Status: string;
  NumberOfPeople: number;
  UserEmail: string;
  UserFirstName: string;
  UserLastName: string;
}
export type Booking = BaseBooking & {
  id: number;
};
export interface ButtonProps {
  record?: any;
}

export interface FetchJsonResponse {
  status: number;
  headers: Headers;
  body: string;
  json: any;
}

export interface ImageSrcFieldProps extends FieldProps {
  source: string;
}