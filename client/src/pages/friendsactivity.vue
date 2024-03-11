<script setup lang="ts">
import { ref, computed, inject } from "vue";
import { type User, getUsers } from "@/model/users";
import NavBar from "@/components/NavBar.vue";

const users = ref([] as User[]);
// const myVariable = inject<User | null>('myVariable', null);
users.value = getUsers();

const currentID = inject("currentID");


let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
// console.log({ isActive: isActive.value });
}

const visible = ref(users.value.map(() => true)); //not working as intended

const hideMediaBox = (index: number) => {
  visible.value[index] = false;

};
// const myVariable = inject('myVariable.');
// myVariable.value = { id: 1 }
</script>

<template>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css"
    />  
    <main class="">
    <div class="">
      <div class="container">
        <h1 class="title">Friends Activity</h1>

        <button class="button is-info is-fullwidth" @click="toggleMenu" 
          :class="{ 'is-active': isActive } ">Add Workout</button>
          
          <form v-show="isActive" action="" >
  <div class="field">
    <label class="label">Exercise Name</label>
    <div class="control">
      <input class="input" type="text" placeholder="Exercise Name">
    </div>
  </div>

  <div class="field">
    <label class="label">Sets</label>
    <div class="control">
      <input class="input" type="number" placeholder="Sets">
    </div>
  </div>

  <div class="field">
    <label class="label">Reps</label>
    <div class="control">
      <input class="input" type="number" placeholder="Reps">
    </div>
  </div>

  <div class="field">
    <label class="label">Calories</label>
    <div class="control">
      <input class="input" type="number" placeholder="Calories">
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
  </div>
</form>

        <div v-if="currentID === -1">
          <h1 class="title">login</h1>
          <p>
            Please login to view your activity, using the login menu in the top
            right
          </p>
        </div>
        <div v-else-if="currentID === 1">
          <div v-for="user in users" :key="user.id">
            <!-- <h1> {{ users }} </h1> -->
            <div v-if="user.id !== 1">
              <!-- Jack -->
              <article class="media box" v-if="visible[user.id]">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img :src="user.thumbnail" alt="" />
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                  <p>
                    <strong>{{ user.firstName }}</strong> &nbsp;
                    <small>{{ user.handle }}</small> &nbsp;
                    <small>just now</small>
                    <br />
                  </p>

                  <div class="columns">
                    <div
                      class="column has-text-centered"
                      style="
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                      "
                    >
                      <div>
                        <div class="title" style="margin: 0px"> {{ user.workout.sets }} </div>
                        <div class="heading"> Sets
                        </div>
                      </div>
                      <div>
                        <div class="title" style="margin: 0px">{{ user.workout.reps }}</div>
                        <div class="heading">Reps</div>
                      </div>
                    </div>
                    <div class="column"></div>
                  </div>
                  {{ user.workout.name }} @ {{ user.workout.weight }} lbs
                </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-reply"></i>
                        </span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-retweet"></i>
                        </span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-heart"></i>
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
                <div class="media-right">
                  <button class="delete" @click="hideMediaBox(user.id)"></button>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div v-else-if="currentID === 2">
          <div v-for="user in users" :key="user.id">
            <!-- <h1> {{ users }} </h1> -->
            <div v-if="user.id !== 2">
              <!-- Jack -->
              <article class="media box" v-if="visible[user.id]">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img :src="user.thumbnail" alt="" />
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                  <p>
                    <strong>{{ user.firstName }}</strong> &nbsp;
                    <small>{{ user.handle }}</small> &nbsp;
                    <small>just now</small>
                    <br />
                  </p>

                  <div class="columns">
                    <div
                      class="column has-text-centered"
                      style="
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                      "
                    >
                      <div>
                        <div class="title" style="margin: 0px"> {{ user.workout.sets }} </div>
                        <div class="heading"> Sets
                        </div>
                      </div>
                      <div>
                        <div class="title" style="margin: 0px">{{ user.workout.reps }}</div>
                        <div class="heading">Reps</div>
                      </div>
                    </div>
                    <div class="column"></div>
                  </div>
                  {{ user.workout.name }} @ {{ user.workout.weight }} lbs
                </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-reply"></i>
                        </span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-retweet"></i>
                        </span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-heart"></i>
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
                <div class="media-right">
                  <button class="delete" @click="hideMediaBox(user.id)"></button>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div v-else-if="currentID === 3">
          <div v-for="user in users" :key="user.id">
            <!-- <h1> {{ users }} </h1> -->
            <div v-if="user.id !== 3">
              <!-- Jack -->
              <article class="media box" v-if="visible[user.id]">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img :src="user.thumbnail" alt="" />
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                  <p>
                    <strong>{{ user.firstName }}</strong> &nbsp;
                    <small>{{ user.handle }}</small> &nbsp;
                    <small>just now</small>
                    <br />
                  </p>

                  <div class="columns">
                    <div
                      class="column has-text-centered"
                      style="
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                      "
                    >
                      <div>
                        <div class="title" style="margin: 0px"> {{ user.workout.sets }} </div>
                        <div class="heading"> Sets
                        </div>
                      </div>
                      <div>
                        <div class="title" style="margin: 0px">{{ user.workout.reps }}</div>
                        <div class="heading">Reps</div>
                      </div>
                    </div>
                    <div class="column"></div>
                  </div>
                  {{ user.workout.name }} @ {{ user.workout.weight }} lbs
                </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-reply"></i>
                        </span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-retweet"></i>
                        </span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-heart"></i>
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
                <div class="media-right">
                  <button class="delete" @click="hideMediaBox(user.id)"></button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>

</style>
