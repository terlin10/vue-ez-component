<script lang="ts" setup>
import { ref } from 'vue';
import FullLoading from '@/components/loading/FullLoading.vue';
import InlineLoading from '@/components/loading/InlineLoading.vue';

const modalVisible = ref(false);
</script>

<template>
    <div class="wrap">
        <div
            class="ez-cursor-pointer"
            @click="modalVisible = true"
        >
            click me
        </div>
        <FullLoading :visible="modalVisible" @click="modalVisible = false" />
        <InlineLoading />
    </div>
</template>
