<template>
  <div class="max-w-7xl mx-auto px-5 md:px-0">
    <div class="w-full mx-auto flex justify-center md:gap-20 gap-5 pb-5">
      <span v-for="(tab) in tabs" :key="tab"
        class="bg-whiteLilac  border-purplHeart border rounded-lg  justify-center items-center flex transition-all" :class="currentTab == tab ? 'opacity-100': 'opacity-40'">
        <NuxtLink @click="currentTab = tab" class="text-base text-ebonyClay font-medium cursor-pointer w-fit md:px-10 px-5 py-3">
          {{ tab }}</NuxtLink>
      </span>
    </div>
    <div id="Subjects" class="bg-whiteLilac rounded-lg p-5">
      <div v-if="currentTab == 'Government Job Mock Exams'"
        class="grid md:grid-cols-4 grid-cols-2 justify-items-center gap-5">
        <div v-for="(items, index) in apiData" :key="index">
          <NuxtLink :to="/categories/ + items.id">
            <JobElement :title="items.title" :dated="items.test_date" :posts="items.posts" />
          </NuxtLink>
        </div>
      </div>
      <div v-if="currentTab == 'University Mock Exams'"
        class="grid md:grid-cols-4 grid-cols-2 justify-items-center gap-5">
        <ShowCard v-for="(items, index) in courseData" :key="index" :image="items.image" :name="items.from" />
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
const currentTab = ref('University Mock Exams')
const tabs = ['University Mock Exams', 'Government Job Mock Exams']

const apiData = ref([]);
axios(`https://dsystem.one/moc_api/api.php?api_type=GET_ALL_JOBS`, {
  method: "GET"

}).then((response) => {
  apiData.value = response.data;
})

const courseData = [
  {
    image: '/images/subjectImages/GeneralKnowledge.png',
    from: 'General Knowledge'
  },
  {
    image: '/images/subjectImages/analytics.png',
    from: 'Analytical Problems'
  },
  {
    image: '/images/subjectImages/GeneralKnowledge.png',
    from: 'Current Affairs'
  },
  {
    image: '/images/subjectImages/ComputerScience.png',
    from: 'Computer Studies'
  },
  {
    image: '/images/subjectImages/English.png',
    from: 'English'
  },
  {
    image: '/images/subjectImages/Islamiyat.png',
    from: 'Islamic Studies'
  },
  {
    image: '/images/subjectImages/Mathematics.png',
    from: 'Maths'
  },
  {
    image: '/images/subjectImages/GeneralKnowledge.png',
    from: 'Professionalism'
  },
  {
    image: '/images/subjectImages/Science.png',
    from: 'General Science'
  },
  {
    image: '/images/subjectImages/Urdu.png',
    from: 'Sindhi'
  },
  {
    image: '/images/subjectImages/Urdu.png',
    from: 'Urdu'
  }
]
</script>