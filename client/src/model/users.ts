// import data from "../data/users.json";
import { api } from "../viewModel/session";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  thumbnail: string;
  image: string;
  handle: string;
  workout: Workout;
  friends: number[];
  isAdmin: boolean;
}

export interface Workout {
  id: number;
  name: string;
  sets: number;
  reps: number;
  weight: string;
  calories: number;  
}

// export function getUsers(): User[] {
//   return data.items;
// }
export async function getUsers() {
  const data = await api<User[]>("users");
  return data ? data.data : [];
}