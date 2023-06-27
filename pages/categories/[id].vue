<style scoped>
.window::-webkit-scrollbar {
    display: none;
}
</style>
<template>
    <div>

        <section class=" hero bg-center bg-no-repeat ">
            <div class="lg:container mx-auto py-8 px-2 flex flex-col justify-center items-center md:gap-10 gap-5">

                <span class="w-fit items-center">
                    <img src="/images/GOVTpk.png" class="w-full max-w-[100px]" alt="">
                </span>

                <h1 class="lg:text-6xl md:text-3xl text-xl text-ebonyClay text-center font-semibold md:px-10 px-0">
                    Start with
                    <span class="text-purplHeart"> {{ $route.params.id }} </span>
                    Today
                </h1>

            </div>
        </section>

        <section class="bg-myst">
            <div class="lg:container mx-auto px-2 py-2 md:py-24">
                <div class="flex md:justify-center justify-evenly md:gap-8 gap-3 py-8">
                    <button v-for="tab in tabs" :key="tab"
                        class="text-ebonyClay md:px-10 text-xs md:text-lg px-3 transition-all py-1 font-semibold rounded-2xl bg-selago"
                        :class="{ 'bg-[#5F30E2] text-[#fff] border-nectarine': currentTab === tab }"
                        @click="currentTab = tab">
                        {{ tab }}
                    </button>
                </div>

                <div
                    class="bg-selago md:p-10 p-2 rounded-2xl text-comet md:text-lg text-sm md:h-[calc(100vh-400px)] h-[calc(100vh-200px)] relative">
                    <!-- tab1 content -->
                    <div v-if="currentTab === 'Details'"
                        class="window flex justify-between flex-col gap-3 h-full overflow-y-scroll pb-40">

                        <!-- Content -->
                        <div>
                            
                            <!-- IB ACIO is a graduate-level examination conducted by the Ministry of Home Affairs (MHA) for the
                            recruitment of Intelligence Bureau Assistant Central Intelligence Officer. An official IB ACIO
                            2022 notification has been released by the MHA through an employment advertisement to recruit
                            eligible candidates for the post of ACIO Grade-I & II/ Executive, JIO-I& II/ Executive, and
                            other posts. Going by the advertisement, a total of 766 vacancies are to be filled up through
                            this recruitment drive. <br> -->

                        </div>

                        <!-- Extras -->
                        <span class="absolute right-2 bottom-2">

                            <CategoryTimer />

                        </span>

                    </div>

                    <!-- tab2 content -->
                    <div v-if="currentTab === 'prerequisite'"
                        class="window flex justify-between flex-col gap-3 h-full overflow-y-scroll pb-40">

                        <CategoryPreReqEl />

                    </div>

                    <!-- tab3 content -->
                    <div v-if="currentTab === 'Past papers'"
                        class="window flex justify-between flex-col gap-3 h-full overflow-y-scroll pb-40 pl-3">
                        
                        <CategoryPastPaperEl/>

                    </div>

                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import axios from 'axios';
const route = useRoute();
const tabs = ['Details', 'prerequisite', 'Past papers']
const currentTab = ref('Details')
const apiData = ref([]);
axios(`https://primepackages.info/moc_api/api.php?api_type=GET_JOB_ALL_DETAILS&job_id=${route.params.id}`, {
    method: "GET"

}).then((response) => {
    apiData.value = response.data;
    console.log(response.data)
}).catch((err) => {
    console.log(err);
});
</script>

<style scoped>
.hero {
    background-color: #FBFAFE;
}
</style>
