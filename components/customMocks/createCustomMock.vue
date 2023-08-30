<template>
    <div
      class="max-w-7xl mx-auto  flex lg:flex-row flex-col gap-5 justify-between items-center lg:items-start border border-dashed border-purplHeart rounded-3xl">

            <!-- Preview -->
        <div class="flex flex-col gap-5 p-5">
          <h1 class="text-3xl font-semibold text-comet">
            Preview:
          </h1>

          <!-- Card -->
          <div>

            <div
              class="md:w-[580px] w-[300px]  h-[460px] md:h-[463px] flex md:flex-row flex-col-reverse gap-2 rounded-3xl p-2shadow-2xl relative">

              <!-- fading div -->
              <div class="absolute w-[95%] md:w-[48%] md:h-20 h-14 bottom-[1px] bg-cardFade mx-auto rounded-b-3xl">
              </div>

              <!-- No of contents -->
              <div
                class="absolute w-[95%] md:w-[48%] h-10 top-[111px] md:top-1 bg-[#ffffff7f] backdrop-blur-[6px] mx-auto rounded-t-3xl pl-10 pt-3">
                <span class="text-base font-jost ">You will cover:</span>
              </div>

              <!-- Info -->
              <div class="window card flex flex-col gap-3 p-3 rounded-3xl bg-[#f3f1fc] md:w-1/2 w-full overflow-y-scroll pt-12 border border-dashed border-purplHeart">

                <!-- {{ subjectOptions }} -->
                <div class="flex items-center justify-between" v-for="items in subjectOptions" :key="items">

                  <span v-show="items.selected_ratio" class="md:text-sm text-sm text-ebonyClay font-medium">
                    {{ items.from }}
                  </span>
                  <span v-show="items.selected_ratio"
                    class=" w-10 h-10 text-white font-bold text-sm text-center bg-purplHeart rounded-full  flex items-center justify-center ">
                    {{ items.selected_ratio }}%
                  </span>

                </div>

              </div>

              <!-- ImageGraphy -->
              <div class="h-full md:w-1/2 w-full rounded-3xl bg-midHeart relative text-4xl text-white">

                <div class="absolute w-full text-center md:bottom-5 bottom-0 min-h-[95px]">
                  <h1 class="text-4xl font-bold font-jost">{{ selectedMock }}</h1>

                  <span
                    class="px-8 py-2 text-center font-medium text-sm rounded-full hover:bg-white hover:text-purplHeart hover:shadow-xl transition-all text-white border-2 border-white cursor-pointer">
                    Start Journey
                  </span>

                </div>

              </div>


            </div>

          </div>

        </div>

      <!-- Form sec -->
      <div class="inputs w-full md:w-1/2 p-5">

        <form action="submit" class="flex gap-5 flex-col">
          <div>
            <label for="Stacks" class="block mb-2 text-sm font-medium text-comet dark:text-white">
              Mock for: {{ selectedMock }}
            </label>
            <select id="stacks" @change="handleMockValue" v-model="selectedMock"
              class="bg-selago  border border-whiteLilac text-ebonyClay text-sm rounded-lg focus:ring-purplHeart focus:border-purplHeart block w-full p-2.5">
              <option selected disabled>Choose a stack </option>
              <option v-for="jobs in mockOptions" key="jobs" :value="jobs">{{ jobs }}</option>
            </select>
          </div>

          <!-- Subjects -->
          <div class=" flex flex-col py-10 gap-3">

            <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose Subjects:</h3>

            <!-- Subjects -->
            <div v-for="items in subjectOptions">
              <label for="Stacks" class="block mb-2 text-sm font-medium text-comet dark:text-white">
                {{ items.from }}
              </label>
              <select v-model="items.selected_ratio"
                class="bg-selago  border border-whiteLilac text-ebonyClay text-sm rounded-lg focus:ring-purplHeart focus:border-purplHeart block w-full p-2.5">
                <option selected disabled>Choose Ratio</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="30">30%</option>
                <option value="40">40%</option>
              </select>
            </div>

            <!-- %age -->
            <!-- <select id="stacks" v-model="subjectPercent"
                                                                                                                                                                                                                                               </select> -->

          </div>

        </form>

      </div>


    </div>
</template>
<script setup>
const mockData = [
  {
    name: "Job-1",
    data:
      [
        {
          image: '/images/index_v2/gk.png',
          from: 'General Knowledge',
          level: '1',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/analytics.png',
          from: 'Analytical Problems',
          level: '1',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/ca.png',
          from: 'Current Affairs',
          level: '2',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/cs.png',
          from: 'Computer Studies',
          level: '2',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/eng.png',
          from: 'English',
          level: '3',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/isl.png',
          from: 'Islamic Studies',
          level: '3',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/maths.png',
          from: 'Maths',
          level: '3',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/pro.png',
          from: 'Professionalism',
          level: '3',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/sci.png',
          from: 'General Science',
          level: '3',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/sindhi.png',
          from: 'Sindhi',
          level: '3',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/urdu.png',
          from: 'Urdu',
          level: '3',
          selected_ratio: '',
        },
      ]
  },
  {
    name: "Job-2",
    data:
      [
        {
          image: '/images/index_v2/gk.png',
          from: 'Urdu General Knowledge',
          level: '1',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/analytics.png',
          from: 'Urdu Analytical Problems',
          level: '1',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/ca.png',
          from: 'Urdu Current Affairs',
          level: '2',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/cs.png',
          from: 'Urdu Computer Studies',
          level: '2',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/eng.png',
          from: 'Urdu English',
          level: '3',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/isl.png',
          from: 'Islamic Studies',
          level: '3',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/maths.png',
          from: 'Maths',
          level: '3',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/pro.png',
          from: 'Professionalism',
          level: '3',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/sci.png',
          from: 'General Science',
          level: '3',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/sindhi.png',
          from: 'Sindhi',
          level: '3',
          selected_ratio: '',
        },
        {
          image: '/images/index_v2/urdu.png',
          from: 'Urdu',
          level: '3',
          selected_ratio: '',
        },
      ]
  }
]

const selectedMock = ref("")
const mockOptions = mockData.map(el => el.name)

const subjectOptions = ref([])

function handleMockValue() {
  subjectOptions.value = mockData.find((el) => el.name == selectedMock.value)?.data
}
</script>