<template>
  <div id="Subjects" class="max-w-7xl mx-auto bg-whiteLilac rounded-lg p-5 grid md:grid-cols-4 grid-cols-2 justify-items-center gap-5">
    <ShowCard v-for="(items, index) in courseData" :key="index" :image="items.image" :name="items.from" />
  </div>
</template>
<script setup>
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