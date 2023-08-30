<template>
  <section class="hero bg-center bg-no-repeat bg-[#f3f0ff]">
    <div class="max-w-7xl mx-auto py-20 px-5 flex flex-col md:flex-row justify-between items-center gap-10">
      <div class="flex flex-col gap-5 md:w-1/2 w-full md:max-w-full max-w-lg">
        <h1 class="text-3xl text-ebonyClay font-semibold">
          Custom mock exams
          <br>
          <span class="text-base text-comet font-medium">
            Focused Learning for Every Aspiring Student
          </span>
        </h1>
        <p class="md:text-sm text-xs text-ebonyClay">
          At Knowgistic, we understand the value of concentrated study. Our Custom Mock Exams allow you to delve into
          subjects of your choice, ensuring you're always on track to meet your academic goals.
        </p>

      </div>
      <div class="p-5 rounded-lg bg-selago flex flex-col gap-8 max-w-[380px] w-full">
        <h2 class="text-xl text-ebonyClay font-medium">
          On this page :
        </h2>
        <div class="flex flex-wrap gap-2">
          <NuxtLink to="/subject-wise/#WhyKnowgistic"
            class="border-dashed border border-purplHeart hover:bg-purplHeart hover:text-white transition-all cursor-pointer rounded-md p-2 bg-whiteLilac text-sm">
            Why knowgistic
          </NuxtLink>
          <NuxtLink to="/subject-wise/#AcademicAdventure"
            class="border-dashed border border-purplHeart hover:bg-purplHeart hover:text-white transition-all cursor-pointer rounded-md p-2 bg-whiteLilac text-sm">
            Academic adventure
          </NuxtLink>
          <NuxtLink to="/subject-wise/#Subjects"
            class="border-dashed border border-purplHeart hover:bg-purplHeart hover:text-white transition-all cursor-pointer rounded-md p-2 bg-whiteLilac text-sm">
            Subjects
          </NuxtLink>
          <NuxtLink to="/subject-wise/#CustomizedLearning"
            class="border-dashed border border-purplHeart hover:bg-purplHeart hover:text-white transition-all cursor-pointer rounded-md p-2 bg-whiteLilac text-sm">
            Customized learning
          </NuxtLink>
          <NuxtLink to="/subject-wise/#Engagement"
            class="border-dashed border border-purplHeart hover:bg-purplHeart hover:text-white transition-all cursor-pointer rounded-md p-2 bg-whiteLilac text-sm">
            Engagement
          </NuxtLink>

        </div>
      </div>
    </div>
  </section>
</template>