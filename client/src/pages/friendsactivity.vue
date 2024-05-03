<script setup lang="ts">

import FriendActivity from "@/components/FriendActivity.vue";



</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css"
  />  
  <main class="section">
    <div class="container">
      <h1 class="title">Friends Activity</h1>
      <div class="columns is-multiline">
        <div class="column is-full-mobile is-half-tablet is-half-desktop">
          <FriendActivity />
        </div>
      </div>
    </div>
  </main>
</template>

<style>

</style>
