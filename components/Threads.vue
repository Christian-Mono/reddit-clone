<script setup lang="ts">
const { data: posts } = await useFetch<RootObject>("https://www.reddit.com/r/Universitaly/hot.json")

const subredditNamePrefixed = posts.value?.data.children[0].data.subreddit_name_prefixed;
/* category tagging background */
const getCategoryClass = (category: string) => {
    switch (category) {
        case 'Ingegneria e Tecnologia':
            return 'bg-purple-300';
        case 'Discussione':
            return 'bg-pink-300';
        case 'Arte, Design, e Architettura':
            return 'bg-cyan-300';
        case 'Domanda Generica':
            return 'bg-yellow-300';
        case 'Consiglio':
            return 'bg-green-300';
        case 'Aiuto/Consiglio':
            return 'bg-brown-300';
        case 'Scienze Naturali':
            return 'bg-blue-300';
        default:
            return 'bg-red-300';
    }
};

interface Source {
    url: string;
    width: number;
    height: number;
}

interface Resolution {
    url: string;
    width: number;
    height: number;
}

interface Image {
    source: Source;
    resolutions: Resolution[];
    variants: Record<string, unknown>;
    id: string;
}

interface MediaEmbed {
    [key: string]: unknown;
}

interface SecureMediaEmbed {
    [key: string]: unknown;
}

interface Preview {
    images: Image[];
    enabled: boolean;
}

interface Gildings {
    [key: string]: unknown;
}

