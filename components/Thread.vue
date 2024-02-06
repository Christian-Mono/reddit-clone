<template>
    {{ props.id }}

    <div>
        <div>
            <img src="../public/assets/img/redditAvatar.png" alt="subredditLogo" class="h-10 rounded-full">
            <h1> subreddit name</h1> <span> time elapsed</span>
            <p>NickName</p>
        </div>
        <div>
            <h2>Titolo post</h2>
            <button> tag argomento</button>
        </div>
        <div>
            <p>Pippone di post</p>
            <button>voto</button>
            <button>commento</button>
            <button>condividi</button>
        </div>
    </div>
</template>
<script setup lang="ts">

const props = defineProps<{
    id: string | string[]
}>()

const { data: posts } = await useFetch<any>(`https://www.reddit.com/r/Universitaly/${props.id}.json`)

</script>