<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';
import { type User, getUsers } from "@/model/users"

const users =ref([] as User[]);

users.value = getUsers();



// const currentName = ref([] as Username[]);
const currentID = ref([{ id: -1 }] as ID[]);
const myVariable = computed(() => {
  const idObj = currentID.value[0];
  if (idObj) {
    const user = users.value.find(user => user.id === idObj.id);
    return user ? user : { id: idObj.id, firstName: '' };
  }
  return null;
});


// const currentID = ref([{ id: -1 }] as ID[]);
// // const myVariable = computed(() =>  {currentID.value[0]?.id);

//   const myVariable = computed(() => {
//   const idObj = currentID.value[0];
//   if (idObj) {
//     return users.value.find(user => user.id === idObj.id);
    
//   }
//   return null;
// });


interface ID {
  id: number;
  user?: User;
}

const setID = (id: ID) => {
  currentID.value = [id];

  // const user = users.value.find(user => user.id === id.id);
  // if (user) {
  //   currentID.value = [{ id: user.id, user: user }];
  // }
};

users.value = getUsers();

// function setID() {

//     const id = currentID.value.find((id: ID) => id.user.id === id.id);
//     if (id) {
//         currentID.value = [id];
//         console.log(currentID.value);
//     }
    
  // const x = currentID.value.find((x) => x.users.id === currentID.value);
  // const item = cart.value.find((item) => item.product.id === product.id);
  // if (users) {
  //   currentID.value = users.value ;
  // }
  // const currentID = ref(users.value.id);
 
 
// }

function resetID() {

  const currentID = ref([] as ID[]);

  // currentID.value = [id];

}

 
 

 
let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
// console.log({ isActive: isActive.value });
}


</script>

<template>

  <nav class="navbar is-primary is-flex is-centered"  role="navigation" aria-label="main navigation">

    
    <div class="container is-full is-centered">

    <div class="navbar-brand is-centered">
      <a class="navbar-item is-centered" href="/">
        <!-- <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        /> -->
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


        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Admin </a>

          <div class="navbar-dropdown">
            <RouterLink to="/users" class="navbar-item"> Users </RouterLink>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">

            <a class="button is-primary">
              {{ myVariable?.id }}

            </a>


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
                            {{ user.firstName }}
                          <span v-if="user.id">{{ user.id }}</span>
                          </a>



                          <a v-if="user.id === 2" @click="setID({ id: 2, user: user })" class="navbar-item is-primary">
                            {{ user.firstName }}
                          <span v-if="user.id">{{ user.id }}</span>
                          </a>


                          
                          <a v-if="user.id === 3" @click="setID({ id: 3, user: user })" class="navbar-item is-primary">
                            {{ user.firstName }}
                          <span v-if="user.id">{{ user.id }}</span>
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

              <div class="navbar-dropdown">
                      <div class="user-list">
                        
                        <div v-for="user in users" :key="user.id">

                          <a v-if="user.id === 1" @click="setID({ id: 1, user: user })" class="navbar-item is-primary ">
                            {{ user.firstName }}
                          <span v-if="user.id">{{ user.id }}</span>
                          </a>



                          <a v-if="user.id === 2" @click="setID({ id: 2, user: user })" class="navbar-item is-primary">
                            {{ user.firstName }}
                          <span v-if="user.id">{{ user.id }}</span>
                          </a>


                          
                          <a v-if="user.id === 3" @click="setID({ id: 3, user: user })" class="navbar-item is-primary">
                            {{ user.firstName }}
                          <span v-if="user.id">{{ user.id }}</span>
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
        </div>
      </div>
    </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
    border-bottom: 2px solid #00d1b2;
}

</style>
