<template>
    <div>

        <!-- Hero section -->
        <section>
            <div class="text-concrete">
                <Hero />
            </div>
        </section>

        <!-- Feature section -->

        <!-- <section class="bg-myst">
            <div class="container mx-auto py-10 md:py-20">
                <Feature1 />
            </div>
        </section> -->

        <!-- Content section -->

        <section class="bg-myst">
            <div
                class="container mx-auto py-10 md:py-20 md:border-4 border-[3px] border-nectarine border-dashed rounded-3xl">

                <div class="md:text-5xl text-2xl container mx-auto text-shark md:pb-16 pb-10 text-center max-w-[650px]">
                    <h1>
                        Discover service opportunities in Govt of
                        <span class="text-green-800">Pakistan</span>
                    </h1>
                </div>

                <div class="flex flex-col md:flex-row items-center justify-center gap-10 flex-wrap">

                    <ShowCard />


                </div>

                <div class="flex justify-center md:pt-20 pt-10 rounded-full">
                    <a class="group relative inline-block overflow-hidden border-dashed md:border-4 border-2 border-astronaut hover:border-nectarine px-8 py-3 focus:outline-none focus:ring rounded-full"
                        href="/download">
                        <span
                            class="absolute inset-y-0 left-0 w-[2px] bg-astronaut transition-all group-hover:w-full group-active:bg-astronaut rounded-full"></span>

                        <span class="relative text-md font-medium text-teagbg-astronaut transition-colors rounded-full">
                            Discover All
                        </span>
                    </a>
                </div>

            </div>
        </section>

        <!-- Job Application section -->

        <section class="bg-myst">
            <div class="container mx-auto py-10 md:py-20">
                <Govtob />
            </div>
        </section>

        <!-- Top feature section -->

        <section class="bg-myst rounded-t-3xl">
            <div class="container mx-auto py-10 md:py-20">

                <TopFeatures />

            </div>
        </section>

    </div>
</template>
<script setup>

</script>