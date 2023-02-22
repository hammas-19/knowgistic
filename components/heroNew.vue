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
.arrow{
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
    <div class="bg-selago md:pt-28 pt-2 pb-80 relative w-full flex justify-center">

        <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide" class="border-4 ">

      <div class="carousel__item">

        <div class="max-w-[475px] flex flex-col gap-5 text-center items-center">


          <h1 class="font-bold md:text-4xl text-2xl text-ebonyClay flex md:gap-4 gap-2 items-end">Prepare

            <span class="flex flex-col items-center">

              <div class="flex flex-col items-start">

                <!-- correction -->
                <span
                  class="correct md:text-4xl text-2xl transition-transform -rotate-[4deg] font-handlee text-purplHeart font-medium">Smarter</span>
                <!-- arrow -->
                <span class="arrow h-8 "><img src="/images/hero/arrow.svg" class="h-full w-full" alt="arrow"></span>
              </div>

              <!-- the cut -->
              <span class="wrong ">Harder</span>
            </span>

            Way
          </h1>


          <p>
            Lorem ipsum dolor sit amet consectetur. Quam tellus fusce dolor sed eget at facilisis erat nisl. Aliquet
            tellus vitae pulvinar consectetur in congue viverra nulla.
          </p>
          <span class="px-4 py-2 text-center font-medium text-sm rounded-md text-white bg-midHeart">Start
            Journey</span>

        </div>


      </div>

    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>

        <!-- Bottom Img -->
        <span class="absolute bottom-0 w-full bg-none z-10">
            <img src="/images/hero/heroBottom.svg" class="w-full" alt="">
        </span>
        <!-- Right Img -->
        <!-- <span class="absolute right-0 bottom-0 md:block hidden">
            <img src="/banners/bannerImg.png" class="w-[400px]" alt="">
        </span> -->
        <!-- Left Img -->
        <!-- <span class="absolute left-0 bottom-44 md:block hidden">
            <img src="/banners/bannerImg2.png" class="w-[400px]" alt="">
        </span> -->
    </div>
</template>
<script setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
</script>
