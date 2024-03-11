<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import { ref, provide, computed, watch } from 'vue';
import { type User, getUsers } from "@/model/users"

const users =ref([] as User[]);
users.value = getUsers();


interface ID {
  id: number;
  user?: User;
}

const currentID = ref([{ id: -1 }] as ID[]);
const myVariable = computed(() => {
  const idObj = currentID.value[0];

  if (idObj) {
    const user = users.value.find(user => user.id === idObj.id);
    return user ? user : { id: idObj.id, firstName: '' };
    
  }
  // provide('myVariable', myVariable.value);

  return null;

});

const setID = (id: ID) => {
  currentID.value = [id];
  x.value = id.id; //magic

};
const x = ref(myVariable.value?.id);

provide('currentID', x); //magic, DO NOT TOUCH  



let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
// console.log({ isActive: isActive.value });
}
// provide('myVariable', myVariable);



// import { createApp } from 'vue'
// const app = createApp({})

// // const users = ref([] as User[]);
// // users.value = getUsers();

// // const currentID = ref([{ id: -1 }] as ID[]);
// const myFunction = ref(() => {
//   const idObj = currentID.value[0];
//   if (idObj) {
//     const user = users.value.find(user => user.id === idObj.id);
//     return user ? user : { id: idObj.id, firstName: '' };
//   }
//   return null;
// });

// provide('currentID', currentID);
// // provide('myVariable', myVariable);

// app.provide('currentID', ref({ id: -1 }));
// app.provide('myFunction', myFunction);
 


    // watch(() => myVariable.value?.id, (newVal, oldVal) => {
    //   provide('myVariableId', newVal);
    //   console.log('ID changed from', oldVal, 'to', newVal);
    //   return { myVariable };

    // });

        // provide('myVariableId', myVariable.value?.id,);
// const myVariableId = ref(myVariable.value?.id);
</script>


<template>
      <nav class="navbar is-primary is-flex is-centered"  role="navigation" aria-label="main navigation">

    
<div class="container is-full is-centered">

<div class="navbar-brand is-centered">
  <a class="navbar-item is-centered" href="/">
    <img
    src="@/assets/DevnessLogoFINAL.png"      
      width="90"
      height="80"
    />
  </a>

  <RouterLink to="/myactivity" class="navbar-item">  My Activity </RouterLink>

  <RouterLink to="/statistics" class="navbar-item"> Statistics </RouterLink>

  <RouterLink to="/friendsactivity" class="navbar-item">  Friends Activity </RouterLink>

</div>

<a
    role="button" 
    @click="toggleMenu" 
    :class="{ 'is-active': isActive } "
    class="navbar-burger"
    aria-label="menu"
    aria-expanded="false"
    data-target="navbarBasicExample">

    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>

<div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive } ">
  <div class="navbar-start">

    <RouterLink to="/peoplesearch" class="navbar-item">  People Search </RouterLink>


    <div v-if="myVariable?.id === 1" class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link"> Admin </a>

      <div class="navbar-dropdown">
        <RouterLink to="/users" class="navbar-item"> Users </RouterLink>
      </div>
    </div>
  </div>

  <div class="navbar-end">
    <div class="navbar-item">
      <div class="buttons">

        <!-- <a class="button is-primary">
          {{ myVariable?.id }}

        </a> -->


        <a v-if="myVariable?.id === 0"  @click="setID({ id: 0 })" class="button is-primary">
        <strong>Sign up</strong>
        </a>

        
        <div class="navbar-item is-primary">

          <a v-if="myVariable && myVariable?.id !== -1" class="navbar-item is-primary">
                {{ myVariable?.firstName }}
          </a>

    <div class="navbar-item has-dropdown is-hoverable">
          <a v-if="myVariable?.id === -1" @click="setID({ id: -1 })" class="button is-primary">
          <strong>Sign in</strong>
          </a>


          <a v-else-if="myVariable?.id !== -1" @click="setID({ id: -1 })" class="button is-primary">
           <strong>Log out</strong>
          </a>

          <div class="navbar-dropdown">
                  <div class="user-list">
                    
                    <div v-for="user in users" :key="user.id">

                      <a v-if="user.id === 1" @click="setID({ id: 1, user: user })" class="navbar-item is-primary ">
                      Admin: {{ user.firstName }} 
                      <span v-if="user.id">, ID: {{ user.id }}</span>
                      </a>



                      <a v-if="user.id === 2" @click="setID({ id: 2, user: user }) " class="navbar-item is-primary">
                      User: {{ user.firstName }}
                      <span v-if="user.id">, ID: {{ user.id }}</span>
                      </a>


                      
                      <a v-if="user.id === 3" @click="setID({ id: 3, user: user })" class="navbar-item is-primary">
                      User: {{ user.firstName }}
                      <span v-if="user.id">, ID: {{ user.id }}</span>
                      </a>


                       <!-- <a @click="" class="navbar-item">
                      Jill
                      <span v-if="user.id">{{ user.id }}</span>

                      </a>

                      <a @click="" class="navbar-item">
                      March
                      <span v-if="user.id">{{ user.id }}</span>

                      </a>  -->

                      <!-- <a @click="setID" class="navbar-item">
                      {{ user.firstName }}
                      <span v-if="user.id">{{ user.id }}</span>

                      </a>  -->
                    </div>
                  </div>
                </div>

    </div>
          
                <!-- <a v-if="myVariable?.id === 0" @click="setID({ id: 1})" class="button is-primary">
                  <strong>Sign in</strong>
                  {{ myVariable?.id }}
                </a>

                <a  v-if="myVariable?.id !== 0" @click="setID({ id: 0 })"  class="button is-primary">
                  <strong>Log out</strong>
                </a> -->
                
                <!-- <a  v-if="myVariable?.id !== 0" @click="setID({ id: 0 })"  class="button is-primary">
                  <strong>Log out</strong>
                </a> -->
                

          </div>

          
      </div>
    </div>
  </div>
</div>
</div>
</nav>
  <div class="container">
    <RouterView />

        <!-- <h1> {{ users }} </h1> -->
        <h1> App.vue ID: {{ myVariable?.id }} </h1>
        <!-- <h1> {{ currentID }} </h1> -->

  </div>

</template>
<style scoped>
</style>