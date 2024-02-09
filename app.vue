<template>
  <div>
    <Nav :searchSubReddit="searchSubReddit" @search="searchThread" />
    <NuxtPage :searchSubReddit="searchSubReddit" /> <!-- passare props usando nuxtPage -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const searchSubReddit = ref('popular'); //as default we load popular posts
/* const props = defineProps<{ searchSubReddit: string }>() */

const searchThread = (value: string) => {
  navigateTo('/r/' + value)
  return searchSubReddit.value = value
}

</script>