import data from "../data/users.json";

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  thumbnail: string
  handle: string
  workout: Workout
}

export interface Workout {
  id: number
  name: string
  sets: number
  reps: number
  weight: string
  calories: number  
}

export function getUsers(): User[] {
  return data.items;
}
  


  // export function getUsers(): User[] {
  //   return data.items;
  //  }

//  export function getWorkouts(): Workout[] {
//     return data.items;
//    }
  