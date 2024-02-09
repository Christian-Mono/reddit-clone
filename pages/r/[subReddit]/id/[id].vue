<template>
    <Thread :subRedditName="props.searchSubReddit" :id="$route.params.id" />
</template>

<script setup lang="ts">

const props = defineProps<{ searchSubReddit: string }>() //as default we load universitaly

</script>