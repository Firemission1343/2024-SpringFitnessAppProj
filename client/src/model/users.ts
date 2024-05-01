import { api } from "../viewModel/session";
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  thumbnail: string;
  image: string;
  handle: string;
  // UserWorkout: UserWorkout[];
  friends: number[];
  isAdmin: boolean;
}


export async function getUsers() {
  const data = await api<User[]>("users");
  return data ? data.data : [];
}