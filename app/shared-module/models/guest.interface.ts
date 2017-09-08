import { Product } from './product.interface';
export interface Child {
  name: string,
  age: number
}

export interface Guest {
  id: number,
  fullname: string,
  creditCard: string,
  checkedIn: boolean,
  checkedOut: boolean,
  checkInDate: number | null,
  children: Child[] | null,
  products: Product[] | null | undefined
}

export enum FilterType {
  checkedIn = 0,
  checkedOut = 1
}