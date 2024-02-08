<template>
    <div>
        <Nav :searchSubReddit="searchSubReddit" @search="(e: any) => searchThread(e)" />
        <Threads :searchSubReddit="searchSubReddit" />
        <Footer />
    </div>
</template>
<script setup lang="ts">

const route = useRoute()
console.log(route.params) // usare route.params per salvare la posizione precedente (ricavare parametri)

const searchSubReddit = ref('Universitaly'); //as default we load universitaly


const searchThread = (value: string) => {
    console.log("index page valore", value)
    return searchSubReddit.value = value
}

</script>