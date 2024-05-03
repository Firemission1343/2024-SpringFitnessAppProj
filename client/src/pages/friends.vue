<script setup lang="ts">
import { ref } from 'vue';
import FriendSearch from '@/components/FriendSearch.vue';
import FriendList from '@/components/FriendList.vue';

const showFriendList = ref(false);

function toggleView() {
    showFriendList.value = !showFriendList.value;
}

</script>

<template>
  <main class="section">
    <div class="container">
      <h1 class="title">Friends!</h1>
      <h2 class="subtitle">Find Friends or View Friends List</h2>
      <button class="button is-primary is-rounded" @click="toggleView">
        {{ showFriendList ? 'Search Friends' : 'View Friends' }}
      </button>
      <div class="columns is-multiline">
        <div class="column is-full-mobile is-half-tablet is-half-desktop">
          <FriendSearch v-if="!showFriendList" />
        </div>
        <div class="column is-full-mobile is-half-tablet is-half-desktop">
          <FriendList v-if="showFriendList" />
        </div>
      </div>
    </div>
  </main>
</template>