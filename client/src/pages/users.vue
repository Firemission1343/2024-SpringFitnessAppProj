<script setup lang="ts">
import { ref } from 'vue';
import { type User, getUsers } from "@/model/users"
// import { TheID } from '@/viewModel/user';
import { refSession, useDelete } from '@/viewModel/session';


const session = refSession();

const users = ref([] as User[])
getUsers()
    .then((data) => users.value = data.slice(0, 5))
    .catch((error) => console.error(error));
;
// const { delete: deleteUser } = useDelete();

//     function doDelete(userId: string) {
//         delete(userId);
//     }





</script>

<template>
    <div>
        <h1 class="title"> All Users </h1>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Email </th>
                        <th> Handle </th>
                        <th> Friends </th>
                        <th> Admin </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.handle }}</td>
                        <td>{{ user.friends }}</td>
                        <td>{{ user.isAdmin }}</td>

                        <td> 
                            <!-- <a v-for="user in users" class="button" @click="doDelete(user)">
                              {{ user.id }}
                           </a> -->
                            <!-- <button @click="edit(user)">Edit</button> -->
                            <!-- <button @click="doDelete(user.id)">Delete</button> -->
                        </td>

                    </tr>
                </tbody>
            </table>




        </div> 

    </div>
</template>

<style scoped>

</style>