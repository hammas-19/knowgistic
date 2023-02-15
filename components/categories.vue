<style scoped>
.Info::-webkit-scrollbar {
    display: none;
}
</style>
<template>
    <div>
        <section class="bg-selago  lg:container lg:px-0 px-9 mx-auto rounded-3xl">
            <div class="container mx-auto ">
                <div class="flex  md:justify-center justify-evenly md:gap-20 gap-5 py-5">
                    <!-- <button v-for="tab in tabs" :key="tab"
                        class="text-ebonyClay md:px-10 px-4 py-2 font-semibold uppercase rounded-2xl bg-astronaut"
                        :class="{ 'bg-[#fff] text-nectarine border-dashed border-4 border-nectarine': currentTab === tab }"
                        @click="currentTab = tab">
                        {{ tab }}
                    </button> -->
                    <button v-for="tab in tabs" :key="tab" @click="currentTab = tab"
                        class="text-ebonyClay border-b-4 border-purplHeart font-semibold md:text-base text-xs flex items-center justify-end  md:flex-row flex-col  md:gap-3 gap-0 opacity-30"
                        :class="[{ 'md:flex-row-reverse': tab == 'University entrance' }, { 'opacity-100': tab == currentTab }]">


                        <img v-if="tab == 'University entrance'" src="/images/hero/mortarboard-unscreen.gif"
                            class="md:w-20 w-12" alt="">
                        <img v-if="tab == 'Govt Jobs'" src="/images/hero/briefcase-unscreen.gif" class="md:w-14 w-10"
                            alt="">


                        <span> {{ tab }}
                        </span>
                    </button>
                </div>
                <div class="Info py-4 overflow-hidden md:h-[calc(100vh-550px)] h-[calc(100vh-200px)] relative">

                    <!-- fading div -->
                    <div
                        class="absolute w-full h-20 md:h-36 bottom-0 bg-cardFade z-10 justify-center items-end flex py-8 rounded-b-3xl">

                        <!-- Govt Jobs -->
                        <NuxtLink v-show="currentTab === 'Govt Jobs'" to="/govtJobs">

                            <span
                                class="cursor-pointer bg-purplHeart px-14 py-5 font-semibold rounded-lg text-white">View
                                All Govt Jobs</span>

                        </NuxtLink>

                        <!-- Uni Entrance Exams -->
                        <NuxtLink v-show="currentTab === 'University entrance'" to="/uniExams">

                            <span
                                class="cursor-pointer bg-purplHeart px-14 py-5 font-semibold rounded-lg text-white">View
                                All Uni Entrance exams</span>

                        </NuxtLink>

                    </div>

                    <span v-if="currentTab === 'Govt Jobs'"
                        class="flex flex-wrap md:gap-10 gap-2 items-center justify-center">

                        <JobElement v-for="items in 12" />

                    </span>
                    <p v-if="currentTab === 'University entrance'"
                        class="flex flex-wrap md:gap-10 gap-2 items-center justify-center">
                        <UniElement v-for="items in 12" />
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentTab: 'Govt Jobs',
            tabs: ['Govt Jobs', 'University entrance']
        }
    }
}
</script>