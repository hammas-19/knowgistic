<style scoped>
.switch {
    position: relative;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom right,
            #5F30E2 20%,
            #8F90A6 100%);
    box-shadow: 0 5px 8px #5f30e29c;
    border-radius: 5px;
}

.switch input {
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: pointer;
    position: absolute;
}

.switch div {
    width: 80%;
    height: 80%;
    margin: 10%;
    position: absolute;
}

.switch span {
    background: #93ff94;
    width: 100%;
    height: 2px;
    border-radius: 5px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.5s, width 0.5s;
}

.switch .line-1 {
    width: 50%;
    transform: translate(-100%, -10px);
    transform-origin: 0 0;
}

.switch .line-3 {
    width: 50%;
    left: auto;
    right: 0;
    transform: translate(0, 10px);
    transform-origin: 100% 0;
}

input:checked+div span.line-1 {
    transform: translate(0, 0) rotate(-45deg);
}

input:checked+div span.line-3 {
    transform: translate(-100%, 0) rotate(-45deg);
}

input:checked+div span.line-2 {
    transform: translate(-50%, -50%) rotate(45deg);
}
</style>
<template>
    <nav class="relative dark:bg-cyanBlue bg-selago px-6 lg:py-0 py-10">
        <div class="lg:flex lg:items-center lg:justify-between lg:container lg:mx-auto mx-0">
            <div class="flex items-center justify-between relative">
                <!-- Mobile menu -->
                <div class="flex lg:hidden">

                    <img v-show="!isOpenBurgerMenu" src="/Logo.svg" class="w-fit absolute left-0 -top-5" alt="">


                    <div @click="isOpenBurgerMenu = !isOpenBurgerMenu"
                        class="text-purplHeart dark:text-white focus:outline-none focus:text-gray-600 dark:focus:text-white  absolute right-0 -top-2 z-30">
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

                    <!-- burger menu icon button -->

                    <!-- <div class="switch" @click="isOpenBurgerMenu = !isOpenBurgerMenu">
                            <input type="checkbox">
                            <div>
                                <span class="line-1"></span>
                                <span class="line-2"></span>
                                <span class="line-3"></span>
                            </div>
                        </div> -->

                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div :class="isOpenBurgerMenu ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'"
                class="absolute inset-x-0 justify-center z-20 w-full grow px-6 py-4 transition-all duration-300 ease-in-out lg:mt-0 bg-selago lg:p-0 top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                <div class="flex flex-col lg:flex-row gap-6 items-center lg:justify-between justify-center w-full">
                    <img src="/Logo.svg" class="w-fit self-center md:self-auto py-1" alt="Logo">

                    <span class=" w-full flex md:flex-row flex-col  justify-center">
                        <NuxtLink v-for="(navLink, index) in NavbarLink" :to="navLink.href" :key="index"
                            @click="isOpenBurgerMenu = !isOpenBurgerMenu"
                            :active-class="'text-[#5F30E2] border-t-4  border-[#A0D4A1]'"
                            class="text-sm px-4 font-medium transition-colors duration-300 transform text-comet lg:mt-0 lg:py-5 py-0">
                            {{ navLink.name }}
                        </NuxtLink>
                    </span>

                    <div class="flex gap-5 md:self-auto self-end">
                        <NuxtLink to="/auth/login"
                            class="px-4 py-2 text-center font-medium text-sm rounded-md text-purplHeart border border-purplHeart cursor-pointer hover:bg-purplHeart hover:text-white transition-all">
                            Login</NuxtLink>
                        <NuxtLink to="/auth/Signup"
                            class="px-4 py-2 text-center font-medium text-sm rounded-md text-white bg-purplHeart">Signup
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
const isOpenBurgerMenu = ref(false);

const NavbarLink = [
    {
        name: "home",
        href: "/",
    },
    {
        name: "New-home",
        href: "/home",
    },
    {
        name: "courses",
        href: "/courses",
    },
    {
        name: "profile",
        href: "/profile/userProfile",
    },
    {
        name: "Contact Us",
        href: "/contactUs",
    },
    {
        name: "About Us",
        href: "/aboutUs",
    },
];

</script>

