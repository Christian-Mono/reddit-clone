<script setup lang="ts">

const { data: posts } = await useFetch<RootObject>("https://www.reddit.com/r/Universitaly/hot.json")

const subredditNamePrefixed = posts.value?.data.children[0].data.subreddit_name_prefixed;

/* random user color */
const getFillColor = (color: string | null) => {
    // Se il colore è null, restituisci un colore predefinito
    if (color === null) {
        return '#ff33cc'; // Colore predefinito, puoi cambiarlo a tuo piacimento
    }
    // Altrimenti, restituisci il colore
    return color;
}

const formatTime = (timestamp: number) => {
    const now = new Date();
    const postDate = new Date(timestamp * 1000); // Converti il timestamp in millisecondi
    const secondsPast = Math.floor((now.getTime() - postDate.getTime()) / 1000);

    if (secondsPast < 60) {
        return `${secondsPast} seconds ago`;
    }
    if (secondsPast < 3600) {
        return `${Math.floor(secondsPast / 60)} minutes ago`;
    }
    if (secondsPast <= 86400) {
        return `${Math.floor(secondsPast / 3600)} hours ago`;
    }
    if (secondsPast > 86400) {
        let day = postDate.getDate();
        let monthMatch = postDate.toDateString().match(/ [a-zA-Z]*/);
        let month = monthMatch ? monthMatch[0].replace(" ", "") : "";
        let year = postDate.getFullYear() == now.getFullYear() ? "" : " " + postDate.getFullYear();
        return `${day} ${month}${year}`;
    }
}

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
    <div class="relative my-2 mx-6 md:ml-[29%] h-20 w-auto rounded-xl bg-gray-600"> </div>
    <div class="mx-6 md:mx-[30%] ">
        <!-- reddit header -->
        <div class="relative pt-6 mb-8 ">
            <img src="../public/assets/img/redditAvatar.png" alt="subreddit-logo"
                class="absolute bottom-0 h-20 transform border-2 border-solid rounded-full -translate-y-1/4">
            <div class="relative px-6 text-3xl font-bold -translate-y-1/2 left-16"> {{ subredditNamePrefixed }}
            </div>
        </div>
        <!-- post section -->
        <div v-for="post in posts?.data.children" class="my-2 ">
            <NuxtLink :to="'threads/' + post.data.id">
                <!-- avatar + author + timestamp -->
                <hr class="flex items-center justify-center border-y-grey-900">
                <div class="px-4 py-2 hover:bg-gray-100 rounded-xl">
                    <div class="flex w-full gap-2 align-baseline ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="h-8 fill-current rouded-full"
                            :style="{ fill: getFillColor(post.data.link_flair_background_color) }">
                            <path fill="#currentColor"
                                d="M2.938 18.734c-.078.365-.12.745-.12 1.125c0 4.594 5.87 8.333 13.083 8.333s13.083-3.74 13.083-8.333a5.32 5.32 0 0 0-.109-1.078l-.021-.042a.645.645 0 0 1-.036-.219c-.401-1.568-1.49-2.99-3.063-4.141a.728.728 0 0 1-.167-.089a.68.68 0 0 1-.089-.089c-2.391-1.646-5.807-2.677-9.594-2.677c-3.755 0-7.141 1.01-9.531 2.63a.34.34 0 0 1-.063.063a.435.435 0 0 1-.177.099c-1.604 1.151-2.719 2.583-3.135 4.167a.613.613 0 0 1-.052.229zm13.031 7.25c-2.391 0-4.073-.516-5.151-1.594a.604.604 0 0 1 0-.844a.63.63 0 0 1 .849 0c.839.839 2.245 1.26 4.302 1.26s3.453-.401 4.292-1.24c.219-.219.599-.219.839 0c.219.24.219.62 0 .859c-1.078 1.078-2.75 1.599-5.146 1.599zm-4.808-10.093c-1.219 0-2.234 1.021-2.234 2.234s1.016 2.198 2.234 2.198c1.219 0 2.203-.984 2.203-2.198s-.99-2.234-2.203-2.234m9.646 0c-1.219 0-2.24 1.021-2.24 2.234s1.021 2.198 2.24 2.198c1.219 0 2.198-.984 2.198-2.198s-.984-2.234-2.198-2.234m6.063-2.131c1.38 1.115 2.401 2.432 2.917 3.875a2.392 2.392 0 0 0 .958-1.932a2.42 2.42 0 0 0-3.875-1.938zm-23.255-.474a2.42 2.42 0 0 0-2.422 2.422c0 .724.318 1.396.859 1.854c.531-1.443 1.563-2.74 2.948-3.839a2.443 2.443 0 0 0-1.385-.438zm12.291 16.105c-7.875 0-14.281-4.276-14.281-9.526c0-.365.031-.724.089-1.078A3.623 3.623 0 0 1 0 15.704c0-1.995 1.635-3.62 3.635-3.62c.896 0 1.734.328 2.396.911c2.474-1.589 5.807-2.589 9.479-2.656l2.417-7.365l.542.125s.021 0 .021.005l5.63 1.323a2.997 2.997 0 0 1 2.75-1.813c1.641 0 2.979 1.339 2.979 2.979S28.51 8.572 26.87 8.572a2.98 2.98 0 0 1-2.969-2.974l-5.135-1.219l-1.958 5.969c3.536.141 6.729 1.141 9.125 2.698a3.548 3.548 0 0 1 2.443-.958c2 0 3.625 1.615 3.625 3.615c0 1.313-.719 2.51-1.839 3.151c.042.339.083.661.083 1c-.021 5.25-6.411 9.521-14.297 9.521zM26.807 3.807c-.984 0-1.786.797-1.786 1.781s.802 1.786 1.786 1.786c.979 0 1.776-.797 1.776-1.776s-.797-1.776-1.797-1.776z" />
                        </svg>

                        <p class="flex items-center justify-center gap-2 text-xs font-semibold">{{ post.data.author }}
                            <span class="font-normal"> • {{ formatTime(post.data.created_utc)
                            }}</span>
                        </p>
                    </div>
                    <!-- post title + text -->
                    <div>
                        <h1 class="flex text-sm font-bold leading-5 text-black ">{{ post.data.title }}</h1>
                        <p class="text-sm leading-5 line-clamp-3 xl:line-clamp-5">{{ post.data.selftext }}</p>
                    </div>
                    <!-- category tag -->
                    <button v-if="post.data.link_flair_text"
                        :style="{ backgroundColor: getFillColor(post.data.link_flair_background_color) }"
                        class="p-1 my-2 text-sm rounded-xl">{{
                            post.data.link_flair_text }}
                    </button>

                    <!-- footer :votes -->
                    <div class="flex h-6 gap-2 my-2 font-semibold text-white">
                        <VoteButtons :score="post.data.score" />
                        <!-- footer :comments -->
                        <CommentsButton :score="post.data.num_comments" />
                        <!-- footer :share -->
                        <ShareButton />
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>