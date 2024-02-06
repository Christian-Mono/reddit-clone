<template>
    <div class="mx-6 md:mx-[30%] my-6">
        <NuxtLink to="/">
            <div class="grid grid-cols-3 w-[50%]">
                <img src="../public/assets/img/redditAvatar.png" alt="subredditLogo" class="h-12 row-span-2 rounded-full">

                <h1 class="flex items-center col-span-2 gap-1 text-sm font-bold"> {{ subReddit }} <span
                        class="items-center justify-center text-xs font-thin ">
                        • {{
                            formatTime(created)
                        }}</span>
                </h1>

                <p class="flex items-center col-span-2 gap-1 text-sm font-semibold">{{ author }}</p>
            </div>
        </NuxtLink>
        <div>
            <h2 class="items-center justify-center text-2xl font-bold"> {{ title }}</h2>
            <button v-if="category" :style="{ backgroundColor: getFillColor(threadFlairColor) }"
                class="items-center justify-center p-1 my-2 text-sm rounded-xl">{{ category }}

            </button>
        </div>
        <div>
            <p>{{ postText }}</p>
            <div class="flex h-6 gap-2 my-2 font-semibold text-white">
                <VoteButtons :score="score" />
                <CommentsButton :score="numComments" />
                <ShareButton />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { getFillColor, formatTime } from '../utils/utils'
const props = defineProps<{
    id: string | string[]
}>()

const { data: thread } = await useFetch<any>(`https://www.reddit.com/r/Universitaly/${props.id}.json`)

const subReddit = ref('')
const title = ref('')
const author = ref('')
const tag = ref('')
const postText = ref('')
const score = ref(1)
const numComments = ref(0)
const category = ref('')
const threadFlairColor = ref('')
const created = ref(0)

watchEffect(() => {
    if (thread.value) {
        tag.value = thread.value[0].data.children[0].data.link_flair_text
        title.value = thread.value[0].data.children[0].data.title
        author.value = thread.value[0].data.children[0].data.author
        subReddit.value = thread.value[0].data.children[0].data.subreddit_name_prefixed
        postText.value = thread.value[0].data.children[0].data.selftext
        score.value = thread.value[0].data.children[0].data.score
        numComments.value = thread.value[0].data.children[0].data.num_comments
        category.value = thread.value[0].data.children[0].data.link_flair_text
        threadFlairColor.value = thread.value[0].data.children[0].data.link_flair_background_color
        created.value = thread.value[0].data.children[0].data.created
    }
})


</script>