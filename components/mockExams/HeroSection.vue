<template>
  <section class="hero bg-center bg-no-repeat bg-[#f3f0ff]">
    <div class="max-w-7xl mx-auto py-20 px-5 flex flex-col md:flex-row justify-between items-center gap-10">
      <div class="flex flex-col gap-5 md:w-1/2 w-full md:max-w-full max-w-lg">
        <h1 class="text-3xl text-ebonyClay font-semibold">
          Master Your Exams with Our Mocks
          <br>
          <span class="text-base text-comet font-medium">
            Achieve Academic and Career Mastery with Knowgistic
          </span>
        </h1>
        <p class="md:text-sm text-xs text-ebonyClay">
          Embark on a journey of excellence with our meticulously designed mock exams. Whether you're aiming for
          university admissions or a coveted government job, we've got you covered.
        </p>

      </div>
      <div class="p-5 rounded-lg bg-selago flex flex-col gap-8 max-w-[380px] w-full">
        <h2 class="text-xl text-ebonyClay font-medium">
          On this page :
        </h2>
        <div class="flex flex-wrap gap-2">
          <NuxtLink to="/mockExams/#UniExam"
            class="border-dashed border border-purplHeart hover:bg-purplHeart hover:text-white transition-all cursor-pointer rounded-md p-2 bg-whiteLilac text-sm">
            University mock exams
          </NuxtLink>
          <NuxtLink to="/mockExams/#GovtJob"
            class="border-dashed border border-purplHeart hover:bg-purplHeart hover:text-white transition-all cursor-pointer rounded-md p-2 bg-whiteLilac text-sm">
            Government job exams
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>