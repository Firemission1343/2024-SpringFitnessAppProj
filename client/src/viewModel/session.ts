import type { DataEnvelope } from "@/model/transportTypes";
import type { User } from "@/model/users";
import type { Workout, UserWorkout } from "@/model/workouts";
import { reactive } from "vue";
import { useRouter } from "vue-router"; 
import * as myFetch from "@/model/myFetch";
import { useToast } from "vue-toastification";

const session = reactive({
    user: null as User | null,
    workout: null as Workout | null,
    userworkout: null as UserWorkout[] | null,

    isLoading: 0,
});


export function useDelete() {
    const router = useRouter();

    return {
        async delete(userId: string) {
            const x = await api<User>(`users/${userId}`, undefined, "DELETE");
            if(x){
                session.user = x.data;
                router.push("/admin");
            }
        }
    };

}

// export async function patchUser() {
//     const router = useRouter();

//     return {
//         async edit(userId: string, userData: Partial<User>) {
//             const x = await api<User>(`users/${userId}`, userData, "PATCH");
//             if(x){
//                 session.user = x.data;
//                 router.push("/admin");
//             }
//         }
//     };
// }

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