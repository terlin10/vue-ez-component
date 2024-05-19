<script lang="ts" setup>
import { toRefs } from 'vue';
import InlineLoading from './InlineLoading.vue';

interface Props {
    visible?: boolean;
    light?: boolean;
    size?: string;
    color?: string;
    fill?: string;
}

const props = withDefaults(defineProps<Props>(), {
    visible: false,
    light: false
});

const emit = defineEmits<{
    click: []
}>();

const { size, color, fill } = toRefs(props);
</script>

<template>
    <Transition name="fade" appear>
        <div
            v-show="visible"
            :class="{ 'ez-white': light }"
            class="ez-mask ez-bg-#000/50 ez-flex ez-justify-center ez-items-center [&.ez-white]:ez-bg-#FFF/50"
            data-testid="loading-full-wrap"
            @click="emit('click')"
        >
            <slot>
                <InlineLoading v-bind="{ size, color, fill }" />
            </slot>
        </div>
    </Transition>
</template>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.ez-mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9998;
    display: flex;
    width: 100%;
    height: 100%;
    /* background-color: rgb(0 0 0 / 50%); */
    transition: opacity .3s ease;
}
</style>
