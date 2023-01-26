<style scoped>
.Info::-webkit-scrollbar {
    display: none;
}
</style>
<template>
    <div class="md:w-[580px] w-[300px] md:h-[463px] h-[343px] flex gap-2 rounded-3xl p-2 bg-white shadow-2xl">


        <!-- Info -->
        <div class="Info flex flex-col p-4 rounded-3xl bg-[#f3f1fc] w-1/2 overflow-y-scroll">

            <div v-for="items in 12" class="flex items-start gap-2">
                <span><img src="/images/Gallery/Ellipse.svg" class="w-12 mt-1" alt="elipse"></span>
                <div class="flex flex-col gap-2">
                    <span class="text-lg text-ebonyClay font-medium">Lorem ipsum dolor sit amet consectetur.</span>
                    <span class="text-xs text-comet">Lorem ipsum dolor sit amet consectetur. Gravida quam faucibus ornare egestas mi in mattis
                        auctor.</span>
                </div>
            </div>

        </div>
  
        <!-- ImageGraphy -->
        <div class="h-full w-1/2 rounded-3xl bg-midHeart relative text-4xl text-white">

            <div class="absolute w-full text-center bottom-5">
            <h1 class="text-4xl font-bold font-jost">FA/FSC</h1>
            <span class="text-sm font-jost ">12 courses . 18quizzes</span>
            </div>

        </div>


    </div>
</template>