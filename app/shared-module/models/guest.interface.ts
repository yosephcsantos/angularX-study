export interface Child {
  name: string,
  age: number
}

export interface Guest {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkedOut: boolean,
  checkInDate: number | null,
  children: Child[] | null
}