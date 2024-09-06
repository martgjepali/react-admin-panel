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
  Duration: number; // Duration is a number
  StartDate: Date;
  EndDate: Date;
  DestinationID: number;
  Country: string;
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
    title?: string | null;
    src?: string | null;
    rawFile: File | null;
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

export interface BasePayment {
  PaymentID: number;
  BookingID: number;
  PaymentDate: Date;
  Amount: number;
  PaymentMethod: string;
  Status: string;
  SessionID: string;
  PaymentIntentID: string;
}

export type Payment = BasePayment & {
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
