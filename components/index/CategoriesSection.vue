<style scoped>
* {
  scroll-behavior: smooth;
}

.window::-webkit-scrollbar-track {
  background-color: #f0ecfd;

}

.window::-webkit-scrollbar {
  width: 4px;
  background-color: #F5F5F5;
}

.window::-webkit-scrollbar-thumb {
  background-color: #dedde4;
  background-image: -webkit-linear-gradient(90deg,
      #b9b9b9 25%,
      transparent 100%)
}
</style>
<template>
  <div class="max-w-7xl mx-auto px-2 flex flex-col gap-16">
    <div class="flex flex-col gap-3 px-2">

      <h1 class="md:text-4xl text-xl text-ebonyClay font-semibold">
        Ready to Prepare?
      </h1>
      <span class="text-ebonyClay text-sm">
        Let's get started with following active for candidates preparation
      </span>

    </div>
    <!-- Job Preparation -->
    <div class=" ">
      <div
        class=" text-ebonyClay py-8 bg-[url('/images/categories/sectionBannerBg2.svg')] rounded-2xl bg-center bg-cover bg-no-repeat bg-selago mb-2 ">
        <div class="mx-2 p-2 bg-selago w-fit rounded-lg shadow-md border border-whiteLilac">

          <h3 class="text-lg font-semibold pb-2">
            Mock Exams
          </h3>
          <p class="text-sm text-comet">
            Boost your exam readiness with custom mock exams
          </p>
        </div>
      </div>
      <div
        class="window bg-selago rounded-xl p-2 md:p-5 flex flex-col md:flex-row md:gap-10 gap-2 items-center justify-between max-h-[656px] md:bg-[url('/images/categories/BackgroundLines.png')] bg-contain bg-no-repeat bg-right">
        <div class="flex flex-col max-w-[520px] w-full gap-3 justify-center">

          <span class="text-ebonyClay font-medium text-xs">Access a wide range of prebuilt exams designed to match
            the patterns and difficulty of real university entrance and government job tests.</span>
          <span class="text-2xl font-bold text-ebonyClay">Boost your chances of success with our prebuilt mock
            exams for university entrance and government job tests.</span>
          <span class="text-comet text-xs">Explore prebuilt mock exams for university entrance and government job
            tests at Knowgistic. Designed to match real exam patterns, our mocks offer authentic practice to
            boost your confidence.
          </span>

        </div>
        <span class="md:w-1/3 w-full flex justify-center">
          <NuxtLink to="/auth/signUp">
            <ButtonFancy class="px-3 py-2 text-ebonyClay text-base">
              <template #text>
                Get started
              </template>
            </ButtonFancy>
          </NuxtLink>
        </span>
      </div>
    </div>
    <!-- Custom Mock -->
    <div>
      <div
        class=" text-ebonyClay py-8 bg-[url('/images/categories/sectionBannerBg1.svg')] rounded-2xl bg-center bg-cover bg-no-repeat bg-selago mb-2 ">
        <div class="mx-2 p-2 bg-selago w-fit rounded-lg shadow-md border border-whiteLilac">

          <h3 class="text-lg font-semibold pb-2">
            Custom mock exams
          </h3>
          <p class="text-sm text-comet">
            Ace your exams with custom mock exams -
          </p>
        </div>
      </div>
      <div
        class="window bg-selago rounded-xl p-2 md:p-5 flex flex-col md:flex-row md:gap-10 gap-2 items-center justify-between max-h-[656px] md:bg-[url('/images/categories/BackgroundLines.png')] bg-contain bg-no-repeat bg-right">
        <div class="flex flex-col max-w-[520px] w-full gap-3 justify-center">

          <span class="text-ebonyClay font-medium text-xs">....</span>
          <span class="text-2xl font-bold text-ebonyClay">Ace your exams with custom mock exams -</span>
          <span class="text-comet text-xs">Tailor your exam content, questions, format, and difficulty level to
            fit your study goals with our user-friendly interface.
          </span>

        </div>
        <span class="md:w-1/3 w-full flex justify-center">
          <NuxtLink to="/auth/signUp">
            <ButtonFancy class="px-3 py-2 text-ebonyClay text-base">
              <template #text>
                Get started
              </template>
            </ButtonFancy>
          </NuxtLink>
        </span>
      </div>
    </div>
    <!-- Subject-wise Preparation -->
    <div>
      <div
        class=" text-ebonyClay py-8 bg-[url('/images/categories/sectionBannerBg1.svg')] rounded-2xl bg-center bg-cover bg-no-repeat bg-selago mb-2 ">
        <div class="mx-2 p-2 bg-selago w-fit rounded-lg shadow-md border border-whiteLilac">

          <h3 class="text-lg font-semibold pb-2">
            Subject wise preparation
          </h3>
          <p class="text-sm text-comet">
            ....
          </p>
        </div>
      </div>
      <div
        class="window bg-selago rounded-xl p-2 md:p-5 flex flex-col md:flex-row md:gap-10 gap-2 items-center justify-between max-h-[656px] md:bg-[url('/images/categories/BackgroundLines.png')] bg-contain bg-no-repeat bg-right">
        <div class="flex flex-col max-w-[520px] w-full gap-3 justify-center">

          <span class="text-ebonyClay font-medium text-xs">....</span>
          <span class="text-2xl font-bold text-ebonyClay">....</span>
          <span class="text-comet text-xs">Enhance your subject knowledge with Knowgistic's quizzes and practice
            tests. Focus on specific subjects like English, math, or others. Get instant feedback and improve
            your skills.
          </span>

        </div>
        <span class="md:w-1/3 w-full flex justify-center">
          <NuxtLink to="/auth/signUp">
            <ButtonFancy class="px-3 py-2 text-ebonyClay text-base">
              <template #text>
                Get started
              </template>
            </ButtonFancy>
          </NuxtLink>
        </span>
      </div>
    </div>

  </div>
</template>
<script setup>
import axios from 'axios';
const apiData = ref([]);
axios(`https://dsystem.one/moc_api/api.php?api_type=GET_ALL_JOBS`, {
  method: "GET"

}).then((response) => {
  apiData.value = response.data;
}).catch((err) => {
});
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