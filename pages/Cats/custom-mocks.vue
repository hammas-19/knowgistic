<template>
  <div>
    <section class="hero bg-center bg-no-repeat bg-[#f3f0ff]">
      <div class="lg:container mx-auto py-8 px-2 flex flex-col justify-center items-center md:gap-10 gap-5">

        <span class="w-fit items-center">
          <img src="/images/GOVTpk.png" class="w-full max-w-[100px]" alt="">
        </span>

        <h1 class="lg:text-4xl md:text-3xl text-xl text-ebonyClay text-center font-semibold md:px-10 px-0">
          Start with your
          <span class="text-purplHeart">weak subject </span>
          Today
        </h1>

      </div>
    </section>
    <section>
      <div class="mx-auto px-2 py-2 md:py-10 max-w-7xl">
        <div class="window flex justify-between md:gap-8 gap-3 py-8 w-full overflow-x-scroll px-10 whitespace-nowrap">
          <button v-for="tab, index in apiData" :key="index"
            class="text-ebonyClay !text-sm !w-full md:text-lg px-2 transition-all py-1 font-semibold rounded-xl bg-selago border"
            :class="{ 'bg-[#5F30E2] text-[#fff] border-nectarine': currentTab === tab }" @click="currentTab = tab">
            {{ tab.name }}
          </button>
        </div>

        <div
          class=" window lg:container mx-auto bg-selago md:p-10 p-2 rounded-2xl text-comet md:text-lg text-sm md:h-[calc(100vh-400px)] h-[calc(100vh-200px)] relative overflow-y-scroll mt-10">
          <!-- tab1 content -->
          <div v-if="currentTab === 'Maths'"
            class="flex justify-between flex-col gap-3 h-full pb-40">

            <!-- Content -->
            <div>

            <pre>{{ apiData }}</pre>
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

            <CategoryPastPaperEl />

          </div>

        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import axios from 'axios';
// const route = useRoute();
// const tabs = ['Maths', 'Urdu', 'Islamiat', 'Current affairs', 'General Knowledge', 'English', 'English Advanced', 'prerequisite', 'Past papers', 'General Knowledge', 'English', 'English Advanced']
const currentTab = ref('Maths')
const apiData = ref([]);
axios(`https://dsystem.one/moc_api/api.php?api_type=GET_ALL_SUBJECT`, {
  method: "GET"

}).then((response) => {
  apiData.value = response.data;
})
</script>