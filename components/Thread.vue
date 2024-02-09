<script setup lang="ts">
/* imports */
import { getFillColor, formatTime } from '../utils/utils'
const props = defineProps<{
    id: string | string[],
    subRedditName: string | string[]
}>()
/* API */
const { data: thread } = await useFetch<any>(`https://www.reddit.com/r/${props.subRedditName}/${props.id}.json`)
/* useRouter inizialized */
const router = useRouter()
/*  */
const goBack = () => {
    router.back()
}
/* variables */
const redditComments = computed(() => {
    return thread.value ? thread.value : "";
})
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
/* I made these to track the variation of different single thread */
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

<template>
    <div class="mx-6 md:mx-[30%] my-6">
        <div>
            <div class="flex gap-x-2">
                <button @click="goBack()"> <!-- //ex NuxtLink -->
                    <img src="/assets/img/redditAvatar.png" alt="subredditLogo" class="h-12 row-span-2 rounded-full">
                </button>
                <div class="flex flex-col gap-y-1">
                    <button @click="goBack()">
                        <h1 class="flex items-center col-span-2 gap-1 text-sm font-bold"> {{ subReddit }} <span
                                class="items-center justify-center text-xs font-thin ">
                                • {{
                                    formatTime(created)
                                }}</span>
                        </h1>
                    </button>
                    <p class="flex items-center col-span-2 gap-1 text-sm font-semibold">{{ author }}</p>
                </div>
            </div>

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
        <!-- comments section -->
        <div v-for="post in redditComments.slice(1)" :key="post.data.id">
            <div v-for="comment in post.data.children" :key="comment.data.id" class="flex my-6 gap-x-2">
                <div class="flex gap-2 ">
                    <img src="/assets/icons/CibReddit.svg" alt="subredditLogo" class="h-12 row-span-2 rounded-full" />
                    <div>
                        <h1 class="flex items-center col-span-2 gap-1 text-sm font-bold">
                            {{ comment.data.author }}
                            <span class="items-center justify-center text-xs font-thin ">
                                • {{ formatTime(comment.data.created) }}
                            </span>
                        </h1>
                        <p class="flex items-center col-span-2 gap-1 text-sm font-semibold">
                            {{ comment.data.body }}
                        </p>
                        <div class="flex h-6 gap-2 my-2 font-semibold text-white">
                            <VoteButtons :score="comment.data.score" class="text-sm" />
                            <CommentsButton score="Reply" class="text-sm" />
                            <ShareButton class="text-sm" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
