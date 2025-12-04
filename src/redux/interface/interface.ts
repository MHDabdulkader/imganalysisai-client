import { IFetchData } from "./common";

export interface IUser{
    id: number,
    name: string,
    phone: string,
    email: string,
    password: string,
    address: string,
    
}


export type IUserFetch = IFetchData<IUser>;