interface Data {
    approved_at_utc: null;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title: null;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: unknown[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: null;
    downs: number;
    thumbnail_height: number;
    top_awarded_type: null;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color: null;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: MediaEmbed;
    thumbnail_width: number;
    author_flair_template_id: null;
    is_original_content: boolean;
    user_reports: unknown[];
    secure_media: null;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category: null;
    secure_media_embed: SecureMediaEmbed;
    link_flair_text: null;
    can_mod_post: boolean;
    score: number;
    approved_by: null;
    is_created_from_ads_ui: boolean;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class: null;
    author_flair_richtext: unknown[];
    gildings: Gildings;
    post_hint: string;
    content_categories: null;
    is_self: boolean;
    mod_note: null;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category: null;
    banned_by: null;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html: null;
    likes: null;
    suggested_sort: null;
    banned_at_utc: null;
    url_overridden_by_dest: string;
    view_count: null;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: Preview;
    all_awardings: unknown[];
    awarders: unknown[];
    media_only: boolean;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: null;
    treatment_tags: unknown[];
    visited: boolean;
    removed_by: null;
    num_reports: null;
    distinguished: null;
    subreddit_id: string;
    author_is_blocked: boolean;
    mod_reason_by: null;
    removal_reason: null;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons: null;
    author: string;
    discussion_type: null;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: unknown[];
    author_patreon_flair: boolean;
    author_flair_text_color: null;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media: null;
    is_video: boolean;
}

interface Children {
    kind: string;
    data: Data;
}

interface RootObject {
    kind: string;
    data: {
        after: string;
        dist: number;
        modhash: string;
        geo_filter: null;
        children: Children[];
    };
}

const json: RootObject = {
    kind: "Listing",
    data: {
        after: "t3_1abc8av",
        dist: 25,
        modhash: "",
        geo_filter: null,
        children: [
            {
                kind: "t3",
                data: {
                    approved_at_utc: null,
                    subreddit: "Nuxt",
                    selftext: "",
                    author_fullname: "t2_7hzlvwmg",
                    saved: false,
                    mod_reason_title: null,
                    gilded: 0,
                    clicked: false,
                    title: "Nuxt 3 Deployment with Bun: A Docker-Based Approach",
                    link_flair_richtext: [],
                    subreddit_name_prefixed: "r/Nuxt",
                    hidden: false,
                    pwls: 6,
                    link_flair_css_class: null,
                    downs: 0,
                    thumbnail_height: 78,
                    top_awarded_type: null,
                    hide_score: true,
                    name: "t3_1agcmp0",
                    quarantine: false,
                    link_flair_text_color: "dark",
                    upvote_ratio: 1.0,
                    author_flair_background_color: null,
                    subreddit_type: "public",
                    ups: 2,
                    total_awards_received: 0,
                    media_embed: {},
                    thumbnail_width: 140,
                    author_flair_template_id: null,
                    is_original_content: false,
                    user_reports: [],
                    secure_media: null,
                    is_reddit_media_domain: false,
                    is_meta: false,
                    category: null,
                    secure_media_embed: {},
                    link_flair_text: null,
                    can_mod_post: false,
                    score: 2,
                    approved_by: null,
                    is_created_from_ads_ui: false,
                    author_premium: false,
                    thumbnail:
                        "https://b.thumbs.redditmedia.com/ZeTM5O0J66FtIZwXOWaW_1TZRjo7g5RbPHmH-5OeXrU.jpg",
                    edited: false,
                    author_flair_css_class: null,
                    author_flair_richtext: [],
                    gildings: {},
                    post_hint: "link",
                    content_categories: null,
                    is_self: false,
                    mod_note: null,
                    created: 1706798735.0,
                    link_flair_type: "text",
                    wls: 6,
                    removed_by_category: null,
                    banned_by: null,
                    author_flair_type: "text",
                    domain: "vamsimadduluri.com",
                    allow_live_comments: false,
                    selftext_html: null,
                    likes: null,
                    suggested_sort: null,
                    banned_at_utc: null,
                    url_overridden_by_dest:
                        "https://vamsimadduluri.com/optimizing-nuxt-3-deployment-with-bun-a-docker-based-approach/",
                    view_count: null,
                    archived: false,
                    no_follow: true,
                    is_crosspostable: false,
                    pinned: false,
                    over_18: false,
                    preview: {
                        images: [
                            {
                                source: {
                                    url:
                                        "https://external-preview.redd.it/AEhgK3m7DkuodOjCXqZ_RzY1En5zY5lHfYT5iQYEqYY.jpg?auto=webp&amp;s=f1d19dec08933687d864bb1c679deb8ae04ba404",
                                    width: 2000,
                                    height: 1125,
                                },
                                resolutions: [
                                    {
                                        url:
                                            "https://external-preview.redd.it/AEhgK3m7DkuodOjCXqZ_RzY1En5zY5lHfYT5iQYEqYY.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=2bcfe2d39b9dd27f6e875d92888f1207f86e1e49",
                                        width: 108,
                                        height: 60,
                                    },
                                    {
                                        url:
                                            "https://external-preview.redd.it/AEhgK3m7DkuodOjCXqZ_RzY1En5zY5lHfYT5iQYEqYY.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=e9d47aeb8f603b470def38455fb5b214439f8d4b",
                                        width: 216,
                                        height: 121,
                                    },
                                    {
                                        url:
                                            "https://external-preview.redd.it/AEhgK3m7DkuodOjCXqZ_RzY1En5zY5lHfYT5iQYEqYY.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=1bf07bc3bb4eb027da95b7f05bd99f4e000ff3f7",
                                        width: 320,
                                        height: 180,
                                    },
                                    {
                                        url:
                                            "https://external-preview.redd.it/AEhgK3m7DkuodOjCXqZ_RzY1En5zY5lHfYT5iQYEqYY.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=f93298af7afedd8d4ebd7e46fed3dea206389f60",
                                        width: 640,
                                        height: 360,
                                    },
                                    {
                                        url:
                                            "https://external-preview.redd.it/AEhgK3m7DkuodOjCXqZ_RzY1En5zY5lHfYT5iQYEqYY.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=7a3cad5a14d1cbeb108a4f1e14eac00d45b2e201",
                                        width: 960,
                                        height: 540,
                                    },
                                    {
                                        url:
                                            "https://external-preview.redd.it/AEhgK3m7DkuodOjCXqZ_RzY1En5zY5lHfYT5iQYEqYY.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=915f39658ce6608545857f0d7760b8ae63a83d42",
                                        width: 1080,
                                        height: 607,
                                    },
                                ],
                                variants: {},
                                id: "z6a7B38tsHz59yGK97NxgbCWttYSq8EP_bglL5BYDnw",
                            },
                        ],
                        enabled: false,
                    },
                    all_awardings: [],
                    awarders: [],
                    media_only: false,
                    can_gild: false,
                    spoiler: false,
                    locked: false,
                    author_flair_text: null,
                    treatment_tags: [],
                    visited: false,
                    removed_by: null,
                    num_reports: null,
                    distinguished: null,
                    subreddit_id: "t5_3k2ni",
                    author_is_blocked: false,
                    mod_reason_by: null,
                    removal_reason: null,
                    link_flair_background_color: "",
                    id: "1agcmp0",
                    is_robot_indexable: true,
                    report_reasons: null,
                    author: "AdministrativeDraw53",
                    discussion_type: null,
                    num_comments: 0,
                    send_replies: true,
                    whitelist_status: "all_ads",
                    contest_mode: false,
                    mod_reports: [],
                    author_patreon_flair: false,
                    author_flair_text_color: null,
                    permalink:
                        "/r/Nuxt/comments/1agcmp0/nuxt_3_deployment_with_bun_a_dockerbased_approach/",
                    parent_whitelist_status: "all_ads",
                    stickied: false,
                    url:
                        "https://vamsimadduluri.com/optimizing-nuxt-3-deployment-with-bun-a-docker-based-approach/",
                    subreddit_subscribers: 10626,
                    created_utc: 1706798735.0,
                    num_crossposts: 1,
                    media: null,
                    is_video: false,
                },
            },
        ],
    },
};

</script>

<template>
    <div class="mx-6 md:mx-[30%]">
        <!-- reddit header -->
        <div class="flex">
            <img src="../public/assets/img/redditAvatar.png" alt="subreddit-logo" class="h-16 rounded-full ">
            <div class="inline-block pt-6 text-3xl font-bold align-baseline"> {{ subredditNamePrefixed }}</div>
        </div>
        <!-- post section -->
        <div v-for="post in posts?.data.children" class="my-12">
            <!-- avatar + author -->
            <div class="flex gap-2 align-baseline ">
                <img src="/assets/img/redditAvatar.png" alt="avatar" class="h-8 rounded-full">
                <p class="text-end">{{ post.data.author }}</p>
                <!--  <span>{{post.data.}}</span> -->
            </div>
            <!-- post title + text -->
            <div>
                <h1 class="flex text-sm font-bold leading-5 text-black ">{{ post.data.title }}</h1>
                <p class="text-sm leading-5 line-clamp-3 xl:line-clamp-5">{{ post.data.selftext }}</p>
            </div>
            <!-- category tag -->
            <button v-if="post.data.link_flair_text" :class="getCategoryClass(post.data.link_flair_text)"
                class="p-1 my-2 text-sm rounded-xl">{{
                    post.data.link_flair_text }}
            </button>

