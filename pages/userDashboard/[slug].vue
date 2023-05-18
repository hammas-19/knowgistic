<style scoped>
.window::-webkit-scrollbar-track {
    background-color: #f0ecfd;

}

.window::-webkit-scrollbar {
    width: 4px;
    background-color: #F5F5F5;
}

.window::-webkit-scrollbar-thumb {
    background-color: #d5cfe9;
    background-image: -webkit-linear-gradient(90deg,
            #dbddef 0%,
            #e4daff 25%,
            transparent 100%)
}
</style>
<template>
    <div class="bg-selago">

        <!-- Header -->
        <section class="relative max-w-7xl mx-auto p-3">

            <span @click="showNav = !showNav" class="cursor-pointer block md:hidden absolute right-2 top-2 text-purplHeart">
                Show/Hide
            </span>

            <div class="flex md:flex-row flex-col justify-between gap-3 md:items-end items-center"
                :class="{ 'hidden': !showNav }">
                <NuxtLink to="/">
                    <img src="/Logo.svg" class="w-40" alt="Logo">
                </NuxtLink>

                <div class="flex flex-col md:flex-row gap-5 items-center text-sm">
                    <a href="overview">overview</a>
                    <a href="report">report</a>
                    <a href="updates">updates</a>
                    <a href="events">events</a>
                </div>

                <UserAvatar class="h-10 w-10" />
            </div>

        </section>

        <section class="relative max-w-7xl mx-auto py-10 px-3 h-screen">
            <span @click="show = !show" class="text-sm border absolute left-1 top-3 cursor-pointer">Menu</span>

            <div class="flex gap-2  md:rounded-3xl rounded-md overflow-hidden bg-white ">

                <!-- Side Navigation -->
                <div v-if="show" class="bg-whiteLilac w-full max-w-xs max-h-[calc(100vh-160px)] overflow-y-scroll window "
                    :class="{ 'hidden md:block': !show }">

                    <div class="flex flex-col gap-5 py-10 px-3 ">

                        <UserAvatar class="self-center h-40 w-40 bg-whiteLilac" />
                        <UserProfileBadge v-for="items in 2" />
                    </div>

                </div>

                <!-- content -->
                <div class="flex flex-wrap gap-10  max-h-[calc(100vh-160px)] overflow-y-scroll window py-3 w-full">

                    <!-- Quick OverView -->
                    <div class="p-2 w-full ">

                        <h1 class="text-4xl mx-2 text-comet pb-5 font-bold underline">Quick OverView</h1>
                        <div class="grid grid-cols-3 p-2 gap-5 items-center bg-selago rounded-xl">

                            <div class="">
                                <UserStats />
                            </div>

                            <!-- calender -->
                            <div
                                class="flex flex-col md:gap-4 gap-[2px] justify-between items-center rounded-xl p-2 bg-whiteLilac max-h-60">

                                <div class="flex justify-between w-full items-center">
                                    <h1 class="text-comet text-sm font-medium">Presence</h1>
                                    <span class="text-xs">View all</span>
                                </div>

                                <div class="grid grid-cols-10 w-full">
                                    <span v-for="items in 30" :class="{ 'text-purplHeart': items % 0.75 }"
                                        class="flex flex-col items-center text-xs hover:shadow-md rounded-md transition-all">
                                        <span>
                                            {{ items }}
                                        </span>
                                        <img src="/images/index_v2/icons/medal.svg" class="md:w-10 w-8 md:h-10 h-8" alt="">
                                    </span>
                                </div>

                            </div>
                            <div class="p-2 shadow-inner rounded-2xl bg-whiteLilac h-fit ">
                                <UserProgressBar class="w-full mx-auto"/>
                            </div>

                        </div>

                    </div>
                    <div class="flex gap-3 flex-wrap w-full justify-between">
                        <CourseCard v-for="items in 8" />
                    </div>

                </div>

            </div>

        </section>

    </div>
</template>
<script setup>
definePageMeta({
    layout: "",
});
const show = ref(true)
const showNav = ref(true)
</script>
