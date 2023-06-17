<style scoped>
.Info::-webkit-scrollbar {
    display: none;
}
</style>
<template>
    <div>
        <section class="bg-selago  lg:container lg:px-0 mx-auto rounded-3xl overflow-hidden">

            <div class="lg:container mx-auto">
                <div
                    class="flex shadow-lg shadow-[#e7e7e7] md:justify-center justify-evenly md:gap-20 gap-5 py-5 bg-whiteLilac">
                    <button v-for="tab in tabs" :key="tab" @click="currentTab = tab"
                        class="text-ebonyClay border-b-4 border-purplHeart font-semibold md:text-base text-xs flex items-center justify-end  md:flex-row flex-col  md:gap-3 gap-0 opacity-30"
                        :class="[{ 'md:flex-row-reverse': tab == 'University entrance' }, { 'opacity-100': tab == currentTab }]">


                        <img v-if="tab == 'University entrance'" src="/images/hero/mortarboard-unscreen.gif" class="w-12"
                            alt="">
                        <img v-if="tab == 'Govt Jobs'" src="/images/hero/briefcase-unscreen.gif" class=" w-10" alt="">


                        <span> {{ tab }}
                        </span>
                    </button>
                </div>
                <div class="Info relative py-4 md:h-[calc(100vh-400px)] h-[calc(100vh-200px)]">


                    <div class="flex justify-center absolute md:bottom-7 bottom-2 w-full">
                        <!-- Govt Jobs -->
                        <NuxtLink v-show="currentTab === 'Govt Jobs'" to="/govtJobs">

                            <span
                                class="cursor-pointer bg-purplHeart md:px-14 px-8 md:py-5 py-2 font-semibold rounded-lg text-white text-sm md:text-lg">View
                                All Govt Jobs</span>

                        </NuxtLink>

                        <!-- Uni Entrance Exams -->
                        <NuxtLink v-show="currentTab === 'University entrance'" to="/uniExams">

                            <span
                                class="cursor-pointer bg-purplHeart md:px-14 px-4 md:py-5 py-2 font-semibold rounded-lg text-white text-sm md:text-lg">View
                                All Uni Entrance exams</span>

                        </NuxtLink>
                    </div>



                    <div v-if="currentTab === 'Govt Jobs'"
                        class="flex flex-wrap md:gap-10 gap-2 items-center justify-center">
                        <div v-for="(items, index) in apiData" :key="index">
                            <NuxtLink :to="/categories/ +items.title ">
                                <JobElement :title="items.title" :dated="items.test_date" :posts="items.posts" />
                            </NuxtLink>
                        </div>
                    </div>

                    <p v-if="currentTab === 'University entrance'"
                        class="flex flex-wrap md:gap-10 gap-2 items-center justify-center">
                        <UniElement v-for="items in 12" />
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import axios from 'axios';
const currentTab = ref('Govt Jobs')
const tabs = ref(['Govt Jobs', 'University entrance'])
const apiData = ref([]);
axios(`https://primepackages.info/moc_api/api.php?api_type=GET_ALL_JOBS`, {
    method: "GET"

}).then((response) => {
    apiData.value = response.data;
    console.log(response.data)
}).catch((err) => {
    console.log(err);
});
</script>