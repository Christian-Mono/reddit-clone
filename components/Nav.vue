<script setup lang="ts">

const search = defineModel('')

</script>



<template>
    <nav class="flex justify-between navbar bg-slate-600">
        <!-- LOGO -->
        <div class="flex items-center h-14 w-1/4 py-1.5 px-3 gap-x-2 ">
            <NuxtLink class="flex gap-2" to="/">
                <img src="/assets/img/LogoMono.jpg" class="h-8 rounded-3xl" alt="logo" />
                <p class="hidden my-auto text-xl font-bold text-white md:flex">Moneddit</p>
            </NuxtLink>
        </div>
        <!-- SEARCHBAR -->
        <div
            class="flex items-center group w-[40%] h-12 gap-4 px-2 mx-auto my-1.5 hover:bg-gray-200 ml-14 font-semibold bg-gray-400 rounded-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"
                class="fill-current text-slate-200 group-hover:text-slate-600 hover:bg-gray-200">
                <path fill="#currentColor"
                    d="M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208c0-220.912-179.088-400-400-400s-400 179.088-400 400s179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0c12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527" />
            </svg>
            <!-- pass the emit to parent compont (index) -->
            <input v-model="search" @keyup.enter="$emit('search', search)"
                class="w-full h-6 font-bold bg-gray-400 border border-gray-400 group-hover:border-gray-200 focus:outline-none text-slate-200 placeholder:text-slate-200 group-hover:text-black group-hover:bg-gray-200"
                placeholder="Search on Reddit" />

        </div>
        <!-- BUTTONS  -->
        <div class=" flex w-[25%] group gap-x-4 my-1.5">
            <!-- BUTTON: download -->
            <button
                class="flex items-center gap-1 p-2 text-sm font-semibold text-white bg-gray-400 group-hover:text-black group rounded-3xl hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                    class="h-6 fill-current text-slate-200 group-hover:text-slate-600 hover:bg-gray-200">
                    <path fill="currentColor"
                        d="M20.755 1H10.62c-1.136 0-2.058.92-2.058 2.058v24.385c0 1.136.92 2.058 2.058 2.058h10.135c1.136 0 2.058-.92 2.058-2.057V3.058A2.058 2.058 0 0 0 20.755 1M14.66 3.264h2.056c.1 0 .183.08.183.18c0 .1-.083.18-.184.18H14.66c-.1 0-.182-.08-.182-.18c0-.1.08-.18.18-.18zm-1.435-.206a.36.36 0 1 1 0 .72a.36.36 0 0 1 0-.72m2.463 25.415a1.44 1.44 0 1 1 0-2.88a1.44 1.44 0 0 1 0 2.88m6.353-4.118a.31.31 0 0 1-.308.31H9.642a.31.31 0 0 1-.308-.31V6.042c0-.17.138-.31.308-.31h12.09c.17 0 .31.14.31.31z" />
                </svg>
                Download
                App</button>
            <!-- BUTTON: login -->
            <button
                class="flex items-center justify-center w-20 gap-1 p-2 text-sm font-semibold text-white bg-black group rounded-3xl hover:bg-gray-200 hover:text-slate-600">Login</button>
            <!-- BUTTON: more option -->
            <button
                class="flex items-center gap-1 px-4 text-sm font-semibold text-white rounded-full hover:bg-gray-400 bg-slate-600 group">•••</button>
        </div>
    </nav>
</template>