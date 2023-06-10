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

/* manipulation 1 */
.carousel__item .correct1 {
  opacity: 0;
  animation: replacer ease-in forwards 1;
  animation-duration: 1s;
  animation-delay: 0.2s;
}

/* manipulation 1 */
.carousel__item .arrow1 {
  opacity: 0;
  animation: replacer ease-in forwards 1;
  animation-duration: 1s;
  animation-delay: 0.2s;
}

/* manipulation 1 */
.carousel__item .wrong1 {
  animation: cutter ease-in forwards 1;
  animation-duration: 0.5s;
}

/* manipulation 2 */
.carousel__item .correct2 {
  opacity: 0;
  animation: replacer ease-in forwards 1;
  animation-duration: 1s;
  animation-delay: 3.2s;
}

/* manipulation 2 */
.carousel__item .arrow2 {
  opacity: 0;
  animation: replacer ease-in forwards 1;
  animation-duration: 1s;
  animation-delay: 3.2s;
}

/* manipulation 2 */
.carousel__item .wrong2 {
  animation: cutter ease-in forwards 1;
  animation-duration: 0.5s;
  animation-delay: 3s;
}



/* manipulation 3 */
.carousel__item .correct3 {
  opacity: 0;
  animation: replacer ease-in forwards 1;
  animation-duration: 1s;
  animation-delay: 5.7s;
}

/* manipulation 3 */
.carousel__item .arrow3 {
  opacity: 0;
  animation: replacer ease-in forwards 1;
  animation-duration: 1s;
  animation-delay: 5.7s;
}

/* manipulation 3 */
.carousel__item .wrong3 {
  animation: cutter ease-in forwards 1;
  animation-delay: 5.4s;
  animation-duration: 0.5s;
  
}

</style>
<template>
  <!-- :autoplay="2000" -->
  <Carousel  :wrap-around="true" class="">
    <Slide class="lg:py-10 py-5">

      <div class="carousel__item px-2 flex lg:flex-row flex-col justify-center items-center gap-5 w-full lg:container">

        <div class="max-w-[475px] flex flex-col gap-5 text-center lg:text-start items-center lg:items-start">


          <h1 class="font-bold md:text-4xl text-xl text-ebonyClay flex md:gap-4 gap-2 items-end">Prepare

            <span class="flex flex-col items-center">

              <div class="flex flex-col items-start">

                <!-- correction -->
                <span
                  class="correct1 md:text-4xl text-2xl transition-transform -rotate-[4deg] font-handlee text-purplHeart font-medium">Smarter</span>
                <!-- arrow -->
                <span class="arrow1 h-8 "><img src="/images/hero/arrow.svg" class="h-full w-full" alt="arrow"></span>
              </div>

              <!-- the cut -->
              <span class="wrong1 ">Harder</span>
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
          <img src="/images/hero/World.svg" class="absolute -top-[6%] left-[24.47%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Data.svg" class="absolute top-[17.8%] left-[10.6%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;"  alt="">
          <img src="/images/hero/Laptop.svg" class="absolute bottom-[21.5%] left-[11.59%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">

          <img src="/images/hero/Rocket.svg" class="absolute top-0 right-[17.4%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Message.svg" class="absolute top-[24%] right-[9.8%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Football.svg" class="absolute bottom-[23%] right-[11.4%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">

          <img src="/images/hero/heroimage.webp" class="w-full lg:max-h-[750px] md:max-h-[578px] max-h-[500px] h-full max-w-[647px]" alt="">
        </div>


      </div>

    </Slide>

    <Slide class="lg:py-10 py-5">

      <div class="carousel__item px-2 flex lg:flex-row flex-col justify-center items-center gap-5 w-full lg:container">

        <div class="max-w-[500px] flex flex-col gap-5 text-center lg:text-start items-center lg:items-start">


          <h1 class="font-bold md:text-4xl text-xl text-ebonyClay flex gap-2 items-end">

            <span class="flex flex-col items-center">

              <div class="flex flex-col items-start">

                <!-- correction -->
                <span
                  class="correct2 md:text-4xl text-2xl transition-transform -rotate-[4deg] font-handlee text-purplHeart font-medium">Whiz</span>
                <!-- arrow -->
                <span class="arrow2 h-8 "><img src="/images/hero/arrow.svg" class="h-full w-full" alt="arrow"></span>
              </div>

              <!-- the cut -->
              <span class="wrong2 ">Prepare</span>
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
          <img src="/images/hero/World.svg" class="absolute -top-[6%] left-[24.47%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Data.svg" class="absolute top-[17.8%] left-[10.6%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;"  alt="">
          <img src="/images/hero/Laptop.svg" class="absolute bottom-[21.5%] left-[11.59%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">

          <img src="/images/hero/Rocket.svg" class="absolute top-0 right-[17.4%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Message.svg" class="absolute top-[24%] right-[9.8%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Football.svg" class="absolute bottom-[23%] right-[11.4%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">

          <img src="/images/hero/heroimage2.webp" class="w-full lg:max-h-[750px] md:max-h-[578px] max-h-[500px] h-full max-w-[647px]" alt="">
        </div>


      </div>

    </Slide>

    <Slide class="lg:py-10 py-5">

      <div class="carousel__item px-2 flex lg:flex-row flex-col justify-center items-center gap-5 w-full lg:container">

      <div class=" max-w-[600px] flex flex-col gap-5 text-center lg:text-start items-center lg:items-start">


          <h1 class="font-bold md:text-4xl text-xl text-ebonyClay flex md:gap-4 gap-2 items-end">Here, Exams are

            <span class="flex flex-col items-center">

              <div class="flex flex-col items-start">

                <!-- correction -->
                <span
                  class="correct3 md:text-4xl text-2xl transition-transform -rotate-[4deg] font-handlee text-purplHeart font-medium">Energizing</span>
                <!-- arrow -->
                <span class="arrow3 h-8 "><img src="/images/hero/arrow.svg" class="h-full w-full" alt="arrow"></span>
              </div>

              <!-- the cut -->
              <span class="wrong3 ">Exhausting</span>
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
          <img src="/images/hero/World.svg" class="absolute -top-[6%] left-[24.47%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Data.svg" class="absolute top-[17.8%] left-[10.6%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;"  alt="">
          <img src="/images/hero/Laptop.svg" class="absolute bottom-[21.5%] left-[11.59%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">

          <img src="/images/hero/Rocket.svg" class="absolute top-0 right-[17.4%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Message.svg" class="absolute top-[24%] right-[9.8%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">
          <img src="/images/hero/Football.svg" class="absolute bottom-[23%] right-[11.4%] animate-pulse md:w-auto w-[60px]" style="animation-duration: 3s;" alt="">

          <img src="/images/hero/heroimage.webp" class="w-full lg:max-h-[750px] md:max-h-[578px] max-h-[500px] h-full max-w-[647px]" alt="">
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
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
</script>