<script setup lang="ts">
import LoginBadge from '@/components/LoginBadge.vue';
import { refSession } from '@/viewModel/session';

const session = refSession();
</script>


<template>
    <div class="hero" v-if="!session.user">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Login to Start!</h1>
                <LoginBadge />
            </div>
        </div>
    </div>
</template>