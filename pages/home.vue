<template>
    <div>

        <!-- Hero -->
        <section class="bg-selago relative">
            <div class="flex justify-center">
                <HeroNew />
            </div>
        </section>

        <!-- Why Choose Us -->
        <section>
            <div>
                <WhyUs />
            </div>
        </section>

        <!-- Categories -->
        <section>
            <div class="py-16">

                <HeadingText/>

            </div>
            <div class="py-16">

                <Categories/>

            </div>
        </section>

        <!-- Feature -->
        <section>
            <div class="py-16">

                <!-- Typo/Info -->
                <div class="pb-5 flex flex-col max-w-[402px] gap-3 text-center justify-center mx-auto">

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
        <section class="">

            <!-- Stats -->
            <Stats/>

        </section>


    </div>
</template>
