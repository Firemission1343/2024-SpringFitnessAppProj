import data from "../data/users.json";

export interface User {
    id: number
    firstName: string
    lastName: string
    email: string
    thumbnail: string
    handle: string
    
  }
  



  export function getUsers(): User[] {
    return data.items;
  }


  