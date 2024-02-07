<template>
    <button class="flex items-center gap-1 p-2 font-semibold text-white bg-gray-400 group rounded-2xl hover:bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
            class="items-center h-5 gap-2 font-semibold text-white bg-gray-400 rounded-full fill-current group-hover:bg-gray-200 ">
            <g transform="scale(1.33333,1.33333)">
                <path fill="currentColor"
                    d="M5 3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-4.59l-3.7 3.71c-.18.18-.43.29-.71.29a1 1 0 0 1-1-1v-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m13 1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4v4l4-4h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
            </g>
        </svg>

        <p>{{ props.score }}</p>
    </button>
</template>
<script setup lang="ts">
const props = defineProps<{
    score: number | string
}>()
</script>