<script setup lang="ts">
import { ref, computed } from "vue";
import { type User, getUsers} from "@/model/users";
import { refSession } from '@/viewModel/session';

const session = refSession();
const users = ref([] as User[]);
// const nonFriendUsers = ref([] as User[]);
const currentPage = ref(1);
const usersPerPage = 5;


// const addFriend = async (friendId: number) => {
//   if (session.user) {
//     session.user.friends.push(friendId);
//     await updateUser(session.user);
//   }
// };

 
getUsers()
  .then((data) => {
    users.value = data;
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

const totalPages = computed(() => Math.ceil(users.value.length / usersPerPage));

// const {addFriend} = usePatch();

// function doAddFriend(user: User) {
//   addFriend(user.id);
// }

</script>

<template>
  <div>
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
        <button @click="">Add as Friend</button>

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