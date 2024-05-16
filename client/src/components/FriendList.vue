<script setup lang="ts">
import { ref, computed } from "vue";
import { type User, getUsers } from "@/model/users";
import { refSession } from '@/viewModel/session';

const session = refSession();
const users = ref([] as User[]);
const currentPage = ref(1);
const usersPerPage = 5;
const selected = ref(null);
const searchQuery = ref('');

getUsers()
  .then((data) => {
    users.value = data.filter(user => session.user?.friends.includes(user.id));
  })
  .catch((error) => console.error(error));

const displayedFriends = computed(() => {
  const start = (currentPage.value - 1) * usersPerPage;
  const end = start + usersPerPage;
  return users.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(users.value.length / usersPerPage));

const filteredUsers = computed(() => {
  if (!searchQuery.value) {
    return displayedFriends.value;
  }
  return displayedFriends.value.filter(user =>
    user.firstName.toLowerCase().startsWith(searchQuery.value.toLowerCase())
  );
});

</script>

<template>
  <div>
    <h1 class="title is-1 has-text-centered">Friends List</h1>


    <section class="friend-search">
      <div class="field">
      <p class="control has-icons-left has-icons-right">
        <o-autocomplete
          class="input is-large"
          placeholder="e.g. Anne"
          :data="filteredUsers"
          field="firstName"
          v-model="searchQuery"
          check-scroll
          open-on-focus
          :debounce="500"
          @select="(option: any) => (selected = option)">
          <template #empty> No results found </template>
        </o-autocomplete>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    
    <p class="friend-search__selected"><b>Selected:</b> {{ selected }}</p>
</section>
    
    
    <div v-for="friend in displayedFriends" :key="friend.id" class="box">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img :src="friend.thumbnail">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ friend.firstName }} {{ friend.lastName }}</strong> <small>@{{ friend.handle }}</small>
              <br>
              {{ friend.email }}
            </p>
          </div>
        </div>
      </article>
    </div>
    <nav class="pagination" role="navigation" aria-label="pagination">
      <button class="pagination-previous" @click="currentPage--" :disabled="currentPage <= 1">Previous</button>
      <button class="pagination-next" @click="currentPage++" :disabled="currentPage >= totalPages">Next</button>
      <ul class="pagination-list">
        <li v-for="page in totalPages" :key="page">
          <button class="pagination-link" :class="{ 'is-current': page === currentPage }" @click="currentPage = page">{{ page }}</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
</style>