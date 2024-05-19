<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <header class="ez-mb-6">
        <div>
            <h1 class="ez-text-xl ez-text-center ez-font-bold">
                Hello World!
            </h1>
            <nav class="ez-flex">
                <RouterLink to="/" class="ez-underline ez-ez-px-4">
                    Home
                </RouterLink>
                <RouterLink to="/loading" class="ez-underline ez-px-4">
                    loading
                </RouterLink>
            </nav>
        </div>
    </header>
    <RouterView />
</template>
