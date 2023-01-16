<template>
        <div class=" container mx-auto py-8 sm:py-12 flex flex-col items-center">
                <span class="grid grid-cols-1 md:gap-20 gap-5 sm:grid-cols-4">

                        <div v-for="item in 3"
                                class="flex flex-col rounded-full pb-10 gap-5 border border-mineShaft bg-astronaut text-center px-8 text-shark">
                                <span>
                                        <img src="/images/index_v1/online.png" class="md:w-40 md:h-40 h-20 w-20" alt="">
                                </span>
                                <span class="text-4xl font-bold flex flex-col">
                                        3.5K
                                        <span class="text-lg font-medium text-mineShaft">
                                                Enrolled
                                        </span>
                                </span>


                        </div>
                </span>

                <!-- for manipulation -->
                <span>
                </span>
        </div>
</template>