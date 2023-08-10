<style scoped>
.Info::-webkit-scrollbar {
    display: none;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
<template>
    <div>
        <section class="lg:px-0 mx-auto overflow-hidden">

            <div>
                <div class="flex gap-7 py-5 max-w-7xl mx-auto px-2">
                    <button v-for="tab in tabs" :key="tab" @click="currentTab = tab"
                        class="text-ebonyClay border-b border-purplHeart font-semibold md:text-base text-xs flex items-center justify-end pb-2 md:flex-row flex-col  md:gap-3 gap-0 opacity-30"
                        :class="[{ 'md:flex-row-reverse': tab == 'University entrance' }, { 'opacity-100': tab == currentTab }]">
                        <!-- 

                        <img v-if="tab == 'University entrance'" src="/images/hero/mortarboard-unscreen.gif" class="w-12"
                            alt="">
                        <img v-if="tab == 'Govt Jobs'" src="/images/hero/briefcase-unscreen.gif" class=" w-10" alt=""> -->


                        <span> {{ tab }}
                        </span>
                    </button>
                </div>
            </div>

            <div class="Info relative py-4 md:h-[calc(100vh-400px)] h-[calc(100vh-200px)] max-w-7xl mx-auto lg:overflow-y-scroll overflow-y-hidden">

                <Transition>
                <div class="flex justify-center absolute md:bottom-5 bottom-2 w-full lg:hidden">
                    <!-- Govt Jobs -->
                    <NuxtLink v-show="currentTab === 'Govt Jobs'" to="/govtJobs">

                        <span
                            class="cursor-pointer bg-mineShaft px-4 md:py-5 py-2 font-semibold rounded-lg text-white text-sm">View
                            All Govt Jobs</span>

                    </NuxtLink>

                    <!-- Uni Entrance Exams -->
                    <NuxtLink v-show="currentTab === 'University entrance'" to="/uniExams">

                        <span
                            class="cursor-pointer bg-mineShaft px-4 md:py-5 py-2 font-semibold rounded-lg text-white text-sm">View
                            All Uni Entrance exams</span>

                    </NuxtLink>
                </div>
            </Transition>

                <Transition>
                    <div v-if="currentTab === 'Govt Jobs'"
                        class="flex flex-wrap md:gap-10 gap-2 items-center justify-center">
                        <div v-for="(items, index) in apiData" :key="index">
                            <NuxtLink :to="/categories/ + items.id">
                                <JobElement :title="items.title" :dated="items.test_date" :posts="items.posts" />
                            </NuxtLink>
                        </div>
                    </div>
                </Transition>
                <Transition>
                    <p v-if="currentTab === 'University entrance'"
                        class="flex flex-wrap md:gap-10 gap-2 items-center justify-center">
                        <JobCourseCard v-for="items in 12" />
                    </p>
                </Transition>
                <Transition>
                    <p v-if="currentTab === 'Subject-wise'"
                        class="flex flex-wrap md:gap-10 gap-2 items-center justify-around">
                        <ShowCard  />
                    </p>
                </Transition>
            </div>
        </section>
    </div>
</template>
<script setup>
import axios from 'axios';
import JobCourseCard from './jobCourseCard.vue';
const currentTab = ref('Govt Jobs')
const tabs = ref(['Govt Jobs', 'University entrance' , 'Subject-wise'])
const apiData = ref([]);
axios(`https://primepackages.info/moc_api/api.php?api_type=GET_ALL_JOBS`, {
    method: "GET"

}).then((response) => {
    apiData.value = response.data;
}).catch((err) => {
});
</script>