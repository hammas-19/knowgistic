<style scoped>
.Info::-webkit-scrollbar {
    display: none;
}
</style>
<template>
    <div>
        <section class="bg-selago  lg:container lg:px-0 mx-auto rounded-3xl relative">
            <!-- fading div -->
            <div
                class="absolute w-full h-20 md:h-36 bottom-0 bg-cardFade z-10 justify-center items-end flex py-8 rounded-b-3xl">
            </div>


        <div class="lg:container mx-auto px-3 ">
            <div class="flex  md:justify-center justify-evenly md:gap-20 gap-5 py-1">
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
                <div class="Info py-4 overflow-y-scroll md:h-[calc(100vh-400px)] h-[calc(100vh-200px)]">



                <!-- Govt Jobs -->
                <!-- <NuxtLink v-show="currentTab === 'Govt Jobs'" to="/govtJobs">

                            <span
                                class="cursor-pointer bg-purplHeart md:px-14 px-8 md:py-5 py-2 font-semibold rounded-lg text-white text-sm md:text-lg">View
                                    All Govt Jobs</span>

                            </NuxtLink> -->

                <!-- Uni Entrance Exams -->
                <!-- <NuxtLink v-show="currentTab === 'University entrance'" to="/uniExams">

                            <span
                                class="cursor-pointer bg-purplHeart md:px-14 px-4 md:py-5 py-2 font-semibold rounded-lg text-white text-sm md:text-lg">View
                                    All Uni Entrance exams</span>

                            </NuxtLink> -->


                    <span v-if="currentTab === 'Govt Jobs'"
                        class="flex flex-wrap md:gap-10 gap-2 items-center justify-center">

                        <JobElement v-for="items in 24" />

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