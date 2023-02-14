<template>
        <div>

                <section>

                        <PageBanner>
                                <template #bannerImg>
                                        <img src="/images/index_v2/Quizbg.png"
                                                class="h-full w-full absolute opacity-20 z-0 object-none" alt="">
                                </template>

                                <template #head>Job </template>

                                <template #foot> Exams </template>

                        </PageBanner>

                </section>

                <!-- Gallery -->
                <section>
                        <div class="lg: container mx-auto px-9 flex flex-col md:flex-row flex-wrap justify-center gap-8">
                                <JobCourseCard v-for="items in 8" />
                        </div>
                </section>

        </div>
</template>