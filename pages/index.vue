<template>
    <div>

        <section>
            <div class="text-concrete">
                <Hero />
            </div>
        </section>

        <section class="bg-harp">
            <div class="container mx-auto py-10 md:py-20">
                <Feature1 />
            </div>
        </section>

        <section class="bg-harp">
            <div class="container mx-auto border py-10 md:py-20">

                <div class="flex justify-center text-center md:text-5xl text-2xl text-shark md:pb-20 pb-10">
                    <h1>
                        Discover service opportunities in Govt of
                        <span class="text-green-800">Pakistan</span>
                    </h1>
                </div>

                <div class="flex flex-col md:flex-row items-center justify-center gap-10 flex-wrap">
                    <span v-for="items in 8">
                        <CourseCard />
                    </span>

                </div>

                <div class="flex justify-center md:pt-20 pt-10">
                    <a class="group relative inline-block overflow-hidden border border-teaGreen px-8 py-3 focus:outline-none focus:ring"
                        href="/download">
                        <span
                            class="absolute inset-y-0 left-0 w-[2px] bg-teaGreen transition-all group-hover:w-full group-active:bg-teaGreen"></span>

                        <span class="relative text-md font-medium text-teagbg-teaGreen transition-colors">
                            Discover All
                        </span>
                    </a>
                </div>

            </div>
        </section>

    </div>
</template>