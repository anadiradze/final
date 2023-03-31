export interface IUser {
  id: string;
  name: string;
  lastName: string;
  prefix: string;
  title: string;
  imageUrl: string;
  jobDescriptor: string;
  jobArea: string;
  jobType: string;
  email: string;
  ip: number;
  company: ICompany;
  address: IAddress;
}

export interface ICompany {
  name: string;
  suffix: string;
}
export interface IAddress {
  zipCode: string;
  city: string;
  streetAddress: string;
  country: string;
  state: string;
}
export interface IUsers {
  id: string;
  name: string;
  lastName: string;
  prefix: string;
  title: string;
  imageUrl: string;
}
export interface Ifriends {
  userId: string;
  id: string;
  name: string;
  lastName: string;
  prefix: string;
  title: string;
  imageUrl: string;
}
