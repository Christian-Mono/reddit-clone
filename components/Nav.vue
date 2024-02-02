<script setup lang="ts">
const isLoggedIn = true
</script>



<template>
    <nav class="navbar bg-slate-600">
        <div class="container grid  grid-cols-12 navbar__inner h-11 py-1.5 px-3 ">
            <!-- LOGO -->
            <nuxt-link class="flex col-span-2 gap-1 navbar__logo " to="/">
                <img src="../public/assets/img/LogoMono.jpg" class="h-8 rounded-3xl" alt="logo" />
                <p class="hidden my-auto text-xl font-bold text-white md:inline-flex">Moneddit</p>
            </nuxt-link>
            <!-- Input -->

        </div>
    </nav>
</template>