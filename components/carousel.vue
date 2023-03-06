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

.carousel__slide:active {
  border: 1px solid yellowgreen;
}

.carousel__item .correct {
  opacity: 0;
  animation: replacer ease-in forwards 1;
  animation-duration: 2s;
  animation-delay: 0s;
}

.carousel__item .arrow {
  opacity: 0;
  animation: replacer ease-in forwards 1;
  animation-duration: 2s;
  animation-delay: 0s;
}

.carousel__item .wrong {
  animation: cutter ease-in forwards 1;
  animation-duration: 2s;
}

</style>
<template>
  <Carousel :autoplay="2000" :wrap-around="true" class="">
    <Slide class="lg:py-10 py-5">

      <div class="carousel__item flex lg:flex-row flex-col justify-center items-center gap-5 w-full lg:container">

        <div class="max-w-[475px] flex flex-col gap-5 text-center lg:text-start items-center lg:items-start">


          <h1 class="font-bold md:text-4xl text-xl text-ebonyClay flex md:gap-4 gap-2 items-end">Prepare

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

        <div class="relative">
          <img src="/images/hero/World.svg" class="absolute -top-[6%] left-[24.47%] animate-pulse " style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Data.svg" class="absolute top-[17.8%] left-[10.6%] animate-pulse " style="animation-duration: 3s;"  alt="">
          <img src="/images/hero/Laptop.svg" class="absolute bottom-[21.5%] left-[11.59%] animate-pulse " style="animation-duration: 3s;" alt="">

          <img src="/images/hero/Rocket.svg" class="absolute top-0 right-[17.4%] animate-pulse " style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Message.svg" class="absolute top-[24%] right-[9.8%] animate-pulse " style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Football.svg" class="absolute bottom-[23%] right-[11.4%] animate-pulse " style="animation-duration: 3s;" alt="">

          <img src="/images/hero/heroimage.png" class="w-full lg:max-h-[750px] md:max-h-[578px] max-h-[500px] h-full max-w-[647px]" alt="">
        </div>


      </div>

    </Slide>

    <Slide class="lg:py-10 py-5">

      <div class="carousel__item flex lg:flex-row flex-col justify-center items-center gap-5 w-full lg:container">

        <div class="max-w-[500px] flex flex-col gap-5 text-center lg:text-start items-center lg:items-start">


          <h1 class="font-bold md:text-4xl text-xl text-ebonyClay flex gap-2 items-end">

            <span class="flex flex-col items-center">

              <div class="flex flex-col items-start">

                <!-- correction -->
                <span
                  class="correct md:text-4xl text-2xl transition-transform -rotate-[4deg] font-handlee text-purplHeart font-medium">Whiz</span>
                <!-- arrow -->
                <span class="arrow h-8 "><img src="/images/hero/arrow.svg" class="h-full w-full" alt="arrow"></span>
              </div>

              <!-- the cut -->
              <span class="wrong ">Prepare</span>
            </span>
            <span>Exams Seamlessly</span>
            
          </h1>


          <p>
            Lorem ipsum dolor sit amet consectetur. Quam tellus fusce dolor sed eget at facilisis erat nisl. Aliquet
            tellus vitae pulvinar consectetur in congue viverra nulla.
          </p>
          <span class="px-4 py-2 text-center font-medium text-sm rounded-md text-white bg-midHeart">Start
            Journey</span>

        </div>

        <div class="relative">
          <img src="/images/hero/World.svg" class="absolute -top-[6%] left-[24.47%] animate-pulse " style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Data.svg" class="absolute top-[17.8%] left-[10.6%] animate-pulse " style="animation-duration: 3s;"  alt="">
          <img src="/images/hero/Laptop.svg" class="absolute bottom-[21.5%] left-[11.59%] animate-pulse " style="animation-duration: 3s;" alt="">

          <img src="/images/hero/Rocket.svg" class="absolute top-0 right-[17.4%] animate-pulse " style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Message.svg" class="absolute top-[24%] right-[9.8%] animate-pulse " style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Football.svg" class="absolute bottom-[23%] right-[11.4%] animate-pulse " style="animation-duration: 3s;" alt="">

          <img src="/images/hero/heroimage2.png" class="w-full lg:max-h-[750px] md:max-h-[578px] max-h-[500px] h-full max-w-[647px]" alt="">
        </div>


      </div>

    </Slide>

    <Slide class="lg:py-10 py-5">

      <div class="carousel__item flex lg:flex-row flex-col justify-center items-center gap-5 w-full lg:container">

      <div class=" max-w-[600px] flex flex-col gap-5 text-center lg:text-start items-center lg:items-start">


          <h1 class="font-bold md:text-4xl text-xl text-ebonyClay flex md:gap-4 gap-2 items-end">Here, Exams are

            <span class="flex flex-col items-center">

              <div class="flex flex-col items-start">

                <!-- correction -->
                <span
                  class="correct md:text-4xl text-2xl transition-transform -rotate-[4deg] font-handlee text-purplHeart font-medium">Energizing</span>
                <!-- arrow -->
                <span class="arrow h-8 "><img src="/images/hero/arrow.svg" class="h-full w-full" alt="arrow"></span>
              </div>

              <!-- the cut -->
              <span class="wrong ">Exhausting</span>
            </span>
            
          </h1>


          <p>
            Lorem ipsum dolor sit amet consectetur. Quam tellus fusce dolor sed eget at facilisis erat nisl. Aliquet
            tellus vitae pulvinar consectetur in congue viverra nulla.
          </p>
          <span class="px-4 py-2 text-center font-medium text-sm rounded-md text-white bg-midHeart">Start
            Journey</span>

        </div>

        <div class="relative">
          <img src="/images/hero/World.svg" class="absolute -top-[6%] left-[24.47%] animate-pulse " style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Data.svg" class="absolute top-[17.8%] left-[10.6%] animate-pulse " style="animation-duration: 3s;"  alt="">
          <img src="/images/hero/Laptop.svg" class="absolute bottom-[21.5%] left-[11.59%] animate-pulse " style="animation-duration: 3s;" alt="">

          <img src="/images/hero/Rocket.svg" class="absolute top-0 right-[17.4%] animate-pulse " style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Message.svg" class="absolute top-[24%] right-[9.8%] animate-pulse " style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Football.svg" class="absolute bottom-[23%] right-[11.4%] animate-pulse " style="animation-duration: 3s;" alt="">

          <img src="/images/hero/heroimage.png" class="w-full lg:max-h-[750px] md:max-h-[578px] max-h-[500px] h-full max-w-[647px]" alt="">
        </div>


      </div>

    </Slide>
    <!-- 
          <template #addons>
            <Pagination />
          </template> -->
  </Carousel>
</template>
<script setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
</script>