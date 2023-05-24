<style scoped>
* {
    scroll-behavior: smooth;
}

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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
<template>
    <div class="bg-selago">

        <!-- Header -->
        <section class="relative max-w-7xl mx-auto p-3">

            <span @click="showNav = !showNav" class="cursor-pointer block md:hidden absolute right-2 top-2 text-purplHeart z-30">
                Show/Hide
            </span>

            <div v-if="showNav" class="flex md:flex-row flex-col justify-between gap-3 md:items-end items-center relative">
                <NuxtLink to="/">
                    <img src="/Logo.svg" class="w-40" alt="Logo">
                </NuxtLink>

                <div class="flex flex-col md:flex-row gap-5 items-center text-sm">
                    <a href="#overview">overview</a>
                    <a href="#report">report</a>
                    <a href="#updates">updates</a>
                    <a href="events">events</a>
                </div>

                <div class="flex gap-4">

                    <UserNotification class="" />
                    <UserAvatar class="h-10 w-10" />
                </div>
            </div>

        </section>

        <section class="relative max-w-7xl mx-auto py-10 px-3">
            <span @click="show = !show" class="text-sm border absolute left-1 top-3 cursor-pointer">Menu</span>

            <div class="relative flex gap-2  md:rounded-3xl rounded-md overflow-hidden bg-white ">

                <!-- Side Navigation -->
                <Transition name="fade">
                    <div v-if="show"
                        class="bg-whiteLilac w-full max-w-xs  h-full overflow-y-scroll window flex flex-col"
                        :class="[{ 'absolute z-20': show }, { 'hidden md:block': !show }]">


                        <div class="flex flex-col gap-5 py-10 px-3  bg-contain bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSQCmb-mshqNXT_1kGtaSdoVMkgzLEgIA5yETZQc1I_wh6-KT5fS3NNsERfgtPPtnMT_nLTk0q2_mVjN84gIUE6OzmnTW-F08e78AzT_-tdxl7C52HfDO5xPtmsmtZ-0pSS4D36QumOBI3-aMNsGPi85uMDn6YRxKNFoc8OFAags7ihZlskFuuYC62/s320/profileBg.jpg')]">

                            <UserAvatar class="self-center h-40 w-40 bg-whiteLilac" />
                        </div>
                        <!-- <UserProfileBadge v-for="items in 2" /> --> 

                    </div>
                </Transition>

                <!-- content -->
                <div class="flex flex-wrap gap-10  md:max-h-[calc(100vh-160px)] max-h-[calc(100vh-80px)] overflow-y-scroll window py-3 w-full"
                    :class="{ 'opacity-40 transition-all duration-500': show }">

                    <!-- Quick OverView -->
                    <div id="overview" class="p-2 w-full transition-all duration-500">

                        <h1 class="md:text-4xl text-2xl mx-2 text-comet pb-5 font-bold ">Quick OverView</h1>
                        <div class="grid md:grid-cols-3 grid-cols-1 p-2 gap-5 items-center bg-selago rounded-xl">

                            <div>
                                <UserStats />
                            </div>

                            <!-- calender -->
                            <div>
                                <UserProfileCalender/>
                            </div>



                            <div class="p-2 shadow-inner rounded-2xl bg-whiteLilac h-fit py-5">
                                <UserProgressBar class="w-full  mx-auto" />
                            </div>

                        </div>

                    </div>
                    <div id="report" class="flex gap-3 flex-wrap w-full justify-between p-2">
                        <!-- <CourseCard v-for="items in 8" /> -->
                        <!-- <UserProfileCalender/> -->
                    </div>
                    <Transition name="fade">

                        <div id="updates" class="flex gap-3 flex-wrap w-full justify-between p-2">
                            <UserProfileCourses v-for="items in 2" />
                        </div>
                    </Transition>
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
