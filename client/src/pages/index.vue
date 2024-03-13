<script setup lang="ts">
import { ref } from "vue";
import { type User, getUsers } from "@/model/users";
import { TheID } from "@/viewModel/user";
import TheStats from "@/components/TheStats.vue";

const users = ref([] as User[]);
 
users.value = getUsers();

 

const visible = ref(true);

const hideMediaBox = () => {
  visible.value = false;
};
 
</script>


<template>
  <main class="">
    <h1 class="title">Your Home</h1>
    <div v-if="TheID === -1"> 
            <p>Please Login!</p>
    </div>
    <div class="container boxes d-flex">
      <div class="columns boxes">
          <!-- "Left: " -->
          
        </div>
        <!-- Middle:   -->
        <div class="column is-half">
          <div class="colunm "> 
            <div v-if="TheID === 1">
            <div class="" v-for="user in users" :key="user.id">
              <div v-if="user.id === TheID">
                <TheStats />
              </div>
            </div>
          </div>

          <div v-if="TheID === 2">
            <div class="" v-for="user in users" :key="user.id">
              <div v-if="user.id === TheID">
                <TheStats />
              </div>
            </div>
          </div>

          <div v-if="TheID === 3">
            <div class="" v-for="user in users" :key="user.id">
              <div v-if="user.id === TheID">
                <TheStats />
              </div>
            </div>
          </div>

        <!-- Right:  -->
        <div class="column is-one-quarter">
      
        </div>
        </div>
        </div>

      </div>
    

    
  </main>
</template>

<style scoped>

.half-screen {
  width: 50vw; 
}
.d-flex {
  display: flex;
}

.user {
  width: 100%; 
}

.flex-column {
  flex-direction: column;
}


</style>

