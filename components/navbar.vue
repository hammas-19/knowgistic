<template>
    <div class="container mx-auto h-20 w-20 ">
        <img src="/images/index/logo.png" class="shadow-" alt="">
    </div>
    <nav class="relative dark:bg-cyanBlue bg-harp px-6 py-2">
        <div class="lg:flex lg:items-center lg:justify-between lg:container lg:mx-auto mx-0">
            <div class="flex items-center justify-between">
                <!-- Mobile menu buttdark:text-skyBLueon -->
                <div class="flex lg:hidden">

                    <!-- burger menu icon button -->
                    <div @click="isOpenBurgerMenu = !isOpenBurgerMenu"
                        class="text-starDust dark:text-white focus:outline-none focus:text-gray-600 dark:focus:text-white">
                        <svg v-show="!isOpenBurgerMenu" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>

                        <svg v-show="isOpenBurgerMenu" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-dark:text-skyBLuelinecap="round" stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div :class="isOpenBurgerMenu ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'"
                class="absolute inset-x-0 justify-center z-20 w-full grow px-6 py-4 transition-all duration-300 ease-in-out lg:mt-0 lg:bg-transparent lg:dark:bg-transparent bg-harp dark:bg-cyanBlue lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                <div class="flex flex-col lg:gap-6 gap-2 lg:flex-row lg:items-center lg:mx-8 justify-evenly">
                    <NuxtLink v-for="(navLink, index) in NavbarLink" :to="navLink.href" :key="index"
                        @click="isOpenBurgerMenu = !isOpenBurgerMenu"
                        class="py-3 text-sm font-medium w-fit whitespace-nowrap text-starDust dark:text-osloGrey  hover:text-bluish dark:hover:text-skyBLue transition-colors duration-300 transform lg:mt-0">
                        {{ navLink.name }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
const isOpenBurgerMenu = ref(false);

const NavbarLink = [
    {
        name: "Let",
        href: "/tracks",
    },
    {
        name: "Us",
        href: "/courses",
    },
    {
        name: "Begin",
        href: "/labs",
    },
];

</script>

