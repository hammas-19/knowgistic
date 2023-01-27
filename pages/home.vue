<template>
    <div>

        <!-- Hero -->
        <section class="bg-selago relative">
            <div class="flex justify-center">
                <HeroNew />
            </div>
        </section>

        <!-- Feature -->
        <section>
            <div class="py-16 border">

                <!-- Typo/Info -->
                <div class="pb-5 flex flex-col max-w-[402px] gap-3 text-center justify-center mx-auto border">

                    <span class="text-purplHeart font-medium">Lorem ipsum dolor sit ipsum dolor</span>
                    <span class="text-4xl font-bold text-ebonyClay">Lorem ipsum dolor sit ipsum dolor</span>
                    <span class="text-comet text-xs">Lorem ipsum dolor sit amet consectetur. A lectus volutpat diam
                        quis.
                    </span>

                </div>

                <!-- Feature Tabs -->
                <MainFeatures />

            </div>
        </section>


        <!-- Gallery -->
        <section class="bg-selago">

            <!-- Typo/Info -->
            <div class="py-14 flex flex-col max-w-[402px] gap-3 text-center justify-center mx-auto">

                <span class="text-purplHeart font-medium">Lorem ipsum dolor sit ipsum dolor</span>
                <span class="text-4xl font-bold text-ebonyClay">Lorem ipsum dolor sit ipsum dolor</span>
                <span class="text-comet text-xs">Lorem ipsum dolor sit amet consectetur. A lectus volutpat diam
                    quis.</span>

            </div>

            <!-- Open Cards -->
            <div class="flex justify-evenly md:flex-row-reverse flex-col w-full  items-center gap-10 pb-14">
                <JobCourseCard v-for="items in 2" :class="{ 'flex-row-reverse': items === 2 }" />
            </div>


        </section>


    </div>
</template>
