<template>
    <div v-for="items in courseData " class="flex flex-col items-center max-w-[340px] md:max-w-[420px]">

        <img :src="items.image"
            class="md:border-2 border-dashed border-b-0 border-astronaut  rounded-xl rounded-b-none md:rounded-b-xl w-[340px] md:h-[160px] h-[120px] md:w-[420px] object-cover"
            alt="">
        <div
            class="flex flex-col rounded-2xl bg-astronaut gap-3  p-5 min-w-[290px] md:min-w-[400px] -mt-2 md:-mt-10 hover:shadow-2xl transition-all hover:-mt-14">

            <span class="text-myst text-2xl font-semibold">
                {{ items.from }}
            </span>
            <span class="text-lg font-semibold text-osloGrey">
                Quiz - Level 1
            </span>
            <div class="flex rounded-2xl pt-5">
                <a class="group relative inline-block overflow-hidden border-dashed border-4 border-nectarine px-8 py-2 focus:outline-none focus:ring rounded-2xl"
                    href="/download">
                    <span
                        class="absolute inset-y-0 left-0 w-[2px] bg-myst transition-all group-hover:w-full group-active:bg-myst rounded-2xl"></span>

                    <span
                        class="relative text-md font-medium text-teagbg-myst transition-colors rounded-2xl text-nectarine ">
                        PLAY
                    </span>
                </a>
            </div>

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