import type { DataEnvelope } from "@/model/transportTypes";
import type { User, NewUser } from "@/model/users";
import type { Workout, UserWorkout } from "@/model/workouts";
import { reactive } from "vue";
import { useRouter } from "vue-router"; 
import * as myFetch from "@/model/myFetch";
import { useToast } from "vue-toastification";

// REST API CALLS:

// POST User (create new user on Sign up) DONE
// DELETE User (Admin panel) DONE
// POST Workout (My Activity) DONE
// Delete Workout (My Activity) (Kinda works, Refreshing Issue
// POST Add a Friend into User (Friends) DONE

// DELETE Friend from user 




const session = reactive({
    user: null as User | null,
    workout: null as Workout | null,
    userworkout: null as UserWorkout[] | null,

    isLoading: 0,
});


export function useLogin() {
    const router = useRouter();

    return {
        async login(user: User) {
            const x = await api<User>("users/login", user);
            if(x){
                session.user = x.data;
                router.push("/");
            }
        },
        logout: () => {
            session.user = null;
            router.push("/login");
        },
    };

}




export function useAddUser() {
    const router = useRouter();

    return {
        async addUser(user: NewUser) {
            const data = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                thumbnail: user.thumbnail,
                image: user.image,
                handle: user.handle,
                friends: user.friends,
            };
            const x = await api<User>("users", data, "POST");
            if(x){
                session.user = x.data;
                router.push("/");
            }
        }
    };
}



export function useWorkout() {
    const router = useRouter();

    return {

        async doWorkout(userWorkout: UserWorkout) {
            const data = {
                name: userWorkout.name,
                sets: userWorkout.sets,
                reps: userWorkout.reps,
                weight: userWorkout.weight,
                calories: userWorkout.calories,
            };
            const x = await api<UserWorkout[]>(`workouts/${session.user?.id}`, data, "POST");

            if(x){
                session.userworkout = x.data;
                router.push("/myactivity");
            }
        },

    };

}



export function useDeleteWorkout() {
    const router = useRouter();

    return {
        async delete(id: number, workout_id: number) {
            const x = await api<UserWorkout[]>(`workouts/${id}/${workout_id}`, undefined, "DELETE");
            if(x){
                session.userworkout = x.data;
                router.push("/myactivity");
            }
        }
    };
}





export function useDelete() {
    const router = useRouter();

    return {
        async delete(userId: number) {
            
                const x = await api<User>(`users/${userId}`, undefined, "DELETE");
    
                if(x){
                    session.user = x.data;
                    router.push("/users");
                }                
        }
    };
}

export function useAddFriend() {
    const router = useRouter();

    return {
        async addFriend(userId: number, friendId: number) {
            
                const x = await api<User>(`users/${userId}`, { friends: [friendId] }, "PATCH");
                if(x){
                    session.user = x.data;
                    router.push("/friends");
                }
        
        }
    }
}

export function useRemoveFriend() {
    const router = useRouter();

    return {
        async removeFriend(userId: number, friendId: number) {
            // Fetch the current user's data
            const userResponse = await api<User>(`users/${userId}`);
            if (userResponse) {
                // Remove the friendId from the friends array
                const updatedFriends = userResponse.data.friends.filter(id => id !== friendId);

                // Send a PATCH request with the updated friends array
                const updateResponse = await api<User>(`users/${userId}`, { friends: updatedFriends }, "PATCH");
                if (updateResponse) {
                    session.user = updateResponse.data;
                    router.push("/friends");
                }
            }
        }
    }
}


export const refSession = () => session;

export function api<T>(action: string, data?: unknown, method?: string){
    session.isLoading++;
    return myFetch.api<T>(action, data, method)
    .then(x=> { 
        if(!x.isSuccess){
            showError(x);
        }
        return x;
    })
    .catch(showError)
    .finally(() => session.isLoading--);

}


const toast = useToast();
export function showError(error: any) {
    console.error(error);
    toast.error(error.message || error);
}