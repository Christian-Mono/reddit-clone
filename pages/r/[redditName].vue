<template>
    <div>
        <Threads :searchSubReddit="searchSubReddit" />
    </div>
</template>
<script setup lang="ts">

const props = defineProps<{ searchSubReddit: string }>()
const searchSubReddit = ref('')
console.log("R/REDDITNAME PAGE")
watchEffect(() => {
    searchSubReddit.value = props.searchSubReddit
});

</script>