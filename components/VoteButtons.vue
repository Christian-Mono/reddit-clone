<template>
    <div class="flex items-center gap-1 p-1 bg-gray-400 rounded-2xl ">
        <!-- upvote -->
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                class="h-5 text-white bg-gray-400 rounded-full fill-current hover:text-red-500 hover:bg-gray-200">
                <g transform="scale(0.125,0.125)">
                    <path fill="#currentColor"
                        d="m229.66 114.34l-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v80a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16v-80h40a8 8 0 0 0 5.66-13.66M176 112a8 8 0 0 0-8 8v88H88v-88a8 8 0 0 0-8-8H51.31L128 35.31L204.69 112Z" />
                </g>
            </svg>
        </button>
        <!-- total up/down score -->
        <p class="text-center align-middle">{{ props.score }}</p>
        <!-- downvote -->
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                class="items-center h-5 text-white bg-gray-400 rounded-full fill-current hover:text-blue-500 hover:bg-gray-200">
                <g transform="scale(0.125,0.125)">
                    <path fill=""
                        d="M231.39 132.94A8 8 0 0 0 224 128h-40V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v80H32a8 8 0 0 0-5.66 13.66l96 96a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 1.73-8.72M128 220.69L51.31 144H80a8 8 0 0 0 8-8V48h80v88a8 8 0 0 0 8 8h28.69Z" />
                </g>
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    score: number
}>()
</script>