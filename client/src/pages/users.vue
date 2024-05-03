<script setup lang="ts">
import { ref } from 'vue';
import { type User, getUsers } from "@/model/users"
import { refSession, useDelete } from '@/viewModel/session';


const users = ref([] as User[])
getUsers()
    .then((data) => users.value = data)
    .catch((error) => console.error(error));
    

const { delete: deleteUser } = useDelete();

function doDelete(userId: number) {
        deleteUser(userId)
            .then(() => {
                users.value = users.value.filter(user => user.id !== userId);
            })
            .catch((error) => console.error(error));
    }


</script>
<template>
    <div class="container">
        <h1 class="title"> All Users </h1>
        <div class="table-container">
            <table class="table is-striped is-hoverable is-fullwidth">
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
                            <button class="button is-danger is-light" @click="doDelete(user.id)" v-if="!user.isAdmin">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>
</template>

<style scoped>

</style>