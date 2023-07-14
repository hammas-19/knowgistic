<template>
    <div v-for="items in courseData " class="flex flex-col items-center max-w-[340px] md:max-w-[220px]">

        <img :src="items.image"
            class="border rounded-xl rounded-b-none md:rounded-b-xl w-[340px] md:h-[160px] h-[120px] md:w-[420px] object-cover"
            alt="">
        <div
            class="flex flex-col rounded-2xl bg-whiteLilac gap-2  p-3 -mt-2 md:-mt-10 hover:shadow-lg transition-all md:hover:-mt-11 hover:-mt-3 text-ebonyClay items-center w-[95%]">

            <span class=" text-lg text-center font-semibold">
                {{ items.from }}
            </span>
            <!-- <span class="text-lg font-semibold">
                Quiz - Level 1
            </span> -->
                        <NuxtLink
                            class="relative font-medium  rounded-xl border px-6 py-2 text-white bg-comet transition-all cursor-pointer">
                            Start
                        </NuxtLink>

        </div>

    </div>
</template>
<script setup>
const courseData = [
    {
        image: 'images/index_v2/gk.png',
        from: 'General Knowledge'
    },
    {
        image: 'images/index_v2/analytics.png',
        from: 'Analytical Problems'
    },
    {
        image: 'images/index_v2/ca.png',
        from: 'Current Affairs'
    },
    {
        image: 'images/index_v2/cs.png',
        from: 'Computer Studies'
    },
    {
        image: 'images/index_v2/eng.png',
        from: 'English'
    },
    {
        image: 'images/index_v2/isl.png',
        from: 'Islamic Studies'
    },
    {
        image: 'images/index_v2/maths.png',
        from: 'Maths'
    },
    {
        image: 'images/index_v2/pro.png',
        from: 'Professionalism'
    },
    {
        image: 'images/index_v2/sci.png',
        from: 'General Science'
    },
    {
        image: 'images/index_v2/sindhi.png',
        from: 'Sindhi'
    },
    {
        image: 'images/index_v2/urdu.png',
        from: 'Urdu'
    },
]
</script>