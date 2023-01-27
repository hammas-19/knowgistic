<style scoped>
.Info::-webkit-scrollbar {
    display: none;
}
</style>
<template>
    <div
        class="md:w-[580px] w-[300px]  h-[460px] md:h-[463px] flex md:flex-row flex-col-reverse gap-2 rounded-3xl p-2 bg-white shadow-2xl relative">

        <!-- fading div -->
        <div
            class="absolute w-[95%] md:w-[48%] md:h-20 h-14 bottom-2 bg-cardFade mx-auto rounded-b-3xl">
        </div>

        <!-- No of contents -->
        <div class="absolute w-[95%] md:w-[48%] h-10 top-[111px] md:top-2 bg-[#ffffff7f] backdrop-blur-[6px] mx-auto rounded-t-3xl pl-10 pt-3">
            <span class="text-base font-jost ">12 courses . 18quizzes</span>
        </div>

        <!-- Info -->
        <div class="Info flex flex-col p-4 rounded-3xl bg-[#f3f1fc] md:w-1/2 w-full overflow-y-scroll pt-12">

            <div v-for="items in 12" class="flex items-start gap-2">
                <span><img src="/images/Gallery/Ellipse.svg" class="w-12 mt-1" alt="elipse"></span>
                <div class="flex flex-col gap-2">
                    <span class="md:text-lg text-sm text-ebonyClay font-medium">Lorem ipsum dolor sit amet
                        consectetur.</span>
                    <span class="text-xs text-comet">Lorem ipsum dolor sit amet consectetur. Gravida quam faucibus
                        ornare egestas mi in mattis
                        auctor.</span>
                </div>
            </div>

        </div>

        <!-- ImageGraphy -->
        <div class="h-full md:w-1/2 w-full rounded-3xl bg-midHeart relative text-4xl text-white">

            <div class="absolute w-full text-center md:bottom-5 bottom-0 min-h-[95px]">
                <h1 class="text-4xl font-bold font-jost">FA/FSC</h1>
                
                <span class="px-8 py-2 text-center font-medium text-sm rounded-full hover:bg-white hover:text-purplHeart hover:shadow-xl transition-all text-white border-2 border-white cursor-pointer">
                    Start Journey
                </span>

            </div>

        </div>


    </div>
</template>