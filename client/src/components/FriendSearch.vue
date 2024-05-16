<script setup lang="ts">
import { ref, computed } from "vue";
import { type User, getUsers} from "@/model/users";
import { refSession, useAddFriend } from '@/viewModel/session';

const session = refSession();
const users = ref([] as User[]);
const currentPage = ref(1);
const usersPerPage = 8;
const selected = ref(null);
const searchQuery = ref('');



const { addFriend } = useAddFriend();

function doAddFriend(userId: number, friendId: number) {
    if (userId) {
        addFriend(userId, friendId)
            .then(() => {

            })
            .catch((error) => console.error(error));
    } else {
        console.error('No user is logged in');
    }
}

 

getUsers()
  .then((data) => {
    users.value = data.filter(user => !session.user?.friends.includes(user.id) && user.id !== session.user?.id);
  })
  .catch((error) => console.error(error));

  const nonFriendUsers = computed(() => {
  const start = (currentPage.value - 1) * usersPerPage;
  const end = start + usersPerPage;
  return users.value
    .filter(
      (user) =>
        user.id !== session.user?.id && !session.user?.friends.includes(user.id)
    )
    .slice(start, end);
});

  const filteredUsers = computed(() => {
  if (!searchQuery.value) {
    return nonFriendUsers.value;
  }
  return nonFriendUsers.value.filter(user =>
    user.firstName.toLowerCase().startsWith(searchQuery.value.toLowerCase())
  );
});

const totalPages = computed(() => Math.ceil(users.value.length / usersPerPage));



</script>

<template>
  <div>
    <h1 class="title is-1 has-text-centered">Add A Friend!</h1>

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
    

    <div v-for="user in nonFriendUsers" :key="user.id" class="box">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img :src="user.thumbnail">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ user.firstName }} {{ user.lastName }}</strong> <small>@{{ user.handle }}</small>
              <br>
              {{ user.email }}
            </p>
          </div>
        </div>
        <button class="button is-primary is-rounded"  @click="session.user && doAddFriend(+session.user.id, +user.id)">Add as Friend</button>
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
  .o-autocomplete__dropdown {
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}

.o-autocomplete__dropdown-item {
  padding: 10px 20px;
  cursor: pointer;
}

.o-autocomplete__dropdown-item:hover {
  background-color: #f5f5f5;
}
.friend-search {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.friend-search__field {
    margin-bottom: 20px;
}

.friend-search__autocomplete {
    width: 100%;
}

.friend-search__selected {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
}

  </style>