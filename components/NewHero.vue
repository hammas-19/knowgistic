<style scoped>
@keyframes cutter {
  0% {
    text-decoration: none;
  }

  100% {
    text-decoration: line-through solid #f66d6d 9%;
  }
}

@keyframes replacer {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


.correct {
  opacity: 0;
  animation: replacer linear forwards 1;
  animation-duration: 0.3s;
  animation-delay: 0.6s;
}

.arrow {
  opacity: 0;
  animation: replacer linear forwards 1;
  animation-duration: 0.3s;
  animation-delay: 0.9s;
}

.wrong {
  animation: cutter ease-in forwards 1;
  animation-duration: 0.6s;
}
</style>
<template>
  <div class="grid lg:grid-cols-2 grid-cols-1 gap-2">
    <div class="flex flex-col justify-between gap-6 lg:gap-12 h-3/4">
      <!-- TYPO SLIDER -->
      <div class="md:py-8 py-3">
        <Carousel :autoplay="4000" :wrap-around="true" dir="rtl">
          <Slide class="">
            <div class="carousel__item px-2 w-full lg:container !h-full self-center">
              <div class="max-w-[475px] w-fit px-5 flex flex-col gap-5 items-end text-left mx-auto  self-center h-4/6">
                <h1 class="font-bold md:text-4xl text-xl text-ebonyClay flex md:gap-4 gap-2 items-end text-center">
                  Way
                  <span class="flex flex-col items-center">
                    <div class="flex flex-col items-center">
                      <!-- correction -->
                      <span
                        class="correct md:text-4xl text-2xl transition-transform -rotate-[4deg] font-handlee text-purplHeart font-medium">Smarter</span>
                      <!-- arrow -->
                      <span class="arrow h-8 "><img src="/images/hero/arrow.svg" class="h-full w-full"
                          alt="arrow"></span>
                    </div>
                    <!-- the cut -->
                    <span class="wrong">Harder</span>
                  </span>
                  Prepare

                </h1>
                <p>
                  Step up your game with our smart exam preparation strategies. Prepare efficiently, study
                  effectively, and outsmart your exams.
                </p>
              </div>
            </div>
          </Slide>
          <Slide class="">
            <div class="carousel__item px-2 w-full lg:container">
              <div class="max-w-[560px] w-fit px-5 flex flex-col gap-5 items-end text-left mx-auto">
                <h1 class="font-bold md:text-3xl text-xl text-ebonyClay flex gap-2 items-end">
                  <span>Exams Seamlessly</span>
                  <span class="flex flex-col items-center">
                    <div class="flex flex-col items-center">
                      <!-- correction -->
                      <span
                        class="correct md:text-4xl text-2xl transition-transform -rotate-[4deg] font-handlee text-purplHeart font-medium">Whiz</span>
                      <!-- arrow -->
                      <span class="arrow h-8 "><img src="/images/hero/arrow.svg" class="h-full w-full"
                          alt="arrow"></span>
                    </div>
                    <!-- the cut -->
                    <span class="wrong ">Prepare</span>
                  </span>
                </h1>
                <p>
                  No more stumbling blocks on your exam journey. With our seamless preparation, you'll
                  confidently whiz through exams and achieve greatness.
                </p>
              </div>
            </div>
          </Slide>
          <Slide class="">
            <div class="carousel__item px-2 w-full lg:container">
              <div class=" max-w-[600px] w-fit px-5 flex flex-col gap-5 items-end text-left mx-auto">
                <h1 class="font-bold md:text-4xl text-xl text-ebonyClay flex md:gap-4 gap-2 items-end">
                  <span class="flex flex-col items-center">
                    <div class="flex flex-col items-center">
                      <!-- correction -->
                      <span
                        class="correct md:text-4xl text-2xl transition-transform -rotate-[4deg] font-handlee text-purplHeart font-medium">Energizing</span>
                      <!-- arrow -->
                      <span class="arrow h-8 "><img src="/images/hero/arrow.svg" class="h-full w-full"
                          alt="arrow"></span>
                    </div>
                    <!-- the cut -->
                    <span class="wrong">Exhausting</span>
                  </span>
                  Here, Exams are
                </h1>
                <p>
                  Ignite your exam performance with our energizing approach. Embrace the thrill of
                  learning and power through exams with renewed energy.
                </p>
              </div>
            </div>
          </Slide>
          <!-- 
          <template #addons>
            <Pagination />
          </template> -->
        </Carousel>

      </div>
      <!-- CTA -->
      <div
        class="w-full md:max-w-[800px]  flex flex-col h-fit items-center md:px-10 gap-10 justify-center self-center">
        <NuxtLink to="/auth/signUp" class="p-2 mx-5 text-center bg-midHeart rounded-md text-white">Start Learning
        </NuxtLink>
        <div class="md:p-5 p-2 rounded-lg relative border border-whiteLilac bg-selago">
          <span class="text-sm text-comet px-3 py-1 bg-selago border border-whiteLilac rounded-md md:-top-3 -top-5 absolute">
            Why Choose Us?
          </span>
          <div class="grid md:grid-cols-3 justify-items-center grid-cols-2 md:gap-2 gap-5">
            <div v-for="(items, index) in whyUsData" :key="index"
              class="self-center min-w-[140px] flex flex-col gap-1 items-center justify-between">
              <img :src="items.img" class="md:max-w-[70px] max-w-[40px] h-fit" :alt="items.title">
              <p class="text-xs text-ebonyClay text-center">
                {{ items.title }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- Image SLIDER -->
    <div class="">
      <Carousel :autoplay="4000" :wrap-around="true" class="">
        <Slide class="">

          <div
            class="carousel__item px-2 flex lg:flex-row flex-col justify-center items-center gap-5 w-full lg:container relative">
            <img src="/images/hero/World.svg" class="absolute -top-[6%] left-[24.47%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">
            <img src="/images/hero/Data.svg" class="absolute top-[17.8%] left-[10.6%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">
            <img src="/images/hero/Laptop.svg"
              class="absolute bottom-[21.5%] left-[11.59%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">

            <img src="/images/hero/Rocket.svg" class="absolute top-0 right-[17.4%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">
            <img src="/images/hero/Message.svg" class="absolute top-[24%] right-[9.8%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">
            <img src="/images/hero/Football.svg"
              class="absolute bottom-[23%] right-[11.4%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;"
              alt="">

            <img src="/images/hero/heroimage.webp"
              class="w-full lg:max-h-[750px] md:max-h-[578px] max-h-[500px] h-full max-w-[647px]" alt="">
          </div>

        </Slide>

        <Slide class="">

          <div
            class="carousel__item px-2 flex lg:flex-row flex-col justify-center items-center gap-5 w-full lg:container relative">
            <img src="/images/hero/World.svg" class="absolute -top-[6%] left-[24.47%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">
            <img src="/images/hero/Data.svg" class="absolute top-[17.8%] left-[10.6%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">
            <img src="/images/hero/Laptop.svg"
              class="absolute bottom-[21.5%] left-[11.59%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">

            <img src="/images/hero/Rocket.svg" class="absolute top-0 right-[17.4%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">
            <img src="/images/hero/Message.svg" class="absolute top-[24%] right-[9.8%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">
            <img src="/images/hero/Football.svg"
              class="absolute bottom-[23%] right-[11.4%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;"
              alt="">

            <img src="/images/hero/heroimage2.webp"
              class="w-full lg:max-h-[750px] md:max-h-[578px] max-h-[500px] h-full max-w-[647px]" alt="">
          </div>

        </Slide>

        <Slide class="">

          <div
            class="carousel__item px-2 flex lg:flex-row flex-col justify-center items-center gap-5 w-full lg:container relative">
            <img src="/images/hero/World.svg" class="absolute -top-[6%] left-[24.47%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">
            <img src="/images/hero/Data.svg" class="absolute top-[17.8%] left-[10.6%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">
            <img src="/images/hero/Laptop.svg"
              class="absolute bottom-[21.5%] left-[11.59%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">

            <img src="/images/hero/Rocket.svg" class="absolute top-0 right-[17.4%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">
            <img src="/images/hero/Message.svg" class="absolute top-[24%] right-[9.8%] animate-pulse md:w-auto w-[60px]"
              style="animation-duration: 3s;" alt="">
            <img src="/images/hero/Football.svg"
              class="absolute bottom-[23%] right-[11.4%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;"
              alt="">

            <img src="/images/hero/heroimage.webp"
              class="w-full lg:max-h-[750px] md:max-h-[578px] max-h-[500px] h-full max-w-[647px]" alt="">
          </div>

        </Slide>
        <!-- 
          <template #addons>
            <Pagination />
          </template> -->
      </Carousel>
    </div>
  </div>
</template>
<script setup>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const whyUsData = [
  {
    title: "Mock exams",
    img: '/banners/online-education-app.png',
    tab: '2',
    content: "Practice with simulated exams",
  },
  {
    title: "Custom Mocks",
    img: '/banners/online-education-app.png',
    tab: '2',
    content: "Practice with simulated exams",
  },
  {
    title: "Subject-wise Preps",
    img: '/banners/online-education-app.png',
    tab: '4',
    content: "Focus on specific topics efficiently",
  },
]
</script>