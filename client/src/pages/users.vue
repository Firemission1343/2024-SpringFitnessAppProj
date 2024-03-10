<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, computed, reactive, inject } from 'vue';
import { type User, getUsers } from "@/model/users"



// const currentID = inject('currentID');

const currentID = inject('currentID');
// console.log(myVariable);

// const myVariable2 = ref(inject('myVariable', myVariable));

const users =ref([] as User[]);
users.value = getUsers();
// myVariable?.id = { id: 1 }

 
// if (myVariable) {
//   myVariable = { id: 1 };
// } else {
//   console.error('No provider found for myVariable');
// }

</script>

<template>
    <div>
        <h1 class="title"> All Users </h1>
        <div v-if="currentID === 1" >
            <h1> {{ users }} </h1>
        </div>
      
        <h1> users.vue ID: {{ currentID }} </h1>
        <!-- <h1> {{ currentID }} </h1> -->


    </div>
</template>

<style scoped>

</style>