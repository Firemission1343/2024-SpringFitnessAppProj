<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, computed, reactive, inject } from 'vue';
import { type User, getUsers } from "@/model/users"
import { TheID } from '@/viewModel/user';



// const currentID = inject('currentID');

const currentID = inject('currentID');
// console.log(myVariable);

// const myVariable2 = ref(inject('myVariable', myVariable));

const users =ref([] as User[]);
users.value = getUsers();
// myVariable?.id = { id: 1 }

 


</script>

<template>
    <div>
        <h1 class="title"> All Users </h1>
        <div v-if="TheID === 1" >
            <!-- <h1> {{ users }} </h1> -->
            <table class="table">
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Email </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.email }}</td>
                        <td> 
                            <button>Edit</button>
                            <button>Delete</button> <!-- Will need to create way to post to json -->
                        </td>

                    </tr>
                </tbody>
            </table>


        </div>
      
        <h1> users.vue ID: {{ users }} </h1>
        <!-- <h1> {{ currentID }} </h1> -->


    </div>
</template>

<style scoped>

</style>