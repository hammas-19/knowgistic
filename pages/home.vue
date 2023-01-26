<template>
        <div>
            
            <!-- Hero -->
            <section class="bg-selago relative">
                <div class="flex justify-center">
                        <HeroNew />
                </div>
            </section>

            <!-- Gallery -->
            <section class="bg-selago">

                <!-- Typo/Info -->
                <div class="py-14 flex flex-col max-w-[402px] gap-3 text-center justify-center mx-auto">

                    <span class="text-purplHeart font-medium">Lorem ipsum dolor sit ipsum dolor</span>
                    <span class="text-4xl font-bold text-ebonyClay">Lorem ipsum dolor sit ipsum dolor</span>
                    <span class="text-comet text-xs">Lorem ipsum dolor sit amet consectetur. A lectus volutpat diam quis.</span>
                
                </div>  

                <!-- Open Cards -->
                <div class="flex justify-evenly">
                    <JobCourseCard v-for="items in 2" :class="{'flex-row-reverse' : items === 2}" />
                </div>


            </section>


        </div>
</template>