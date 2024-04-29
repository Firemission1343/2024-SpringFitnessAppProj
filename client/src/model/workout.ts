import { api } from "../viewModel/session";

export interface Workout {
  id: number;
  name: string;
  sets: number;
  reps: number;
  weight: string;
  calories: number;  
}

// export function getWorkouts(): Workout[] {
//   return data.items;
// }
export async function getWorkouts() {
  const data = await api<Workout[]>("workouts");
  return data ? data.data : [];}