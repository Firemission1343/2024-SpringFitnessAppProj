import { api } from "../viewModel/session";



export interface Workout {
  id: number;
  handle: string;
  UserWorkout: UserWorkout[];
}

export interface UserWorkout {
  workout_id: number;
  name: string;
  sets: number;
  reps: number;
  weight: string;
  calories: number;  
}


// export interface WorkoutData {
//   items: UserWorkout[];
// }

export async function getWorkouts() {
  const data = await api<Workout>("workouts");
  return data ? data.data : [];
}