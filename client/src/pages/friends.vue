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
  <main class="">
    <div class="">
      <div class="container">
        <h1 class="title">Friends!</h1>
        <h2 class="subtitle">Find or Remove Friends</h2>
        <button class="button is-primary is-rounded" @click="toggleView">
          {{ showFriendList ? 'Search Friends' : 'View Friends' }}
        </button>
        <FriendSearch v-if="!showFriendList" />
        <FriendList v-if="showFriendList" />
      </div>
    </div>
  </main>
</template>
