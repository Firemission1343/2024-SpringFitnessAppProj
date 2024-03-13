<script setup lang="ts">
import { ref} from "vue";
import { type User, getUsers } from "@/model/users";
import {TheID } from '@/viewModel/user';

const users = ref([] as User[]);
 users.value = getUsers();
 

const visible = ref(true);

const hideMediaBox = () => {
  visible.value = false;
};

</script>

<template>
  <div>
    <div v-for="user in users" :key="user.id">
           <div v-if="user.id !== TheID">
    <article class="media box" v-if="visible">
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
                <button class="delete" @click="hideMediaBox"></button>
              </div>
            </article>
          </div>
        </div>
      </div>

</template>

<style scoped>

</style>