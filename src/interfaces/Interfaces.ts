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

export interface Package {
    PackageID: number;
    PackageName: string;
    Description: string;
    Price: number;
    StartDate: Date;
    EndDate: Date;
    DestinationID: number;
}

export interface Destination {
    DestinationID: number;
    DestinationName: string;
    Country: String;
    Description: String;
}

export interface Booking {
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

export interface ButtonProps {
    record?: any;
}

export interface FetchJsonResponse {
    status: number;
    headers: Headers;
    body: string;
    json: any;
}