import { api } from "../viewModel/session";
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  thumbnail: string;
  image: string;
  handle: string;
  // UserWorkout: UserWorkout[];
  friends: number[];
  isAdmin: boolean;
}

export type NewUser = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  handle: string;
  thumbnail?: string;
  image?: string;
  friends?: number[];
};

export async function getUsers() {
  const data = await api<User[]>("users");
  return data ? data.data : [];
}