            <!-- footer :votes -->
            <div class="flex gap-2 my-1 font-semibold text-white">
                <div class="flex items-center gap-1 p-1 bg-gray-400 rounded-2xl ">
                    <!-- upvote -->
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                            class="h-5 text-white bg-gray-400 rounded-full fill-current hover:text-red-500 hover:bg-gray-200">
                            <g transform="scale(0.125,0.125)">
                                <path fill=""
                                    d="m229.66 114.34l-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v80a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16v-80h40a8 8 0 0 0 5.66-13.66M176 112a8 8 0 0 0-8 8v88H88v-88a8 8 0 0 0-8-8H51.31L128 35.31L204.69 112Z" />
                            </g>
                        </svg>
                    </button>
                    <!-- total up/down score -->
                    <p class="text-center align-middle">{{ post.data.score }}</p>
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
                <!-- footer :comments -->
                <button
                    class="flex items-center gap-1 p-2 font-semibold text-white bg-gray-400 rounded-2xl hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                        class="items-center h-5 gap-2 font-semibold text-white bg-gray-400 rounded-full fill-current ">
                        <g transform="scale(1.33333,1.33333)">
                            <path fill="currentColor"
                                d="M5 3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-4.59l-3.7 3.71c-.18.18-.43.29-.71.29a1 1 0 0 1-1-1v-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m13 1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4v4l4-4h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
                        </g>
                    </svg>

                    <p>{{ post.data.num_comments }}</p>
                </button>
                <!-- footer :share -->
                <button class="flex gap-1 p-2 bg-gray-400 rounded-2xl hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                        class="h-5 gap-2 text-white bg-gray-400 rounded-full fill-current">
                        <g transform="scale(1.33333,1.33333)">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                d="m15 5l-3-3m0 0L9 5m3-3v12M6 9H4v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-2" />
                        </g>
                    </svg>

                    <p>Condividi</p>
                </button>
            </div>
        </div>
    </div>
</template>