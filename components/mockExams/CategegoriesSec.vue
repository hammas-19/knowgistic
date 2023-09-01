<template>
  <div class="max-w-7xl mx-auto px-5 md:px-0">

    <!-- Details -->
    <section class="min-h-[280px] md:px-5">
      <div v-if="currentTab == 'Government Job Mock Exams'" id="UniExam" class="flex flex-col gap-5 pb-20">
        <h3 class="text-xl text-ebonyClay font-semibold">
          Government Job Mock Exams
        </h3>
        <div class="flex flex-col gap-2">
          <span class="text-base text-ebonyClay font-medium">
            Engage with Comprehensive Govt Job Exams:
            <span class="md:text-sm text-xs text-comet">
              Tackle mock exams designed to reflect the intricacies of government job written tests.
            </span>
          </span>
          <span class="text-base text-ebonyClay font-medium">
            Real-world Exam Patterns:
            <span class="md:text-sm text-xs text-comet">
              Get a feel for the actual government job exam format, ensuring no surprises on the exam day.
            </span>
          </span>
          <span class="text-base text-ebonyClay font-medium">
            Instant Performance Insights:
            <span class="md:text-sm text-xs text-comet">
              Gauge your readiness for government job tests with our real-time feedback system.
            </span>
          </span>
          <span class="text-base text-ebonyClay font-medium">
            Customizable Learning Journey:
            <span class="md:text-sm text-xs text-comet">
              Choose the subjects and difficulty levels that align with your preparation needs.
            </span>
          </span>
          <span class="text-base text-ebonyClay font-medium">
            Step Up Your Preparation:
            <span class="md:text-sm text-xs text-comet">
              With Knowgistic's Govt Job Mocks, your dream government job is within reach.
            </span>
          </span>
        </div>
      </div>
      <div v-if="currentTab == 'University Mock Exams'" id="UniExam" class="flex flex-col gap-5 pb-20">
        <h3 class="text-xl text-ebonyClay font-semibold">
          University Mock Exams
        </h3>
        <div class="flex flex-col gap-2">
          <span class="text-base text-ebonyClay font-medium">
            Engage with Authentic University Exams:
            <span class="md:text-sm text-xs text-comet">
              Dive into mock exams that mirror the real university entrance tests, ensuring you're well-prepared for the
              big
              day.
            </span>
          </span>
          <span class="text-base text-ebonyClay font-medium">
            Experience Real Exam Patterns:
            <span class="md:text-sm text-xs text-comet">
              Familiarize yourself with the question patterns, formats, and time constraints of actual university exams.
            </span>
          </span>
          <span class="text-base text-ebonyClay font-medium">
            In-depth Performance Analysis:
            <span class="md:text-sm text-xs text-comet">
              Receive detailed feedback on your strengths, areas of improvement, and readiness for university entrance
              tests.
            </span>
          </span>
          <span class="text-base text-ebonyClay font-medium">
            Flexible Learning Experience:
            <span class="md:text-sm text-xs text-comet">
              Adjust the difficulty and content based on your needs, ensuring a tailored study session every time.
            </span>
          </span>
          <span class="text-base text-ebonyClay font-medium">
            Practice Makes Perfect:
            <span class="md:text-sm text-xs text-comet">
              With Knowgistic's University Mocks, you're one step closer to your dream university
            </span>
          </span>
        </div>
      </div>
      <div v-if="currentTab == 'Custom Mocks'" id="UniExam" class="flex flex-col gap-5 pb-20">
        <div>
          <h3 class="text-xl text-ebonyClay font-semibold">
            Start Your Customized Academic Journey with Knowgistic
          </h3>
          <span class="md:text-sm text-xs text-comet">
            With our Custom Mock Exams, you're in control. Design your study sessions, engage with our top-tier content,
            and confidently stride towards academic success.
          </span>
        </div>
        <div>
          <h3 class="text-xl text-ebonyClay font-semibold">
            Select Your Preferred Subject
          </h3>
          <span class="md:text-sm text-xs text-comet">
            Navigate through our extensive subject list and pick the one that aligns with your study objectives. Whether
            it's English literature, advanced mathematics, or any other topic, we've got a comprehensive collection ready
            for you.
          </span>
        </div>
      </div>
    </section>

    <!-- details End -->
    <div class="w-full mx-auto flex justify-center md:gap-20 gap-5 pb-5">
      <span v-for="(tab) in tabs" :key="tab"
        class="bg-whiteLilac  border-purplHeart border rounded-lg  justify-center items-center flex transition-all"
        :class="currentTab == tab ? 'opacity-100' : 'opacity-40'">
        <NuxtLink @click="currentTab = tab"
          class="text-base text-ebonyClay font-medium cursor-pointer w-fit md:px-10 px-5 py-3">
          {{ tab }}</NuxtLink>
      </span>
    </div>
    <div id="Subjects" class="bg-whiteLilac border border-dashed border-purplHeart rounded-3xl p-5">
      <div v-if="currentTab == 'Government Job Mock Exams'"
        class="grid md:grid-cols-4 grid-cols-2 justify-items-center gap-5">
        <div v-for="(items, index) in apiData" :key="index">
          <NuxtLink :to="/mockExams/ + items.id">
            <JobElement :title="items.title" :dated="items.test_date" :posts="items.posts" />
          </NuxtLink>
        </div>
      </div>
      <div v-if="currentTab == 'University Mock Exams'"
        class="grid md:grid-cols-4 grid-cols-2 justify-items-center gap-5">
        <ShowCard v-for="(items, index) in courseData" :key="index" :image="items.image" :name="items.from" />
      </div>
      <div v-if="currentTab == 'Custom Mocks'">
        <CustomMocksCreateCustomMock />
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
const currentTab = ref('University Mock Exams')
const tabs = ['University Mock Exams', 'Government Job Mock Exams', 'Custom Mocks']

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